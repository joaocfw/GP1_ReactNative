![image](https://github.com/user-attachments/assets/71032b55-0f3b-48d4-9247-7a4edb4c36fc) # PopcornHub
o

## 📑 Índice

* Sobre o projeto
* Tecnologias utilizadas
* Imagens
* Autores
    
## 📁 Sobre o projeto

* Login do Usuário: ao acessar o sistema, o usuário deverá escolher entre as opções de fazer o login ou cadastrar novo usuário. Caso escolha fazer login, deve inserir seu email e sua senha. Caso decida por novo cadastro, deverá inserir nome completo, email e senha.
* Autenticação: o sistema verifica os dados informados e autentica o usuário, exibindo a página inicial do App.
* A página inicial traz, na parte superior, os filmes mais populares do momento, e, logo abaixo, os filmes divididos por categoria.
* Ao selecionar o filme de interesse, o usuário será redirecionado para uma página de detalhes daquele filme, que traz informações como descrição, elenco principal e avaliação.
* Na mesma página de detalhes, o usuário tem a opção de adicionar/remover aquele filme da sua lista de favoritos ou de assistir ao trailler do filme.
* O App também permite ao usuário buscar por um título ou categoria específica na página Pesquisar e visualizar seus filmes favoritos na página Favoritos.
  
## 👩🏻‍💻 Tecnologias utilizadas

- [jdk 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [Eclipse](https://eclipseide.org/)
- [draw.io](https://drawio.com)
- [Trello](https://trello.com)
  
## 🔁 Diagrama

<img src="Diagrama UML - Sequencia.drawio (3).png" alt="Texto Alternativo">

O  nosso ator representa um cliente que vai dar o start na aplicação. Com isso será ativado a primeira fronteira com o nome Tela que contém o menu de login, cadastro ou sair. Ao escolher:
* login -> o cliente informará nome de usuário e senha. O Controlador, com o nome Dados, irá fornecer os dados recebidos à entidade Sistema, que vai fazer a verificação dessas informações. Caso o nome de usuário e senha sejam inválidos, a entidade Sistema enviará as informações a uma fronteira com o nome Msg TelaErro, que vai retornar o cliente ao login. Caso as informações estejam corretas, a entidade Sistema enviará o cliente a fronteira de nome MenuPrincipal que exibirá na tela Categorias. 
* cadastro -> o cliente irá digitar nome, cpf, email, login desejado, senha e endereço completo. O Controle com o nome Dados fornecerá essas informações à entidade Sistema, que retorna uma mensagem de cadastro realizado com sucesso.
* sair -> o Sistema retorna a mensagem "Tudo bem, espero vê-lo novamente em breve!" e encerra o programa.

## 🧑 Autores

- [Ana Fortuna](https://github.com/anafortuna)
- [Ana Mattos](https://github.com/AnaMattoss)
- [Eber Cintra](https://github.com/cintra444)
- [Francisco Nascimento](https://github.com/francisconascimento4490)
- [Matheus Lopes](https://github.com/math3us-lopes)
- [Savio Castro](https://github.com/7csavio)
- [Yuri Campos](https://github.com/YuriCampos)
