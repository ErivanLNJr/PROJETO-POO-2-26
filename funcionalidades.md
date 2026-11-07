# Novas implementações
Seguindo o modelo de Estórias do Usúario, tente implementar no seu sistema as seguintes funcionalidades

 - Como usúario do sistema eu gostaria que fossem exibidas as 3 notas do Aluno, além de sua média e situação (Aprovado, Reprovado ou Recuperação)

- Como adminitrador do Sistema eu gostaria que as notas do Aluno fossem privadas e acessadas apenas via get e set

- Como usuário do sistema eu gostraia que existisse o cadastro de Turmas. Uma turma tem professor, nome do curso e um conjunto de alunos. Os alunos serão depois cadastrados nas turmas existentes. Logo, não deve ser possível cadastrar um Aluno antes de ter uma Turma.

- Como usuário do sistema, eu gostaria de editar as notas de um aluno na tela de exibição dos Alunos.

## oque temos ##

### Diagnóstico do projeto atual

O repositório parou na aula de 20/10, apresentando algumas inconsistências internas e faltando as atualizações da aula de 27/10:

1.  Incompatibilidade no construtor de Alunos.js:
    No seu Alunos.js, o construtor aceita apenas constructor(nome).

    Porém, no seu script.js, você instancia chamando new Aluno(nome, n1, n2, n3). As notas não estão sendo salvas no objeto.

    Existem atributos como materia = [] e método cursando() que não fazem parte do fluxo principal da aula.

2.  Falta de Encapsulamento:
    
    O nome do aluno ainda é público em vez de utilizar o campo privado #nome e o método getNome().

3. Falta da classe Interface.js e do arquivo main.js:

    Toda a lógica de interface e controle ainda reside em script.js. A aula 27/10 divide essa responsabilidade em uma classe de métodos estáticos (Interface) e um script principal (main.js).

4. Listagem dos Alunos:

    A sua listagem atual concatena strings com quebras de linha simples (<br>) e não formata a média com duas casas decimais (toFixed(2)).

    Falta a geração da estrutura <table> e o arquivo tabStyle.css.

5. Vínculos no index.html:

    O HTML importa Alunos.js (no plural) e script.js, sem importar o novo CSS da tabela nem os novos módulos JS.

## O que falta implementar (Passo a Passo) ##
Para deixar seu projeto alinhado com a versão final das notas de aula, siga os passos abaixo:

1. Atualizar a classe Aluno.js
Substitua o conteúdo de Alunos.js (ou renomeie para Aluno.js):

2. Criar o arquivo Interface.js
Responsável por capturar dados dos inputs, alternar o visual das abas e renderizar a tabela na tela:

3. Criar o arquivo main.js
Substitui o antigo script.js como controlador do array turma:

4. Atualizar o index.html
Ajuste a importação das folhas de estilo, dos scripts e os eventos onclick dos botões:

5