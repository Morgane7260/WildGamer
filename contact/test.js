
const name = document.getElementById("nom");
const sendButton = document.getElementById("bouton");


// const name= prompt();
const readName= name.length;
let count = 0;



function noIntHere(name){
    for (let i=0 ; i<=readName ; i++){
        switch(name[i]){
            case "0":
            alert("Votre entrée est invalide, elle ne peut contenir que des lettres")
            count+=1;
            break;
        case "1":
            alert("Votre entrée est invalide, elle ne peut contenir que des lettres")
            count+=1;
            break;
        case "2":
            alert("Votre entrée est invalide, elle ne peut contenir que des lettres")
            count+=1;
            break;
            case "3":
            alert("Votre entrée est invalide, elle ne peut contenir que des lettres")
            count+=1;
            break;
            case "4":
            alert("Votre entrée est invalide, elle ne peut contenir que des lettres")
            count+=1;
            break;
        case "5":
            alert("Votre entrée est invalide, elle ne peut contenir que des lettres")
            count+=1;
            break;
            case "6":
                alert("Votre entrée est invalide, elle ne peut contenir que des lettres")
            count+=1;
            break;
            case "7":
            alert("Votre entrée est invalide, elle ne peut contenir que des lettres")
            count+=1;
            break;
        case "8":
            alert("Votre entrée est invalide, elle ne peut contenir que des lettres")
            count+=1;
            break;
            case "9":
            alert("Votre entrée est invalide, elle ne peut contenir que des lettres")
            count+=1;
            break;
        default:
            break;
        }
    if (count == 1){
        break;
    }
}
};

sendButton.addEventListener('click', noIntHere);