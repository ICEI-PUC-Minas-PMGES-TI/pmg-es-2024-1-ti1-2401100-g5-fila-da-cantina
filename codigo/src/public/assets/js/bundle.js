var db = new PouchDB("cantinaexpress");
var sessions = new PouchDB("sessions");

db.createIndex({
  index: { fields: ["email"] },
});

sessions.createIndex({
  index: { fields: ["sessionId"] },
});

function validateFields(codigoDePessoa, name, password, email) {
  const errors = [];

  if (!new RegExp(/^[0-9]{6}$/).test(codigoDePessoa))
    errors.push({ field: "codigoDePessoa", message: "invalid field" });

  if (!new RegExp(/^[a-zA-Z]{3,16}$/).test(name))
    errors.push({ field: "name", message: "invalid field" });

  if (!new RegExp(/^.{6,}$/).test(password))
    errors.push({ field: "password", message: "invalid field" });

  if (!new RegExp(/^\S+@\S+\.\S+$/).test(email))
    errors.push({ field: "email", message: "invalid field" });

  if (errors.length > 0) return { success: false, errors };

  return { success: true, errors };
}

const getCookie = (cookieStr) =>
  cookieStr
    .split(";")
    .map((str) => str.trim().split(/=(.+)/))
    .reduce((acc, curr) => {
      acc[curr[0]] = curr[1];
      return acc;
    }, {});

function eraseCookies() {
  cookies = document.cookie.split("; ").map((a) => a.split("=")[0]);
  for (var i in cookies) {
    document.cookie = cookies[i] + "=;expires=" + new Date(0).toUTCString();
  }
}

class User {
  constructor(id = crypto.randomUUID(), codigoDePessoa, name, password, email) {
    this.id = id;
    this.codigoDePessoa = codigoDePessoa;
    this.name = name;
    this.password = password;
    this.email = email;
  }

  create() {
    const isValid = validateFields(
      this.codigoDePessoa,
      this.name,
      this.password,
      this.email
    );

    if (!isValid.success) return isValid;

    db.find({
      selector: { email: this.email },
      fields: ["_id", "email"],
      sort: ["email"],
    })
      .then((result) => {
        if (result.docs.length > 0) {
          return "email already exists";
        }

        db.put({
          _id: this.id,
          codigoDePessoa: this.codigoDePessoa,
          name: this.name,
          email: this.email,
          password: this.password,
        });
      })
      .catch(function (err) {
        console.log(err);
      });

    return {
      id: this.id,
      codigoDePessoa: this.codigoDePessoa,
      email: this.email,
      name: this.name,
    };
  }

  patch() {
    const obj = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    Object.keys(obj).map((k) => (obj[k] == null ? delete obj[k] : false));

    db.get(this.id)
      .then(function (doc) {
        const newDocument = Object.assign(doc, obj);
        return db.put(newDocument);
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  getCurrent() {
    db.get(this.id).then(function (doc) {
      console.log(doc);
    });
  }
}

class Session {
  create(id) {
    sessions
      .put({
        _id: window.crypto.randomUUID(),
        userId: id,
        expires: new Date(Date.now() + 1000 * 86400),
      })
      .then(function (result) {
        document.cookie = `sessionid=${result.id}; path=/`;
        document.cookie = `isSessionExpired=false; path=/`;
      });
  }

  verify(sessionId) {
    sessions.get(sessionId).then((result) => {
      if (!result) {
        document.cookie = `isSessionExpired=true; path=/`;
        throw new Error("session not found");
      }

      if (!(new Date(result.expires) > new Date(Date.now()))) {
        document.cookie = `isSessionExpired=true; path=/`;
        throw new Error("session expired");
      }

      document.cookie = `isSessionExpired=false; path=/`;
    });
  }

  async getCurrentBySession(sessionId) {
    const session = await sessions.get(sessionId);
    const user = await db.get(session.userId);

    return user;
  }
}

class Auth {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  authenticate() {
    db.find({
      selector: { email: this.email },
      fields: ["_id", "email", "password"],
    })
      .then(async (result) => {
        if (result.docs.length <= 0) {
          return "user doesnt exists";
        }

        if (this.password === result.docs[0].password) {
          const session = new Session();

          session.create(result.docs[0]._id);

          window.location.href = "/";
        }
      })
      .catch(function (err) {
        if (err === "session not found" || err === "session expired") {
          window.localStorage.removeItem("session");
          window.location = "/login";
        }
      });
  }
}
