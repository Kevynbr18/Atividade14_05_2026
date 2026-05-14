# Atividade14_05_2026
# CRUD de Usuários

Projeto simples de CRUD de usuários utilizando HTML, CSS e JavaScript puro.

## Funcionalidades

- Criar usuários
- Listar usuários
- Editar usuários
- Remover usuários
- Buscar usuários
- Ordenar usuários:
  - Mais recente
  - Mais antigo
  - Ordem alfabética (A-Z)

---

# Como funciona o CREATE?

O usuário preenche o formulário e, ao clicar no botão **Salvar**, os dados são capturados pelos inputs e armazenados dentro do array `usuarios` utilizando o método `push()`.

```js
usuarios.push(usuario);
```

---

# Como os dados são salvos?

Atualmente os dados ficam armazenados apenas em memória dentro do array `usuarios`.

Isso significa que, ao atualizar ou fechar a página, os dados são perdidos.

Uma melhoria possível seria utilizar **LocalStorage** para manter os dados salvos no navegador.

---

# Onde está o UPDATE?

O UPDATE acontece quando clicamos no botão **Editar**.

Primeiro salvamos o índice do usuário na variável `editandoIndex`.

```js
editandoIndex = index;
```

Depois, ao salvar novamente, substituímos o objeto antigo pelo novo dentro do array.

```js
usuarios[editandoIndex] = usuario;
```

---

# DELETE

A remoção do usuário acontece utilizando o método `splice()`.

```js
usuarios.splice(index, 1);
```

---

# READ

A listagem dos usuários acontece através da função `listar()`, que percorre o array `usuarios` e cria elementos HTML dinamicamente.

```js
usuariosFiltrados.forEach((user, index) => {
```

---

# Validações

O sistema possui validações como:

- Todos os campos obrigatórios
- Idade mínima de 18 anos

```js
if (idade < 18) {
    alert("Idade mínima é 18 anos!");
}
```

---

# Qual parte foi mais difícil?

A parte mais difícil foi lembrar algumas estruturas e funções do JavaScript, principalmente a lógica utilizada para filtrar os usuários na busca e manipular o array corretamente.

---

# Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

---

# Autor

Projeto desenvolvido para prática de CRUD em JavaScript.
