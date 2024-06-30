var email;
var password;

const emailRegex = /^\S+@\S+\.\S+$/;
const passwordRegex = /^.{6,}$/;

document.addEventListener("keypress", (event) => {
  if (event.isTrusted && event.key === "Enter") {
    $("#submit").click();
  }
});

$(document).ready(function () {
  const cookies = getCookie(document.cookie);

  if (cookies) {
    const sessionHandler = new Session();

    sessionHandler.verify(cookies['sessionid'])

    if(cookies['isSessionExpired'] === 'true') {
      eraseCookies();
      window.location.href = "/";
    }
  }
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

  $("#submit").on("click", function (e) {
    if (!password || !email) return;
    if ($("#errors").children().length > 1) return;

    const auth = new Auth(email, password);

    auth.authenticate();
  });
});
