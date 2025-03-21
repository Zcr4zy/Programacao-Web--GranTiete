let perfis = [];
let emEdicao = false;
let perfilEdicao = null;

function inicializarDados(){
    let dados = JSON.parse(localStorage.getItem("galloflix-users"));
    if(dados === null){
        dados = [
            {
                nome: "Carlos",
                avatar: "img/users/avatar.png",
                crianca: false
            },
            {
                nome: "Capitão",
                avatar: "img/users/avatar4.png",
                crianca: false
            },
            {
                nome: "Trizóio",
                avatar: "img/users/avatar5.png",
                crianca: true
            }
        ];
        localStorage.setItem("galloflix-users", JSON.stringify(dados));
    }
    perfis = dados;
}


document.addEventListener("DOMContentLoaded", async () => {
    carregarPerfis();
    toggleLoading();
    let nome = document.getElementById("Nome");
    nome.addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            event.preventDefault();
            document.querySelector('.btn-light').click();
        }
    });
    let icons = document.querySelectorAll(".icon");
    icons.forEach(icon => {
        icon.style.display = 'none';
    })
});

function carregarPerfis(){
    inicializarDados();
    let cards = document.querySelector('.cards');
    cards.innerHTML = '';
    perfis.forEach(perfil => {
        cards.innerHTML +=
            `<div class="card rounded-4">
                <a href="#" class="text-decoration-none" onclick="redirecionarPagina('${perfil.nome}')">
                    <div id="profile-image" class="position-relative rounded-4">
                        <img src="${perfil.avatar}" alt="Avatar" class="img-fluid rounded-4">
                        <i class="icon bi bi-pencil-fill"></i>
                    </div>
                    <p class="text-secondary text-center mt-2 fs-5 mb-0">${perfil.nome}</p>
                </a>
            </div>`;
    });
    cards.innerHTML +=
        `<div class="card rounded-4">
            <a data-bs-toggle="modal" data-bs-target="#addPerfil" class="text-decoration-none d-flex flex-column flex-fill">
                <i class= 'bx bxs-plus-circle rounded-4 d-flex justify-content-center align-items-center flex-fill'></i>            
                <p class="text-secondary text-center mt-2 fs-5 mb-0">Adicionar perfil</p>
            </a>
        </div>;`
}