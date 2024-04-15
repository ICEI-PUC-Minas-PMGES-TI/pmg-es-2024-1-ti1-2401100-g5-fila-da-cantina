# Informações do Projeto
# Cantina Express

`CURSO` 

Engenharia de Software

## Participantes

- João Vitor Caires Damasceno Silva
- Fernando Rodrigues da Mata
- Victor Chaves Janot Pacheco Lopes
- Marcelo Estevis Bernardi
- Manoel Rodrigues Bezerra Neto

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

O problema que o nosso software visa resolver é o longo tempo de espera e a falta de eficiência no processo de atendimento da cantina. Muitas vezes, em ambientes com grande fluxo de pessoas, tornam as filas na cantina podem se tornar excessivamente longas, resultando em atrasos no horário de refeição, frustração dos clientes e até mesmo perda de receita para a cantina.

Alguns dos principais problemas enfrentados são:

1. **Longas filas de espera**: Os clientes precisam esperar por um longo tempo para fazer seus pedidos, o que pode levar à insatisfação e ao desinteresse em utilizar os serviços da cantina.

2. **Tempo de espera imprevisível**: A falta de previsibilidade no tempo de espera pode levar os clientes a evitar a cantina ou a se dirigirem para ela em horários de pico, tornando o problema ainda pior.

3. **Desorganização no atendimento**: A falta de um sistema eficiente de gestão de filas pode levar a confusões no atendimento, erros nos pedidos e atrasos na entrega das refeições.

4. **Baixa utilização dos recursos**: Em momentos de baixa demanda, os recursos da cantina, como pessoal e equipamentos, podem estar subutilizados, enquanto em horários de pico podem estar sobrecarregados.

Ao abordar esses problemas, o software busca melhorar a experiência dos clientes na cantina, reduzindo os tempos de espera, aumentando a eficiência do atendimento e garantindo uma distribuição mais equilibrada dos recursos disponíveis.

## Objetivos

1. **Reduzir o tempo de espera**: O principal objetivo é diminuir significativamente o tempo que os clientes passam na fila da cantina, tornando o processo de compra mais rápido e eficiente.

2. **Aumentar a satisfação do cliente**: Busca-se garantir que os clientes tenham uma experiência mais agradável ao utilizar os serviços da cantina, minimizando a frustração causada por longas filas e tempos de espera imprevisíveis.

3. **Otimizar a utilização de recursos**: Pretende-se garantir que os recursos da cantina, como pessoal, equipamentos e matéria-prima, sejam utilizados de forma eficiente, evitando ociosidade em momentos de baixa demanda e sobrecarga em horários de pico.

4. **Proporcionar previsibilidade no atendimento**: O software deve fornecer aos clientes informações claras sobre o tempo de espera estimado na fila, ajudando-os a planejar melhor seus horários de refeição e evitando surpresas desagradáveis.

5. **Facilitar a gestão da cantina**: Além de melhorar a experiência do cliente, o software também deve facilitar a gestão interna da cantina, fornecendo dados e métricas úteis para monitorar o desempenho do atendimento, prever a demanda futura e tomar decisões estratégicas.

Esses objetivos visam não apenas resolver o problema imediato das longas filas na cantina, mas também proporcionar benefícios a longo prazo, tanto para os clientes quanto para a própria equipe da cantina e a administração do local onde o software será implementado.

## Justificativa

Trabalhar com a aplicação de otimização da fila da cantina é importante por várias razões:

1. **Melhoria da experiência do cliente**: Ao reduzir o tempo de espera e proporcionar uma experiência mais eficiente na cantina, podemos aumentar a satisfação dos clientes. Isso não só os torna mais propensos a utilizar os serviços da cantina novamente, mas também pode gerar uma percepção positiva da instituição como um todo.

2. **Aumento da eficiência operacional**: Uma cantina mais eficiente não só beneficia os clientes, mas também a equipe que trabalha nela. Ao otimizar a utilização de recursos e simplificar os processos de atendimento, podemos melhorar a produtividade da equipe e reduzir o estresse associado a picos de demanda.

3. **Redução de custos**: A utilização mais eficiente de recursos pode levar a uma redução nos custos operacionais da cantina, seja pela redução de horas extras da equipe, pelo melhor aproveitamento de ingredientes ou pela minimização de desperdícios.

4. **Análise de dados para tomada de decisão**: Implementar um software de gestão de filas permite coletar dados valiosos sobre o comportamento dos clientes, padrões de consumo e desempenho operacional da cantina. Esses dados podem ser usados para identificar tendências, prever demandas futuras e tomar decisões estratégicas mais embasadas.

5. **Competitividade e reputação institucional**: Em um mercado cada vez mais competitivo, oferecer serviços de alimentação eficientes e satisfatórios pode ser um diferencial importante para atrair e reter alunos, funcionários ou clientes. Uma cantina bem gerenciada contribui para a reputação positiva da instituição.

Ao escolher os objetivos específicos para o projeto, focamos em resolver os problemas mais prementes identificados no processo de atendimento da cantina, visando não apenas a satisfação imediata dos clientes, mas também benefícios a longo prazo para a instituição e seus stakeholders.

## Público-Alvo

Para entender melhor os diferentes perfis de usuários da aplicação de otimização da fila da cantina, podemos identificar os seguintes grupos:

1. **Clientes da Cantina**:
   - **Alunos**: Podem variar desde crianças em idade escolar até jovens universitários. Podem ter diferentes níveis de familiaridade com a tecnologia, com alguns sendo muito proficientes em dispositivos móveis e aplicativos, enquanto outros podem ter menos experiência.
   - **Funcionários e professores**: Podem ter uma ampla gama de idades e habilidades tecnológicas. Alguns podem ser proficientes no uso de tecnologia, enquanto outros podem precisar de mais orientação.
   - **Visitantes/eventuais**: Pessoas que ocasionalmente utilizam os serviços da cantina, como pais em eventos escolares ou convidados em eventos corporativos.

2. **Equipe da Cantina**:
   - **Atendentes/caixas**: Responsáveis por operar o sistema de atendimento e registrar os pedidos dos clientes. Eles podem precisar de treinamento para usar o software de forma eficaz.
   - **Gerentes/supervisores**: Responsáveis por monitorar o desempenho da cantina, ajustar a operação conforme necessário e analisar os dados coletados pelo software. Eles podem precisar de acesso a ferramentas de análise de dados mais avançadas.

3. **Administradores da Instituição**:
   - **Diretores/gestores escolares**: Responsáveis pela administração geral da instituição. Eles podem estar interessados nos dados coletados pelo software para tomar decisões sobre alocação de recursos e políticas relacionadas à cantina.
   - **Equipe de TI**: Responsável pela manutenção e suporte técnico do software. Eles precisam garantir que o sistema seja confiável, seguro e fácil de usar para todos os usuários.

Esses perfis de usuários variam em termos de conhecimento prévio sobre tecnologia, nível de experiência e relações hierárquicas dentro da instituição. Portanto, é importante projetar a aplicação de forma a ser acessível e intuitiva para todos os usuários, independentemente de seu nível de familiaridade com a tecnologia.
 
# Especificações do Projeto

Nosso projeto visa a elaboração de um software cuja funcionalidade é resolver o problema de congestionamento do atendimento das cantinas, evitando longas e demoradas filas, e também, problemas com a acertividade no momento da entrega do pedido. Utilizamos algumas técninas para o desenvolvimento da ideia como, por exemplo, entrevistas para entender as experiências de clientes e também de funcionários da cantina. Tendo isso em vista, através de nossas analises, fomos incrementando ao projeto ideias e sugestões do público, uma vez que, serão estes os beneficiados da iniciativa. Além de entrevistas, fizemos reuniões para discussão de sugestões dos participantes para que, através de análises críticas buscarmos o consenso sobre o que é mais vantajoso e coerente ao projeto. Ademais, em sequência, elaboramos ideias visuais para o software juntamente de funções que irão operar neste, visando assim, chegar em um produto minimamente viável (protótipo), para ver se é funcional, se tem muitos bugs e se atende a demanda da situação.

## Personas e Mapas de Empatia

......  COLOQUE AQUI O SEU TEXTO ......


> Relacione as personas identificadas no seu projeto e os respectivos mapas de empatia. Lembre-se que 
> você deve ser enumerar e descrever precisamente e de forma
> personalizada todos os principais envolvidos com a solução almeja. 
> 
> Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina
> e/ou nos seguintes links:
>
> **Links Úteis**:
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Como fazer um mapa de empatia - Vídeo](https://www.youtube.com/watch?v=JlKHGpVoA2Y)
> 
> 
> **Exemplo de Persona**
> 
> ![Exemplo de Persona](imaages/../images/persona.png)
> 
> Fonte: [Como criar uma persona para o seu negócio](https://raissaviegas.com.br/como-criar-uma-persona/)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|---------------------------------------------------|-------|
|RF-001| Permitir que o usuário se cadastre                | ALTA  |
|RF-002| Permitir que o usuário realize um pedido          | ALTA  |
|RF-003| CRUD de usuários e produtos                       | ALTA  |
|RF-004| Administrar disponibilidade do cardápio           | MÉDIA |
|RF-005| Permitir que o usuário faça um pedido em grupo    | MÉDIA |
|RF-006| Permitir que o usuário veja seu gasto médio       | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser formulado da maneira mais rápida possível para beneficio do usuário | ALTA |
|RNF-002| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA |
|RNF-003| Deve processar requisições do usuário em no máximo 3s |  BAIXA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

# Projeto de Interface

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

......  INCLUA AQUI O DIAGRAMA COM O FLUXO DO USUÁRIO NA APLICAÇÃO ......

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.jpg)


## Wireframes

......  INCLUA AQUI OS WIREFRAMES DAS TELAS DA APLICAÇÃO COM UM BREVE DESCRITIVO ......

> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a
> estrutura de um site web e seu relacionamentos entre suas
> páginas. Um wireframe web é uma ilustração semelhante ao
> layout de elementos fundamentais na interface.
> 
> **Links Úteis**:
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> 
> **Exemplo**:
> 
> ![Exemplo de Wireframe](images/wireframe-example.png)


# Metodologia

......  COLOQUE AQUI O SEU TEXTO ......

> Nesta parte do documento, você deve apresentar a metodologia 
> adotada pelo grupo, descrevendo o processo de trabalho baseado nas metodologias ágeis, 
> a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a
> gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido
> pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar
> o andamento do projeto, a execução das tarefas e o status de desenvolvimento
> da solução.
> 
> **Links Úteis**:
> - [Tutorial Trello](https://trello.com/b/8AygzjUA/tutorial-trello)
> - [Gestão ágil de projetos com o Trello](https://www.youtube.com/watch?v=1o9BOMAKBRE)
> - [Gerência de projetos - Trello com Scrum](https://www.youtube.com/watch?v=DHLA8X_ujwo)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

## Divisão de Papéis

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente a divisão de papéis e tarefas entre os membros do grupo.
>
> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)


## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  [https://miro.com/app/board/uXjVNiWtY6Q=](https://miro.com/app/board/uXjVNiWtY6Q=) | 
|Repositório de código | GitHub | [https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g5-fila-da-cantina](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2401100-g5-fila-da-cantina) | 
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com | 
|Protótipo Interativo | MavelApp ou Figma | https://figma.com/XXXXXXX | 

>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Editor de código.
> - Ferramentas de comunicação
> - Ferramentas de diagramação
> - Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 
> **Links Úteis - Hospedagem**:
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
