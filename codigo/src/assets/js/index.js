$(document).ready(async function () {
  const cookies = getCookie(document.cookie);

  if (cookies) {
    const sessionHandler = new Session();

    sessionHandler.verify(cookies["sessionid"]);

    if (cookies["isSessionExpired"] === "false") {
      $("#login").hide();
      $("#register").hide();

      const sessionHandler = new Session();
      const user = await sessionHandler.getCurrentBySession(
        cookies["sessionid"]
      );
      if (user) {
        $("#avatar-wrapper").removeClass("hidden");
        $("#avatar-wrapper").addClass("flex");
        $(
          `<span class="text-white">${user.name.charAt(0).toUpperCase()}</span>`
        ).appendTo("#avatar");

        $("#add-item").on("click", function (e) {
          const props = $(e.currentTarget).attr("itemprop").split(";");
          console.log(props);
        });

        const cart = window.localStorage.getItem("cart");

        if (cart) {
          const cartItems = JSON.parse(cart);
        }

        $("#logout").on("click", function () {
          eraseCookies();
          window.location.href = "/login.html";
        });
      }
    } else {
      window.location.href = "/login.html";
    }
  }
});
