var codigoDePessoa;
var nome;
var email;
var password;
var confirmPassword;

const codigoRegex = /^[0-9]{6}$/;
const nameRegex = /^[a-zA-Z]{3,16}$/;
const passwordRegex = /^.{6,}$/;
const emailRegex = /^\S+@\S+\.\S+$/;

$(document).ready(function () {
  const cookies = getCookie(document.cookie);

  if (cookies) {
    const sessionHandler = new Session();

    sessionHandler.verify(cookies['sessionid'])

    if(cookies['isSessionExpired'] === 'true') {
      eraseCookies();
      window.location.href = "/index.html";
    }
  }

  $("#codigo").on("change", function (e) {
    if (codigoRegex.test(e.target.value)) {
      codigoDePessoa = e.target.value;
      $("#invalidCode").remove();
      if ($("#errors").children().length < 2) {
        $("#errors").addClass("hidden");
      }
    } else {
      if ($("#errors").has("#invalidCode").length > 0) return;

      $("#errors").removeClass("hidden");
      $(
        "<span class='text-red-500 text-md' id='invalidCode'>* Código inválido</span>"
      ).appendTo("#errors");
    }
  });
  $("#email").on("change", function (e) {
    if (emailRegex.test(e.target.value)) {
      email = e.target.value;
      $("#invalidEmail").remove();
      if ($("#errors").children().length < 2) {
        $("#errors").addClass("hidden");
      }
    } else {
      if ($("#errors").has("#invalidEmail").length > 0) return;

      $("#errors").removeClass("hidden");
      $(
        "<span class='text-red-500 text-md' id='invalidEmail'>* E-mail inválido</span>"
      ).appendTo("#errors");
    }
  });
  $("#name").on("change", function (e) {
    if (nameRegex.test(e.target.value)) {
      nome = e.target.value;
      $("#invalidName").remove();
      if ($("#errors").children().length < 2) {
        $("#errors").addClass("hidden");
      }
    } else {
      if ($("#errors").has("#invalidName").length > 0) return;

      $("#errors").removeClass("hidden");
      $(
        "<span class='text-red-500 text-md' id='invalidName'>* Nome inválido</span>"
      ).appendTo("#errors");
    }
  });
  $("#password").on("change", function (e) {
    if (passwordRegex.test(e.target.value)) {
      password = e.target.value;
      $("#invalidPassword").remove();
      if ($("#errors").children().length < 2) {
        $("#errors").addClass("hidden");
      }
    } else {
      if ($("#errors").has("#invalidPassword").length > 0) return;

      $("#errors").removeClass("hidden");
      $(
        "<span class='text-red-500 text-md' id='invalidPassword'>* Senha inválida</span>"
      ).appendTo("#errors");
    }
  });
  $("#confirmPassword").on("change", function (e) {
    if (password === e.target.value) {
      confirmPassword = e.target.value;
      $("#invalidConfirmPassword").remove();
      if ($("#errors").children().length < 2) {
        $("#errors").addClass("hidden");
      }
    } else {
      if ($("#errors").has("#invalidConfirmPassword").length > 0) return;

      $("#errors").removeClass("hidden");
      $(
        "<span class='text-red-500 text-md' id='invalidConfirmPassword'>* As senhas não conferem</span>"
      ).appendTo("#errors");
    }
  });

  $("#submit").on("click", function (e) {
    if (!codigoDePessoa || !nome || !password || !confirmPassword || !email)
      return;
    if ($("#errors").children().length > 1) return;

    const newUser = new User(
      crypto.randomUUID(),
      codigoDePessoa,
      nome,
      password,
      email
    );

    const user = newUser.create();

    if (user) {
      alert("Usuário cadastrado com sucesso!");
      window.location.href = "login.html";
    }
  });
});
