let inputNome = document.querySelector('.input-name');
let btnAdicionar = document.querySelector('.button-add');
let btnSortear = document.querySelector('.button-draw');
let listaAmigos = JSON.parse(localStorage.getItem('Lista de Amigos')) || [];

function adicionarAmigo(){
    let nome = inputNome.value;
    // Validar campo de input
    if(nome === ""){
        alert("Insira um nome.");
    }
    else{
        listaAmigos.push(nome);
        console.log(nome + " adicionado na lista");
    }
    salvarLocalStorage();
    atualizarLista();
    inputNome.value = '';

}

function sortearAmigo(){
    const resultado = document.querySelector('#resultado');
    if(listaAmigos.length === 0){
        alert("Lista de amigos vazia! Informe um amigo..");
        resultado.textContent = '';
        return;
    }

    const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    resultado.textContent = `Amigo secreto sorteado: ${amigoSorteado}`;
}

function atualizarLista() {
    const lista = document.querySelector('.name-list');
    lista.innerHTML = '';
    // Adicionando o titulo se a lista tiver nomes
    if (listaAmigos.length > 0) {
        const h4 = document.createElement('h4');
        h4.textContent = "Lista de Amigos";
        lista.appendChild(h4);
    }
    
    //Adicionando os nomes e o btn-excluir no li na lista ul
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.classList.add("item-lista");

        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-trash"></i>';
        btn.classList.add("btn-excluir");
        btn.onclick = () => removerAmigo(index);

        li.appendChild(btn);
        lista.appendChild(li);
    });
}

function removerAmigo(index) {
        listaAmigos.splice(index, 1);
        salvarLocalStorage();
        atualizarLista();
}

// Função para o localstorage
function salvarLocalStorage() {
    localStorage.setItem('Lista de Amigos', JSON.stringify(listaAmigos));
}

atualizarLista();