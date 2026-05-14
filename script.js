let usuarios = [];
let editandoIndex = null;

const btnSalvar = document.getElementById("btn");
const lista = document.getElementById("lista");
const busca = document.getElementById("busca");
const ordenar = document.getElementById("ordenar");

btnSalvar.addEventListener("click", salvar);
busca.addEventListener("input", listar);
ordenar.addEventListener("change", listar);

function salvar() {

    const codigo = document.getElementById("codigo").value.trim();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = Number(document.getElementById("idade").value);

    // VALIDAÇÕES
    if (!codigo || !nome || !email || !idade) {
        alert("Todos os campos são obrigatórios!");
        return;
    }

    if (idade < 18) {
        alert("Idade mínima é 18 anos!");
        return;
    }

    // OBJETO USUÁRIO
    const usuario = {
        codigo,
        nome,
        email,
        idade,
        criadoEm: Date.now()
    };

    // CREATE OU UPDATE
    if (editandoIndex === null) {

        usuarios.push(usuario);

    } else {

        usuario.criadoEm = usuarios[editandoIndex].criadoEm;

        usuarios[editandoIndex] = usuario;

        editandoIndex = null;
    }

    limparCampos();
    listar();
}

function listar() {

    lista.innerHTML = "";

    let usuariosFiltrados = [...usuarios];

    const termo = busca.value.toLowerCase();

    // BUSCA
    usuariosFiltrados = usuariosFiltrados.filter(user =>

        user.nome.toLowerCase().includes(termo) ||
        user.email.toLowerCase().includes(termo) ||
        user.codigo.toLowerCase().includes(termo)

    );

    // ORDENAÇÃO
    if (ordenar.value === "az") {

        usuariosFiltrados.sort((a, b) =>
            a.nome.localeCompare(b.nome)
        );
    }

    if (ordenar.value === "recente") {

        usuariosFiltrados.sort((a, b) =>
            b.criadoEm - a.criadoEm
        );
    }

    if (ordenar.value === "antigo") {

        usuariosFiltrados.sort((a, b) =>
            a.criadoEm - b.criadoEm
        );
    }

    // LISTAR
    usuariosFiltrados.forEach((user) => {

        const indexOriginal = usuarios.indexOf(user);

        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${user.nome}</strong>
            - Email: ${user.email}
            - ${user.idade} anos
            - Código: ${user.codigo}

            <button class="editar" data-index="${indexOriginal}">
                Editar
            </button>

            <button class="remover" data-index="${indexOriginal}">
                Remover
            </button>
        `;

        lista.appendChild(li);
    });
}

// EVENTOS DOS BOTÕES
lista.addEventListener("click", function(event) {

    const index = event.target.dataset.index;

    if (event.target.classList.contains("editar")) {
        editar(index);
    }

    if (event.target.classList.contains("remover")) {
        remover(index);
    }

});

function editar(index) {

    const user = usuarios[index];

    document.getElementById("codigo").value = user.codigo;
    document.getElementById("nome").value = user.nome;
    document.getElementById("email").value = user.email;
    document.getElementById("idade").value = user.idade;

    editandoIndex = index;
}

function remover(index) {

    const confirmar = confirm("Tem certeza que deseja remover?");

    if (confirmar) {

        usuarios.splice(index, 1);

        listar();
    }
}

function limparCampos() {

    document.getElementById("codigo").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("idade").value = "";
}

listar();
