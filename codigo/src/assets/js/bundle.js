var db = new PouchDB("cantinaexpress");

db.createIndex({
  index: { fields: ["email"] },
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

function listUsers() {
  db.allDocs({
    include_docs: true,
    attachments: true,
  })
    .then(function (result) {
      console.log(result);
    })
    .catch(function (err) {
      console.log(err);
    });
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
      .then((result) => {
        if (result.docs.length <= 0) {
          return "user doesnt exists";
        }

        if (this.password === result.docs[0].password) {
          console.log("authed");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}
