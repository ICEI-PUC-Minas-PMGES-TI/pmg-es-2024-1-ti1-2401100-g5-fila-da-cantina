const express = require('express');

const app = express();
const { MercadoPagoConfig, Preference } = require('mercadopago');
const cors = require('cors');
const path = require('path');

const client = new MercadoPagoConfig({
  accessToken:
    'APP_USR-708326170485239-063015-fd4e22f0fcd9d0b1e3137f7c36839cae-185525923',
});

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/registrar', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'registrar.html'));
});

app.get('/checkout', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'checkout.html'));
});

app.get('/cardapio', (req, res) => {
  return res.status(200).json({
    salgados: [
      {
        id: 1,
        preco: 25,
        imagem: 'assets/images/chad-montano-MqT0asuoIcU-unsplash.jpg',
        nome: 'Pizza Margherita',
      },
      {
        id: 2,
        preco: 7,
        imagem:
          'https://app.docemeu.com.br/wp-content/uploads/2023/06/empada-2.jpg',
        nome: 'Empada de frango',
      },
      {
        id: 3,
        preco: 10,
        imagem:
          'https://www.gabriellfreitass.com.br/wp-content/uploads/2020/09/Foto2-scaled.jpg',
        nome: 'Hamburgão',
      },
      {
        id: 4,
        preco: 19,
        imagem:
          'https://nreceitas.com/wp-content/uploads/2022/12/receita-de-x-tudo.jpg',
        nome: 'X-Tudo',
      },
      {
        id: 5,
        preco: 8,
        imagem:
          'https://lh3.googleusercontent.com/proxy/WVemPk4OMQlIS1NHvQWH9RkQRuzIhEdiO877sR2G_5c31qj4TNCjT4qHyU8-4y2ZexlJVQSKlXY6SEcvZ-5o6o_RbKBfsKsuRZQlnI_Tg4n3UKNBWNEG0Lhn_A',
        nome: 'Pastel Assado de Frango',
      },
      {
        id: 6,
        preco: 5,
        imagem:
          'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3312339:1671048025/P%C3%A3o%20de%20Queijo.jpg?f=16x9&$p$f=04b1463',
        nome: 'Pão de Queijo',
      },
    ],
    doces: [
      {
        id: 7,
        preco: 15,
        imagem:
          'https://img.cybercook.com.br/receitas/130/torta-de-chocolate-crocante-1.jpeg',
        nome: 'Torta de chocolate',
      },
      {
        id: 8,
        preco: 18,
        imagem:
          'https://catracalivre.com.br/wp-content/uploads/2022/03/img-8977.jpg',
        nome: 'Torta de limão',
      },
      {
        id: 9,
        preco: 8,
        imagem:
          'https://uploads.metropoles.com/wp-content/uploads/2020/06/10111953/bombom-de-morango.jpg',
        nome: 'Bombom de Morango',
      },
    ],
  });
});

app.get('/payment/create', (req, res) => {
  const { price } = req.query;
  if (!price)
    return res
      .status(400)
      .json({ error: true, message: 'Missing payment amount' });

  const preference = new Preference(client);

  preference
    .create({
      body: {
        items: [
          {
            title: 'Cantina Express',
            quantity: 1,
            unit_price: parseInt(price),
          },
        ],
      },
    })
    .then((data) => {
      return res
        .status(200)
        .json({ id: data.id, payment_link: data.init_point });
    })
    .catch((e) => {
      return res.status(500).json({ error: true, message: e.message });
    });
});

app.listen(3000, () => {
  console.log('Server rodando em http://localhost:3000');
});
