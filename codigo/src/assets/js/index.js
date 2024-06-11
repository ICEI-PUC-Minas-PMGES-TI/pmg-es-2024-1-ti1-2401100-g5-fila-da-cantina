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

        $('#add-item-to-cart').on('click', function (e) {
          console.log($(this).attr('itemprop'))
        });

        const cart = window.localStorage.getItem('cart');

        if (cart) {
          const cartItems = JSON.parse(cart);
        }

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
