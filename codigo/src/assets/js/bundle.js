var db = new PouchDB("cantinaexpress");

function validateFields(codigoDePessoa, name, password, email) {
  const errors = [];

  if (!new RegExp(/^[0-9]{6}$/).test(codigoDePessoa))
    errors.push({ field: "codigoDePessoa", message: "invalid field" });

  if (!new RegExp(/^[a-zA-Z]{3,16}$/).test(name))
    errors.push({ field: "name", message: "invalid field" });

  if (
    !new RegExp(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@\$])[a-zA-Z0-9!@\$]{6,}$/
    ).test(password)
  )
    errors.push({ field: "password", message: "invalid field" });

  if (
    !new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email)
  )
    errors.push({ field: "email", message: "invalid field" });

  if (errors.length > 0) return { success: false, errors };

  return { success: true, errors };
}

class User {
  constructor(codigoDePessoa, name, email, password) {
    this.id = crypto.randomUUID();
    this.codigoDePessoa = codigoDePessoa;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  create() {
    const isValid = validateFields(
      this.codigoDePessoa,
      this.name,
      this.password,
      this.email
    );

    if (!isValid.success) return "lixo";

    db.put({
      _id: this.id,
      codigoDePessoa: this.codigoDePessoa,
      name: this.name,
      email: this.email,
      password: this.password,
    });
  }

  async getCurrent() {
    db.get(this.id).then(function (doc) {
      console.log(doc);
    });
  }
}

const newUser = new User(1, 1, 1, 1);
const fudido = newUser.create();
const user = newUser.getCurrent();
console.log(user);
