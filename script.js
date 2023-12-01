//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

//MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

//MILESTONE 2: Stampare le stesse informazioni su DOM sotto forma di stringhe

//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
let objs = [{

    name : "Wayne Barnett",
    role: "Founder & CEO",
    Image: "wayne-barnett-founder-ceo.jpg",
},
{
    name : "Angela Caroll",
    role: "Chief Editor",
    Image: "angela-caroll-editor.jpg",
},
{
    name : "Walter Gordon",
    role: "Office Manager",
    Image: "walter-gordon-office-manager.jpg",
},
{
    name : "Angela Lopez",
    role: "Social Media Manager",
    Image: "angela-lopez-social-media-manager.jpg",
},
{
    name : "Scott Estrada",
    role: "Developer",
    Image: "scott-estrada-developer.jpg",
},
{
    name : "Barbara Ramos",
    role: "Graphic Designer",
    Image: "barbara-ramos-graphic-designer.jpg",
},
]



for (let i = 0; i < objs.length; i++ ) {
   console.log(objs[i].name);
   console.log(objs[i].role); 
   console.log(objs[i].Image) 
}



