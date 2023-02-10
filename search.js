const people = [
    "AKA-R1",
    "AKA-R2",
    "AWM",
    "Ar",
    "Ar-15",
    "Dragon ball",
    "Goku",
    "Glock",
    "Naruto",
    "Nami",
    "M416",
    "M1911",
    "M24",
    "MP7",
    "MP5",
    "Obito",
    "Onepiece",
    "Itachi",
    "Luffy",
    "Lol",
    "Yasuo",
    "Zed",
    "Rider",
    "W",
    "Faiz",
    "Vegeta",
    "Pistol",
    "SMG",
    "SR",
    "Shotgun", 
];


var topics = people.length;

function show(value){
    document.getElementById("datalist").innerHTML="";
    list = value.length;
    for (let i=0; i<topics;i++){
        if (((people[i].toLowerCase()).indexOf(value.toLowerCase()))>-1){
            var n = document.createElement("option");
            var v = document.createTextNode(people[i]);
            n.appendChild(v);
            document.getElementById("datalist").appendChild(n);
        }
    }
}
