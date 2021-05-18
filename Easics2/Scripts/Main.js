
//Funktionerne GetPar og GetParSub har begge et id som parameter som er en string man indsætter for at funktionen ved hvilken Action den skal kører med hjælp fra Controlleren. Efter id'et sætter vi op til en ajax funktion
//Her siger vi, url'en til vores side er "/Home" + en hvilken som helst string. Derefter siger vi at det er en GET type, som laver en Get request og spørger om data fra en specificeret resurse. Så den henter data fra serveren.
//Hvis den kan hente data'en kører den en funktion med parameteren "response". "response" er det data den lige har modtaget fra serveren, heraf et body element (hos os).
//Til sidst siger funktionen at den skal vælge et specifik div og placere "response" i, det ser vi her $(subBARS).html(response);, hvor funktionens mål er div'et subBARS
function GetPar(id) {
    let ID = id
    $.ajax({
        url: "/Home/" + ID,
        type: "GET",
        success: function (response) {
            $(subBARS).html(response);
        },
    });
}

function GetParSub(id) {
    let ID = id
    $.ajax({
        url: "/Home/" + ID,
        type: "GET",
        success: function (response) {
            $(Calculator).html(response);
        },
    });
}

//Alt addEvent() gør, er at anmode om et element ud fra et id. Her har vi sat en string ind som repræsentere id'et
//Derefter sætter vi en EventListener på det element vi lige fandt (I dette tilfælde en knap). Her venter EventListener på at der sker eventet "click" på det respektive element.
//Tilsidst bruger vi en Lamda funktion eller en Arrow funktion, hvad den kaldes af folk, til at gører funktionen GetPar, når der sker Event.Clicked.
function addEvent() {
document.getElementById("Gravitation").addEventListener("click", () => {
    GetPar("gravitation");
});

document.getElementById("Circular motion").addEventListener("click", () => {
    GetPar("circularMotion");
});

document.getElementById("Angular velocity").addEventListener("click", () => {
    GetPar("angularVelocity");
});

document.getElementById("Momentum").addEventListener("click", () => {
    GetPar("momentum");
});

document.getElementById("Forces").addEventListener("click", () => {
    GetPar("forces");
});

document.getElementById("Electricity").addEventListener("click", () => {
    GetPar("electricity");
});
document.getElementById("Magnetism").addEventListener("click", () => {
    GetPar("magnetism");
});

document.getElementById("Energy").addEventListener("click", () => {
    GetPar("energy");
});

document.getElementById("Heatcapacity").addEventListener("click", () => {
    GetPar("heatcapacity");
});
}
addEvent()

//Relativt simple scripts. Henter værdi fra et element, derefter ligger værdien ind i en variable, ved hjælp at matematiske operatorer. Der efter ændre innerHTML af et element
function forceCal() {
    let forceRes = (+document.getElementById("ga").value) * (+document.getElementById("mass").value)
    document.getElementById("resFo").innerHTML = "Result: " + forceRes + "N"
}

function VolCalc() {
    let res = (+document.getElementById("r").value) * (+document.getElementById("a").value)
    document.getElementById("resVol").innerHTML = "Result: " + res + " Volt"
}

function ndlawCalc() {
    let res = (+document.getElementById("mass").value) * (+document.getElementById("a").value)
    document.getElementById("res").innerHTML = "Result: " + res + " N"
}

function CurCalc() {
    let res = (+document.getElementById("v").value) / (+document.getElementById("r").value)
    document.getElementById("res").innerHTML = "Result: " + res + " Amp"
}

function PowCalc() {
    let res = (+document.getElementById("v").value) * (+document.getElementById("a").value)
    document.getElementById("res").innerHTML = "Result: " + res + " watt"
}