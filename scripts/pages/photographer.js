
function tripop(){

    const tabfigure=document.querySelector("figatpion");
    
    
    document.querySelector(".photo_section").innerHTML=`${tabfigure.nodeName}`;


}
function addlikes(buttonlike){
    

    const buttonid =document.querySelector(`#${buttonlike.id}`);
   const likehtml=buttonid.previousElementSibling;
   oldlike=parseInt(likehtml.firstChild.nodeValue);
   newlike=oldlike+1;
   likehtml.innerHTML= `${newlike}`;

    const liketothtml=document.querySelector(".price_day").previousElementSibling;
    oldliketot=parseInt(liketothtml.firstChild.nodeValue);
    newliketot=oldliketot+1;
    liketothtml.innerHTML=`${newliketot}<img src="assets/icons/favorite-24px 1black.svg">`;
}

//Mettre le code JavaScript lié à la page photographer.html
async function getMedia()
{
    const res =await fetch('./data/photographers.json');

    // Penser à remplacer par les données récupérées dans le json
        const variable = await res.json();
    // et bien retourner le tableau photographers seulement une fois#
    return (
        variable);
 }

 function getIDphotographer()
 {
    let params =(new URL(document.location)).searchParams;

    IDphotographer=params.get("id");

        return IDphotographer ;
 }


 
 async function displayMedia(media) {
    const photoSection = document.querySelector(".photo_section");
    var numberOflikeTot=0;


    media.forEach((photo) => {
if(photo.photographerId==getIDphotographer())
        {
        
        numberOflikeTot=photo.likes+numberOflikeTot;
        
        // let numberOflikeTotHTML=`<aside>${numberOflikeTot} <i class="fas fa-heart></i> </aside>`;
        const mediamodel = mediaFactory(photo);
        const userCardDOM = mediamodel.getUsermediaDOM();
        photoSection.appendChild(userCardDOM);
        }
    });
    let numberOflikeTotHTML=`<p>${numberOflikeTot}<img src="assets/icons/favorite-24px 1black.svg">`;
    document.querySelector(".price_day").insertAdjacentHTML("beforebegin",numberOflikeTotHTML);

};

async function displayPhotographerInfo(){

    const { photographers } = await getMedia();

    photographers.forEach((photographer) => {
if(photographer.id==getIDphotographer())
        {       
            const { name,id,city,country, tagline,price,portrait } = photographer;
            const picture = `Sample_Photos/Photographers ID Photos/${portrait}`;
            const photoSection = document.querySelector(".photograph-header");
            const displaydata=`<article><h1>${name}</h1><p class=local>${city},${country}</p><p class=tagline>${tagline}</p></article>`;
            const displayimg=`<img src="${picture}">`;
            const button_contact=document.querySelector(".contact_button");
            button_contact.insertAdjacentHTML("beforebegin",displaydata);
            button_contact.insertAdjacentHTML("afterend",displayimg);
            let pricetHTML=`<aside><p class=price_day>${photographer.price}€/jour</p> </aside>`;
            document.querySelector(".photo_section").insertAdjacentHTML("afterend",pricetHTML);

        }
    });
};

async function init() {


    displayPhotographerInfo();


    const { media } = await getMedia();

    displayMedia(media);
};



init();
