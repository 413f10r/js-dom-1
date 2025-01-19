/*Consegna
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato 
e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi 
(dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

BONUS
Facciamo accendi e spegni:
Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via...
Per fare questo bonus potremmo aver bisogno di del metodo string.includes() :occhiolino:
Buon Lavoro e buon divertimento! :sorridere: */


let imgPicture = document.getElementById("lamp");

let btnLamp = document.getElementById("btn-lamp");
btnLamp.addEventListener("click", onOff)

function onOff() {

    if (btnLamp.innerHTML.includes("Accendi")) {

        imgPicture.src = "./img-5/yellow_lamp.png";
        btnLamp.innerHTML = "Spegni"
    } else {
        imgPicture.src = "./img-5/white_lamp.png";
        btnLamp.innerHTML = "Accendi";
    }

}