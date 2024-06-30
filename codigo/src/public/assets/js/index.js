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
  $('#cart').empty();

  cartItems.map((item) => {
    $(`#${item.id}`).remove();

    $newdiv = $(
      `<div class="bg-gray-200 border-b border-blue-400 rounded-t-md" id="${
        item.id
      }"><div class="flex justify-between p-4"><div class="flex flex-col"><span class="text-xl">${formatName(
        item.name
      )}</span><span class="text-gray-600 font-semibold">Unidades: ${parseInt(
        item.units
      )}x</span></div><span class="text-xl text-blue-400">R$ ${
        item.price * item.units
      }</span></div></div>`
    );

    return $('#cart').append($newdiv);
  });
}

function refreshCartOverview() {
  const cart = window.localStorage.getItem('cart');
  const cartItems = JSON.parse(cart);
  var totalPrice = 0;
  var totalItems = 0;

  if (cartItems) {
    cartItems.map((item) => {
      totalItems += parseInt(item.units);
    });
    cartItems.map((item) => {
      if (item.units === 1) {
        totalPrice += parseInt(item.price);
      } else {
        const total = parseInt(item.units) * parseInt(item.price);
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

        $.get('/cardapio')
          .done(function (data) {
            console.log(data);
            $('#start_cardapio').empty();

            Object.keys(data).map((categoria) => {
              $div = `<div>
              <div class="pt-4 pb-4">
                <span class="text-xl font-semibold text-gray-500">${categoria.toUpperCase()}</span>
              </div>
              <div
                class="flex flex-grow flex-row gap-14 overflow-scroll overflow-y-hidden scroll-smooth" id="${categoria}"
              ></div>
            </div>`;

              $('#start_cardapio').append($div);

              data[categoria].map((item) => {
                $div = `<div class="relative">
                  <div class="flex w-40 h-40 select-none">
                    <div
                      class="absolute flex p-2 rounded-full bg-blue-400 m-28 cursor-pointer hover:brightness-105 add-item-to-cart"
                      itemprop='{"itemprop": {"id": ${item.id}, "name": "${
                  item.nome
                }", "price": "${item.preco}"}}'
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        class="w-6 h-6"
                      >
                        <path
                          fill="#ffffff"
                          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                        />
                      </svg>
                    </div>
                    <img
                      src="${item.imagem}"
                      class="w-40 h-40 object-cover rounded-md"
                    />
                  </div>
                  <div class="flex justify-between w-42 gap-2">
                    <span class="font-semibold pt-2">${item.nome}</span>
                    <span class="font-semibold pt-2 text-blue-400"
                      >R$ ${parseFloat(item.preco.toFixed(2))}</span
                    >
                  </div>
                </div>`;

                $(`#${categoria}`).append($div);
              });
            });

            const cart = window.localStorage.getItem('cart');

            if (cart) {
              const cartItems = JSON.parse(cart);

              cartItems.map((item) => {
                $newdiv = $(
                  `<div class="bg-gray-200 border-b border-blue-400 rounded-t-md" id="${
                    item.id
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

            $('.add-item-to-cart').on('click', function (e) {
              const currentItem = JSON.parse($(this).attr('itemprop'));

              const cart = window.localStorage.getItem('cart');

              if (cart) {
                const cartItems = JSON.parse(cart);
                var flagged = false;
                cartItems
                  .filter(
                    (item) =>
                      parseInt(currentItem.itemprop.id) === parseInt(item.id)
                  )
                  .map((item) => {
                    item.units++;
                    window.localStorage.setItem(
                      'cart',
                      JSON.stringify(cartItems)
                    );

                    refreshCart();
                    refreshCartOverview();
                    flagged = true;
                    return;
                  });

                if (flagged === false) {
                  cartItems.push({
                    id: parseInt(currentItem.itemprop.id),
                    name: `${currentItem.itemprop.name}`,
                    units: 1,
                    price: currentItem.itemprop.price,
                  });

                  window.localStorage.setItem(
                    'cart',
                    JSON.stringify(cartItems)
                  );

                  refreshCart();
                  refreshCartOverview();
                  return;
                }
              } else {
                var obj = [
                  {
                    id: parseInt(currentItem.itemprop.id),
                    name: `${currentItem.itemprop.name}`,
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
              window.location.href = '/login';
            });

            $('#open-cart-mobile').on('click', function () {
              $('#cartModal').removeClass('hidden');
              $('#globalDiv').addClass('hidden');
            });

            $('#close-cart-modal').on('click', function () {
              $('#cartModal').addClass('hidden');
              $('#globalDiv').removeClass('hidden');
            });
          })
          .fail(function () {
            $('#start_cardapio').append(
              '<span class="text-2xl">Erro ao renderizar cardápio.</span>'
            );
          });
      }
    } else {
      window.location.href = '/login';
    }
  }
});
