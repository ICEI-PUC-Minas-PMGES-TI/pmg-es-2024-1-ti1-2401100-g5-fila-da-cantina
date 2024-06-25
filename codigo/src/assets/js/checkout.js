function formatName(name) {
  const removeTracos = name.replace("-", " ");

  const words = removeTracos.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  const formatted = words.join(" ");

  return formatted;
}

$(document).ready(function () {
  const cookies = getCookie(document.cookie);

  if (cookies) {
    const sessionHandler = new Session();

    sessionHandler.verify(cookies["sessionid"]);

    if (cookies["isSessionExpired"] === "true") {
      eraseCookies();
      window.location.href = "/login.html";
    }

    const cart = window.localStorage.getItem("cart");
    if (cart) {
      const cartItems = JSON.parse(cart);

      if (cartItems.length <= 0) {
        $text =
          '<div class="text-blue-400 text-3xl"><span>Seu carrinho está vazio.</span></div>';

        $("main").append($text);
      } else {
        cartItems.map((item) => {
          $newDiv = `<div class="p-4 w-full flex flex-row justify-between">
          <div>
            <span class="text-bold text-2xl product-name">${formatName(
              item.name
            )}</span>
          </div>
          <div>
            <div>
              <span class="text-bold text-2xl text-blue-400">R$ ${
                item.units * item.price
              }</span>
            </div>
          </div>
        </div>
        <div class="p-4 flex flex-row gap-4 items-center">
          <div class="w-4 h-4 fill-blue-400 cursor-pointer hover:brightness-90 remove-unit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
            </svg>
          </div>
          <span class="units">${item.units}</span>
          <div class="w-4 h-4 fill-blue-400 cursor-pointer hover:brightness-90 add-unit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              />
            </svg>
          </div>
        </div>
`;

          $("#cart-details").append($newDiv);
        });
      }
    } else {
      $text =
        '<div class="text-blue-400 text-3xl px-20"><span>Seu carrinho está vazio.</span></div>';

      $("main").append($text);
    }

    $(".add-unit").on("click", function (e) {
      var unitsSpan = $(this).siblings(".units");

      var currentUnits = parseInt(unitsSpan.text());
      unitsSpan.text(currentUnits + 1);

      var itemNameSpan = $(this)
        .closest(".p-4")
        .siblings(".p-4")
        .find(".product-name");

      itemNameSpan.raplace(" ", "-");
      itemNameSpan.toLowerCase();

      var cart = window.localStorage.getItem("cart");

      if (cart) {
        var cartItems = JSON.parsee(cart);

        if (cartItems) {
          cartItems.map((item, index) => {
            if (item.name === itemNameSpan) {
              const newObj = structuredClone(cartItems);

              newObj[index].units = currentUnits - 1;
              window.localStorage.setItem("cart", JSON.stringify(newObj));
            }
          });
        }
      }
    });

    $(".remove-unit").on("click", function (e) {
      var unitsSpan = $(this).siblings(".units");

      var currentUnits = parseInt(unitsSpan.text());
      unitsSpan.text(currentUnits - 1);
    });
  }
});
