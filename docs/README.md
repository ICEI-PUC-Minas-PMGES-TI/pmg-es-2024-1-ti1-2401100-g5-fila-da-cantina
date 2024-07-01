# Documentação do Projeto

A documentação do projeto é composta pelos seguintes itens: 
 - [Processo de Design Thinking](concepcao/Processo%20Design%20Thinking%20-%20TEMPLATE.pdf)
 - [Relatório Técnico](relatorio/Relatorio%20Tecnico%20-%20TEMPLATE.md)
 - [Apresentação do Projeto](apresentacao/apresentacao%20-%20TEMPLATE.pptx)
 - [Vídeo de Demonstração](https://youtube.com)

Documentação dos Códigos

### Código 1: Checkout
Este código HTML descreve a estrutura de uma página de checkout para um site de e-commerce. A página inclui um modal de carrinho de compras, métodos de pagamento, e opções para finalizar o pedido.

#### Seções Principais:
1. Cabeçalho (Header):
   - Contém o logotipo do site.
   - Botões de registro e login.
   - Modal de carrinho de compras que pode ser exibido ou ocultado.
2. Modal do Carrinho de Compras:
   - Exibido ao clicar no ícone do carrinho.
   - Mostra os itens no carrinho.
   - Inclui um botão de pagamento.
3. Método de Pagamento:
   - Exibe a opção de pagamento via MercadoPago.
   - Calcula o preço total dos itens no carrinho.
4. Botão para Finalizar Pedido:
   - Localizado no final da página.
   - Permite ao usuário finalizar a compra.

#### Recursos Incluídos:
- jQuery para manipulação DOM.
- PouchDB para persistência de dados.
- Tailwind CSS para estilos.
- Scripts personalizados (index.js, checkout.js) para funcionalidade específica.

### Código 2: Página de Registro e Login
Este código HTML descreve a estrutura das páginas de login e registro para um site de e-commerce.

#### Seções Principais:
1. Formulário de Login:
   - Campos para entrada de email e senha.
   - Botão de login que envia os dados do formulário para uma API.
2. Link para Registro:
   - Botão que redireciona para a página de registro.
3. Logo do Site:
   - Inclui um logotipo com o nome do site.
   - Avatar do usuário (aparece após login).

#### Recursos Incluídos:
- jQuery para manipulação DOM.
- PouchDB para persistência de dados.
- Tailwind CSS para estilos.
- Scripts personalizados (index.js, login.js, register.js) para funcionalidade específica.

### Código 3: Página de Pedidos
Este código HTML descreve a estrutura de uma página de pedidos para um site de e-commerce. A página inclui um modal de carrinho de compras, visualização de detalhes do pedido e métodos de pagamento.

#### Seções Principais:
1. Cabeçalho (Header):
   - Contém o logotipo do site.
   - Botões de registro e login.
   - Modal de carrinho de compras que pode ser exibido ou ocultado.
2. Modal do Carrinho de Compras:
   - Exibido ao clicar no ícone do carrinho.
   - Mostra os itens no carrinho.
   - Inclui um botão de pagamento.
3. Detalhes do Pedido:
   - Mostra os itens do pedido e o método de pagamento.
   - Calcula o preço total dos itens no carrinho.
4. Botão para Finalizar Pedido:
   - Localizado no final da página.
   - Permite ao usuário finalizar a compra.

#### Recursos Incluídos:
- jQuery para manipulação DOM.
- PouchDB para persistência de dados.
- Tailwind CSS para estilos.
- Scripts personalizados (index.js, pedidos.js) para funcionalidade específica.

### Código 4: Carrinho
Este código HTML descreve a estrutura de uma página de carrinho para um site de e-commerce, incluindo um modal de carrinho de compras e visualização de itens no carrinho.

#### Seções Principais:
1. Cabeçalho (Header):
   - Contém o logotipo do site.
   - Botões de registro e login.
   - Modal de carrinho de compras que pode ser exibido ou ocultado.
2. Modal do Carrinho de Compras:
   - Exibido ao clicar no ícone do carrinho.
   - Mostra os itens no carrinho.
   - Inclui um botão de pagamento.
3. Itens no Carrinho:
   - Exibe os itens adicionados ao carrinho.
   - Mostra a quantidade e o preço de cada item.
4. Resumo do Carrinho:
   - Calcula o preço total dos itens no carrinho.
   - Exibe o subtotal, taxas, e total geral.
5. Botão para Finalizar Pedido:
   - Localizado no final da página.
   - Permite ao usuário finalizar a compra.

#### Recursos Incluídos:
- jQuery para manipulação DOM.
- PouchDB para persistência de dados.
- Tailwind CSS para estilos.
- Scripts personalizados (index.js, cart.js) para funcionalidade específica.

### Recursos Utilizados em Comum
#### Recursos Incluídos em Todos os Códigos:
- jQuery: Utilizado para a manipulação do DOM e facilitar as interações dinâmicas.
- PouchDB: Utilizado para a persistência de dados no navegador, permitindo o armazenamento e recuperação de informações.
- Tailwind CSS: Utilizado para aplicar estilos de forma rápida e eficiente, permitindo uma customização fácil e um design responsivo.
- Scripts Personalizados: Incluem arquivos JavaScript específicos para cada página, adicionando funcionalidades únicas e interações específicas.
jQuery: Utilizado para a manipulação do DOM e facilitar as interações dinâmicas.
PouchDB: Utilizado para a persistência de dados no navegador, permitindo o armazenamento e recuperação de informações.
Tailwind CSS: Utilizado para aplicar estilos de forma rápida e eficiente, permitindo uma customização fácil e um design responsivo.
Scripts Personalizados: Incluem arquivos JavaScript específicos para cada página, adicionando funcionalidades únicas e interações específicas.
