// let botao = document.getElementsByClassName('.btn');
let botao = document.querySelector('.btn');
let myForm = document.querySelector('#formulario');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let itens = document.querySelector('.itens ul');
let body = document.querySelector('body');

botao.addEventListener("click", function(event){
    event.preventDefault();
    
    let nameValue = nameInput.value;
    let emailValue = emailInput.value;

    if(nameValue === '' || emailValue === ''){
        return alert('Informar o Nome e E-mail para prosseguir.')
    }

    myForm.style.backgroundColor = 'pink';
    itens.firstElementChild.innerHTML = nameValue;
    itens.lastElementChild.innerHTML = emailValue;
    itens.children[2].innerHTML = 'Alteração';

    body.style.backgroundColor = 'purple';
})