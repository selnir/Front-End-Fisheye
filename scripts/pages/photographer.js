

// fonction de trie par popularite

function tripop(){

    const modalContent=document.querySelector(".modal-content");
    const photo_section=document.querySelector(".photo_section");
    // recuperation des figures chargee
    const TabFigNode=Array.from(photo_section.childNodes);
    const clone=new Array(TabFigNode.length);

// function de trie du tableaux de figure
    TabFigNode.sort(function compare(a, b) { 
        if (parseInt(a.childNodes[1].childNodes[2].childNodes[0].textContent) < parseInt(b.childNodes[1].childNodes[2].childNodes[0].textContent))
           return 1;
        if (parseInt(a.childNodes[1].childNodes[2].childNodes[0].textContent) > parseInt(b.childNodes[1].childNodes[2].childNodes[0].textContent))
           return -1;
        return 0;
      });

    // copie du tableaux dans un autre tableaux
    TabFigNode.forEach((figure,index)=>{
        
        const figById=document.getElementById(`${figure.getAttribute("id")}`);
        clone[index] =figById.cloneNode(true);

    });
    // effacer les figures deja present dans la page
    photo_section.innerHTML="";
//charge les figures trier dans la page
    clone.forEach((figurehtml)=>{

        photo_section.appendChild(figurehtml);
    })

    i=0;

//appliquer les changements sur la modal lightbox

//construction de la figure utiliser dans la lightbox
    TabFigNode.forEach((figure,index)=>{
        
        i=i+1;
        const nbreslide=`openModal_lightbox();currentSlide(${i})`;

        
        const figById=document.getElementById(`${figure.getAttribute("id")}`);
        figById.childNodes[0].setAttribute("onclick",nbreslide);

        clone[index] =figById.cloneNode(true);

    });
    i=0;
    // effacer les figures deja present dans la modal lightbox

    modalContent.innerHTML=""
//charge les figures trier dans la modal lightbox


    clone.forEach((figurehtml,index)=>{



        figurehtml.childNodes[1].removeChild(figurehtml.childNodes[1].childNodes[2]);
        figurehtml.childNodes[0].removeAttribute("onclick");
        figurehtml.className="mySlides";

        modalContent.appendChild(figurehtml);
    })

}

function tridate(){
    const modalContent=document.querySelector(".modal-content");

    const photo_section=document.querySelector(".photo_section");
    const TabFigNode=Array.from(photo_section.childNodes);
    const clone=new Array(TabFigNode.length);



    TabFigNode.sort(function compare(a, b) { 
        if (a.childNodes[1].childNodes[3].textContent < b.childNodes[1].childNodes[3].textContent)
           return 1;
        if (a.childNodes[1].childNodes[3].textContent > b.childNodes[1].childNodes[3].textContent)
           return -1;
        return 0;
      });

    
    TabFigNode.forEach((figure,index)=>{
        
        const figById=document.getElementById(`${figure.getAttribute("id")}`);
        clone[index] =figById.cloneNode(true);

    });

    photo_section.innerHTML="";

    clone.forEach((figurehtml)=>{

        photo_section.appendChild(figurehtml);
    })

    i=0;


    TabFigNode.forEach((figure,index)=>{
        
        i=i+1;
        const nbreslide=`openModal_lightbox();currentSlide(${i})`;

        
        const figById=document.getElementById(`${figure.getAttribute("id")}`);
        figById.childNodes[0].setAttribute("onclick",nbreslide);

        clone[index] =figById.cloneNode(true);

    });
    i=0;

    modalContent.innerHTML=""


    clone.forEach((figurehtml,index)=>{



        figurehtml.childNodes[1].removeChild(figurehtml.childNodes[1].childNodes[2]);
        figurehtml.childNodes[0].removeAttribute("onclick");
        figurehtml.className="mySlides";

        modalContent.appendChild(figurehtml);
    })


}

function trititre(){
    const modalContent=document.querySelector(".modal-content");

    const photo_section=document.querySelector(".photo_section");
    const TabFigNode=Array.from(photo_section.childNodes);
    const clone=new Array(TabFigNode.length);



    TabFigNode.sort(function compare(a, b) { 
        if (a.childNodes[1].childNodes[1].textContent < b.childNodes[1].childNodes[1].textContent)
           return -1;
        if (a.childNodes[1].childNodes[1].textContent > b.childNodes[1].childNodes[1].textContent)
           return 1;
        return 0;
      });

    
    TabFigNode.forEach((figure,index)=>{
        
        const figById=document.getElementById(`${figure.getAttribute("id")}`);
        clone[index] =figById.cloneNode(true);

    });

    photo_section.innerHTML="";

    clone.forEach((figurehtml)=>{

        photo_section.appendChild(figurehtml);
    })

    i=0;


    TabFigNode.forEach((figure,index)=>{
        
        i=i+1;
        const nbreslide=`openModal_lightbox();currentSlide(${i})`;

        
        const figById=document.getElementById(`${figure.getAttribute("id")}`);
        figById.childNodes[0].setAttribute("onclick",nbreslide);

        clone[index] =figById.cloneNode(true);

    });
    i=0;

    modalContent.innerHTML=""

    i=0;

    clone.forEach((figurehtml,index)=>{

        i=i+1;


        figurehtml.childNodes[1].removeChild(figurehtml.childNodes[1].childNodes[2]);
        figurehtml.childNodes[0].removeAttribute("onclick");
        figurehtml.className="mySlides";



        modalContent.appendChild(figurehtml);
    })
        i=0;

}


function addlikes(idfig){

    const buttonlike=document.getElementById(`p${idfig}`).lastChild;
   const likehtml=buttonlike.childNodes[2].firstChild;
   oldlike=parseInt(likehtml.innerHTML);
   newlike=oldlike+1;
   likehtml.innerHTML= `${newlike}`;
    const liketothtml=document.querySelector(".price_day").previousElementSibling;
    oldliketot=parseInt(liketothtml.firstChild.nodeValue);
    newliketot=oldliketot+1;
    liketothtml.innerHTML=`${newliketot}<img src="assets/icons/favorite-24px 1black.svg" alt="likes">`;
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

    IDphotographer=params.get("idphoto");

        return IDphotographer ;
 }


 
 async function displayMedia(media) {
    const modalContent= document.querySelector(".modal-content");
    const photoSection = document.querySelector(".photo_section");

    var numberOflikeTot=0;

    i=0;

    media.forEach((photo) => {
if(photo.photographerId==getIDphotographer())
        {
        
        numberOflikeTot=photo.likes+numberOflikeTot;
        i=i+1;
        const nbreslide=`openModal_lightbox();currentSlide(${i})`;

        
        // let numberOflikeTotHTML=`<aside>${numberOflikeTot} <i class="fas fa-heart></i> </aside>`;
        const mediamodel = mediaFactory(photo);
        const userCardDOM = mediamodel.getUsermediaDOM();
        userCardDOM.childNodes[0].setAttribute("onclick",nbreslide);
        userCardDOM.setAttribute("aria-label",`${photo.title},closeup view`)


        photoSection.appendChild(userCardDOM);
        }
    });

    i=0;

    let numberOflikeTotHTML=`<p>${numberOflikeTot}<img src="assets/icons/favorite-24px 1black.svg">`;
    document.querySelector(".price_day").insertAdjacentHTML("beforebegin",numberOflikeTotHTML);

    media.forEach((photo) => {
        if(photo.photographerId==getIDphotographer())
                {

                const mediamodel = mediaFactory(photo);
                const userCardDOM = mediamodel.getUsermediaDOM();


                userCardDOM.childNodes[1].removeChild(userCardDOM.childNodes[1].childNodes[2]);
                userCardDOM.className="mySlides";
                userCardDOM.setAttribute("aria-label",`${photo.title}`)

                modalContent.appendChild(userCardDOM);
                }
            });


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
            const displayimg=`<img src="${picture}" alt="${name}">`;
            const button_contact=document.querySelector(".contact_button");
            button_contact.insertAdjacentHTML("beforebegin",displaydata);
            button_contact.insertAdjacentHTML("afterend",displayimg);
            let pricetHTML=`<aside><p class=price_day>${photographer.price}€/jour</p> </aside>`;
            document.querySelector(".photo_section").insertAdjacentHTML("afterend",pricetHTML);
            const modal = document.getElementById("contact_modal");
            
          modal.firstElementChild.firstElementChild.firstElementChild.textContent+=` ${name}`;
            

        }
    });
};
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
      case "ArrowLeft":
        // Do something for "left arrow" key press.
        plusSlides(-1);
        break;
      case "ArrowRight":
        // Do something for "right arrow" key press.
        plusSlides(1);
        break;
      case "Escape":
        closeModal_lightbox();
        // Do something for "esc" key press.
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);
async function init() {

    displayPhotographerInfo();
    const { media } = await getMedia();
    displayMedia(media);  
    tripop();
  
};



init();


