const CF_REGEX = /^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$/i;
const LETTERS_REGEX =/^[a-zA-z]+$/;
const PHONE_REGEX = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const VIA_REGEX = /^[a-zA-z0-9]+$/;

function optim(id, value) {
    if (value) {
      document.getElementById(id).style.border = "3px solid #4B6043";
      document.getElementById(id).style.backgroundColor = "#95BB72";
    } else if (!value) {
      document.getElementById(id).style.border = "3px solid #A52A2A";
      document.getElementById(id).style.backgroundColor = "#FFC0C0";
    }
  }
  function checkCf(id) {
    let cf = document.getElementById(id).value;
    console.log(cf);
    if (CF_REGEX.test(cf)) {
      optim(id, true);
    } else {
      optim(id, false);
    }
  }
  function checkNome(id) {
    let nome = document.getElementById(id).value;
    console.log(nome);
    if (LETTERS_REGEX.test(nome)) {
      optim(id, true);
    } else {
      optim(id, false);
    }
  }
  function checkCognome(id) {
    let cognome = document.getElementById(id).value;
    console.log(cognome);
    if (LETTERS_REGEX.test(cognome)) {
      optim(id, true);
    } else {
      optim(id, false);
    }
  }
  function checkCell(id) {
    let cell = document.getElementById(id).value;
    console.log(cell);
    if (PHONE_REGEX.test(cell)) {
      optim(id, true);
    } else {
      optim(id, false);
    }
  }
  function checkVia(id) {
    let via = document.getElementById(id).value;
    console.log(via);
    if (VIA_REGEX.test(via)) {
      optim(id, true);
    } else {
      optim(id, false);
    }
  }
  function checkAge(id) {
    let age = parseInt(document.getElementById(id).value, 10);

    if (!isNaN(age) && age >= 0 && age <= 99) {
        if (age < 18) {
            document.getElementById('genitori').style.display = 'flex'; // Mostra il container
        } else {
            document.getElementById('genitori').style.display = 'none'; // Nascondi il container
        }
    } else {
        document.getElementById('genitori').style.display = 'none'; // Nascondi in caso di input non valido
    }
}