$(document).ready(function () {
  const cookies = getCookie(document.cookie);

  if (cookies) {
    const sessionHandler = new Session();

    sessionHandler.verify(cookies['sessionid']);

    if (cookies['isSessionExpired'] === 'true') {
      eraseCookies();
      window.location.href = '/login.html';
    }

    const cart = window.localStorage.getItem('cart');
    if (cart) {
      const cartItems = JSON.parse(cart);

      if (cartItems.length <= 0) {
        $text =
          '<div class="text-blue-400 text-3xl"><span>Seu carrinho está vazio.</span></div>';

        $('main').append($text);
      } else {
        
      }
    } else {
      $text =
        '<div class="text-blue-400 text-3xl px-20"><span>Seu carrinho está vazio.</span></div>';

      $('main').append($text);
    }
  }
});
