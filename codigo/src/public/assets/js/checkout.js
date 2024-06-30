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

  $('#cart-details').empty();

  if (cart) {
    const cartItems = JSON.parse(cart);

    if (cartItems.length <= 0) {
      $text =
        '<div class="text-blue-400 text-3xl"><span>Seu carrinho está vazio.</span></div>';

      $('main').append($text);
    } else {
      cartItems.map((item) => {
        $newDiv = `<div class="p-4 w-full flex flex-row justify-between">
  <div>
    <span class="text-bold text-2xl product-name" id="${item.id}">${formatName(
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
<div class="p-4 flex flex-row gap-4 items-center justify-between border-b">
  <div class="flex flex-row gap-4">
    <div class="w-4 h-4 fill-blue-400 cursor-pointer hover:brightness-90 remove-unit" data-id="${
      item.id
    }">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
    </div>
    <span class="units">${item.units}</span>
    <div class="w-4 h-4 fill-blue-400 cursor-pointer hover:brightness-90 add-unit" data-id="${
      item.id
    }">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
      </svg>
    </div>
  </div>
  <div class="flex cursor-pointer hover:brightness-90 trashcan" data-id="${
    item.id
  }">
    <svg class="w-4 h-4 fill-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
  </div>
</div>
`;

        $('#cart-details').append($newDiv);
      });
    }
  } else {
    $text =
      '<div class="text-blue-400 text-3xl px-20"><span>Seu carrinho está vazio.</span></div>';

    $('main').append($text);
  }
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

    $('#total_price').text(`R$ ${totalPrice}`);
  }
}

$(document).ready(function () {
  var total = 0;
  const cookies = getCookie(document.cookie);

  if (cookies) {
    const sessionHandler = new Session();

    sessionHandler.verify(cookies['sessionid']);

    if (cookies['isSessionExpired'] === 'true') {
      eraseCookies();
      window.location.href = '/login';
    }

    $('.payment').change(function () {
      $(this).prop('checked', true);
    });

    const cart = window.localStorage.getItem('cart');
    if (cart) {
      const cartItems = JSON.parse(cart);

      if (cartItems.length <= 0) {
        $text =
          '<div class="text-blue-400 text-3xl"><span>Seu carrinho está vazio.</span></div>';

        $('main').append($text);
      } else {
        cartItems.map((item) => {
          $newDiv = `<div class="p-4 w-full flex flex-row justify-between">
  <div>
    <span class="text-bold text-2xl product-name" id="${item.id}">${formatName(
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
<div class="p-4 flex flex-row gap-4 items-center justify-between border-b">
  <div class="flex flex-row gap-4">
    <div class="w-4 h-4 fill-blue-400 cursor-pointer hover:brightness-90 remove-unit" data-id="${
      item.id
    }">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
    </div>
    <span class="units">${item.units}</span>
    <div class="w-4 h-4 fill-blue-400 cursor-pointer hover:brightness-90 add-unit" data-id="${
      item.id
    }">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
      </svg>
    </div>
  </div>
  <div class="flex cursor-pointer hover:brightness-90 trashcan" data-id="${
    item.id
  }">
    <svg class="w-4 h-4 fill-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
  </div>
</div>
`;

          $('#cart-details').append($newDiv);
        });
      }
      cartItems.map((itens) => {
        total += itens.units * itens.price;
        $('#total_price').text(`R$ ${total}`);
      });
    } else {
      $text =
        '<div class="text-blue-400 text-3xl px-20"><span>Seu carrinho está vazio.</span></div>';

      $('main').append($text);
    }

    $('.add-unit').on('click', function (e) {
      var unitsSpan = $(this).siblings('.units');

      var currentUnits = parseInt(unitsSpan.text());
      unitsSpan.text(currentUnits + 1);

      var id = $(this).data('id');

      var cart = window.localStorage.getItem('cart');

      if (cart) {
        var cartItems = JSON.parse(cart);

        if (cartItems) {
          cartItems
            .filter((item) => parseInt(item.id) === parseInt(id))
            .map((item) => {
              item.units++;
              window.localStorage.setItem('cart', JSON.stringify(cartItems));

              var priceSpan = $(this)
                .closest('.p-4')
                .prev()
                .find('span.text-blue-400');
              var newPrice = item.price * (currentUnits + 1);
              total = newPrice;
              priceSpan.text('R$ ' + parseInt(newPrice));
              $('#total_price').text('R$ ' + parseInt(newPrice));
            });
        }
      }
    });

    $('.remove-unit').on('click', function (e) {
      var unitsSpan = $(this).siblings('.units');

      var currentUnits = parseInt(unitsSpan.text());
      if (currentUnits - 1 < 1) return;
      unitsSpan.text(currentUnits - 1);

      var id = $(this).data('id');

      var cart = window.localStorage.getItem('cart');

      if (cart) {
        var cartItems = JSON.parse(cart);

        if (cartItems) {
          cartItems.map((item) => {
            if (item.id === parseInt(id)) {
              if (item.units - 1 < 1) {
                return;
              }
              item.units--;
              window.localStorage.setItem('cart', JSON.stringify(cartItems));
              var priceSpan = $(this)
                .closest('.p-4')
                .prev()
                .find('span.text-blue-400');
              var newPrice = item.price * (currentUnits - 1);
              total = newPrice;
              priceSpan.text('R$ ' + parseInt(newPrice));
              $('#total_price').text('R$ ' + parseInt(newPrice));
            }
          });
        }
      }
    });

    $('#finish_order').on('click', () => {
      $.get(`/payment/create?price=${total}`)
        .done(function (data) {
          window.open(data.payment_link, '_blank');
        })
        .fail(function () {
          alert('Erro durante criação da compra.');
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        });
    });

    $('.trashcan').on('click', function (e) {
      const cart = window.localStorage.getItem('cart');
      if (cart) {
        var id = $(e.currentTarget).data('id');
        console.log(id);

        var cartItems = JSON.parse(cart);

        const newArray = cartItems.filter((item) => item.id !== id);

        window.localStorage.setItem('cart', JSON.stringify(newArray));
        refreshCart();
        refreshCartOverview();
      }
    });
  }
});
