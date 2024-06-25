function formatName(name) {
  const removeTracos = name.replace('-', ' ');

  const words = removeTracos.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  const formatted = words.join(' ');

  return formatted;
}

function refreshCart() {
  const cart = window.localStorage.getItem('cart');
  const cartItems = JSON.parse(cart);

  cartItems.map((item) => {
    $(`#${item.name}`).remove();

    $newdiv = $(
      `<div class="bg-gray-200 border-b border-blue-400 rounded-t-md" id="${
        item.name
      }"><div class="flex justify-between p-4"><div class="flex flex-col"><span class="text-xl">${formatName(
        item.name
      )}</span><span class="text-gray-600 font-semibold">Unidades: ${parseInt(
        item.units
      )}x</span></div><span class="text-xl text-blue-400">R$ ${
        item.price * item.units
      }</span></div></div>`
    );

    $('#cart').append($newdiv);
  });
}

function refreshCartOverview() {
  const cart = window.localStorage.getItem('cart');
  const cartItems = JSON.parse(cart);
  var totalPrice = 0;
  var totalItems = 0;

  if (cartItems) {
    cartItems.map((item) => {
      totalItems += item.units;
    });
    cartItems.map((item) => {
      if (item.units === 1) {
        totalPrice += item.price;
      } else {
        const total = item.units * item.price;
        totalPrice += total;
      }
    });

    $('#cart-overview').text(`Carrinho (${totalItems})`);
    $('#cart-overview-mobile').text(`Carrinho (${totalItems})`);
    $('#cart-total').text(`R$ ${totalPrice}`);
  }
}

$(document).ready(async function () {
  const cookies = getCookie(document.cookie);

  if (cookies) {
    const sessionHandler = new Session();

    sessionHandler.verify(cookies['sessionid']);

    if (cookies['isSessionExpired'] === 'false') {
      $('#login').hide();
      $('#register').hide();

      const sessionHandler = new Session();
      const user = await sessionHandler.getCurrentBySession(
        cookies['sessionid']
      );
      if (user) {
        $('#avatar-wrapper').removeClass('hidden');
        $('#avatar-wrapper').addClass('flex');
        $(
          `<span class="text-white">${user.name.charAt(0).toUpperCase()}</span>`
        ).appendTo('#avatar');

        const cart = window.localStorage.getItem('cart');

        if (cart) {
          const cartItems = JSON.parse(cart);

          cartItems.map((item) => {
            $newdiv = $(
              `<div class="bg-gray-200 border-b border-blue-400 rounded-t-md" id="${
                item.name
              }"><div class="flex justify-between p-4"><div class="flex flex-col"><span class="text-xl">${formatName(
                item.name
              )}</span><span class="text-gray-600 font-semibold">Unidades: ${parseInt(
                item.units
              )}x</span></div><span class="text-xl text-blue-400">R$ ${
                item.price * item.units
              }</span></div></div>`
            );

            $('#cart').append($newdiv);
          });
          refreshCartOverview();
        }

        $('#add-item-to-cart').on('click', function (e) {
          const currentItem = JSON.parse($(this).attr('itemprop'));

          const cart = window.localStorage.getItem('cart');

          if (cart) {
            const cartItems = JSON.parse(cart);
            cartItems.map((item) => {
              if (item.name === currentItem.itemprop.name) {
                item.units++;
                window.localStorage.setItem('cart', JSON.stringify(cartItems));

                refreshCart();
                refreshCartOverview();
              }
            });
          } else {
            var obj = [
              {
                name: currentItem.itemprop.name,
                units: 1,
                price: currentItem.itemprop.price,
              },
            ];
            window.localStorage.setItem('cart', JSON.stringify(obj));
            refreshCart();
            refreshCartOverview();
          }
        });

        $('#logout').on('click', function () {
          eraseCookies();
          window.location.href = '/login.html';
        });

        $('#open-cart-mobile').on('click', function () {
          $('#cartModal').removeClass('hidden');
          $('#globalDiv').addClass('hidden');
        });

        $('#close-cart-modal').on('click', function () {
          $('#cartModal').addClass('hidden');
          $('#globalDiv').removeClass('hidden');
        });
      }
    } else {
      window.location.href = '/login.html';
    }
  }
});
