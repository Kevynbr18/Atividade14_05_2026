# CRUD de Usuários

Projeto simples de CRUD de usuários desenvolvido com **HTML5**, **CSS3** e **JavaScript puro**.

---

## Funcionalidades

- Criar usuários
- Listar usuários
- Editar usuários
- Remover usuários
- Buscar usuários
- Ordenar usuários:
  - Mais recente
  - Mais antigo
  - Ordem alfabética (**A-Z**)

---

## Como funciona o CREATE?

O usuário preenche o formulário e, ao clicar no botão **Salvar**, os dados são capturados pelos inputs e armazenados dentro do array `usuarios` utilizando o método `push()`.

```javascript
usuarios.push(usuario);
```

---

## Como os dados são salvos?

Atualmente, os dados ficam armazenados apenas na memória dentro do array `usuarios`.

Isso significa que, ao atualizar ou fechar a página, os dados são perdidos.

Uma melhoria futura seria utilizar o **LocalStorage** para persistir os dados no navegador.

---

## Como funciona o UPDATE?

O UPDATE acontece quando clicamos no botão **Editar**.

Primeiro, salvamos o índice do usuário na variável `editandoIndex`.

```javascript
editandoIndex = index;
```

Depois, ao salvar novamente, substituímos o objeto antigo pelo novo dentro do array.

```javascript
usuarios[editandoIndex] = usuario;
```

---

## DELETE (EXCLUIR)

A remoção do usuário acontece utilizando o método `splice()`.

```javascript
usuarios.splice(index, 1);
```

---

## READ (LER)

A listagem dos usuários acontece através da função `listar()`, que percorre o array `usuarios` e cria elementos HTML dinamicamente.

```javascript
usuariosFiltrados.forEach((user, index) => {
```

---

## Validações

O sistema possui validações como:

- Todos os campos obrigatórios
- Idade mínima de **18 anos**

```javascript
if (idade < 18) {
    alert("Idade mínima é 18 anos!");
}
```

---

## Dificuldades encontradas

A parte mais difícil foi lembrar algumas estruturas e funções do JavaScript, principalmente a lógica utilizada para filtrar usuários na busca e manipular corretamente o array.

---

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

---

## Autor

Projeto desenvolvido para prática de CRUD em JavaScript.
