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
function checkForm() {
  console.log("roblox");
  let nome = document.getElementById("nomein").value;
  let cognome = document.getElementById("cognomein").value;
  let cell = document.getElementById("cellin").value;
  let cf = document.getElementById("cFiscIn").value;
  let via = document.getElementById("viain").value;
  let age = parseInt(document.getElementById("agein").value);
  if (
    LETTERS_REGEX.test(nome) &&
    LETTERS_REGEX.test(cognome) &&
    PHONE_REGEX.test(cell) &&
    CF_REGEX.test(cf) &&
    via
  ) {
    document.getElementById("form").style.display = "none";

    cf = cf.toUpperCase();

    let ogg1 = parseInt(document.getElementById("quantita1").value);
    let ogg2 = parseInt(document.getElementById("quantita2").value);
    let ogg3 = parseInt(document.getElementById("quantita3").value);

    let price = 0;
    price += ogg1 * 7.12 ;
    price += ogg2 * 6.49 ;
    price += ogg3 * 3.89 ;

    document.getElementById("recap").innerHTML = `
    <p style="font-size: 16px; color: #333;"><strong>Nome:</strong> ${nome}</p>
    <p style="font-size: 16px; color: #333;"><strong>Cognome:</strong> ${cognome}</p>
    <p style="font-size: 16px; color: #333;"><strong>Numero di telefono:</strong> ${cell}</p>
    <p style="font-size: 16px; color: #333;"><strong>Codice Fiscale:</strong> ${cf}</p>
    <p style="font-size: 16px; color: #333;"><strong>Indirizzo:</strong> ${via}</p>
    <p style="font-size: 16px; color: #333;"><strong>Età:</strong> ${age}</p>
    <hr style="border: 1px solid #95BB72;">
    <p style="font-size: 16px; color: #333;"><strong>Quantità Acido Ialuronico :</strong> ${ogg1}</p>
    <p style="font-size: 16px; color: #333;"><strong>Quantità Mascara:</strong> ${ogg2}</p>
    <p style="font-size: 16px; color: #333;"><strong>Quantità Mousse Detergente:</strong> ${ogg3}</p>
    <hr style="border: 1px solid #95BB72;">
    <p style="font-size: 18px; color: #4B6043; font-weight: bold;">Totale: €${price.toFixed(2)}</p>
    `;
    
    
    document.getElementById("order").style.display = "flex";
  }
}