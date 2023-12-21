let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let submitBtn = document.querySelector(".btn");
let mensagem = document.querySelector(".msg");
let itens = document.querySelector('.itens ul');

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  let name = nameInput.value;
  let email = emailInput.value;

  if (name === "" || email === "") {
    // mensagem.style.color = 'red';
    // mensagem.style.backgroundColor = 'black';
    // mensagem.style.borderRadius = '20px';
    // mensagem.classList = "error";
    mensagem.classList.add("error");
    mensagem.textContent = "Favor informar o Nome e/ou E-mail para prosseguir.";
    
    setTimeout(() => {
      mensagem.textContent = "";
      mensagem.classList = "";
    }, 5000);

    return;
  }

  let li = document.createElement('li');
//   li.textContent = `Nome: ${name}, E-mail: ${email}`;
li.innerHTML = `Nome: ${name}<br/>E-mail: ${email}`;

  itens.children[0].textContent = name;
  itens.children[1].textContent = email;
  itens.appendChild(li);

  nameInput.value = '';
  emailInput.value = '';
});
