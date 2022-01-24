//Mettre le code JavaScript lié à la page photographer.html
async function getMedia()
{
    const res =await fetch('./data/photographers.json');

    // Penser à remplacer par les données récupérées dans le json
        const media = await res.json();
    // et bien retourner le tableau photographers seulement une fois#
    return (
        media);
 }

 function getIDphotographer()
 {
    let currentUrl = newurl(document.location.href) ;
    let params=new URLSearchParams(currentUrl);

    IDphotographer=params.get('id');

        return IDphotographer;
 }


 
 async function displayMedia(media) {
    const photoSection = document.querySelector(".photo_section");

    media.forEach((photo) => {
        
        const mediamodel = mediaFactory(photo);
        const userCardDOM = mediamodel.getUsermediaDOM();
        photoSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { media } = await getMedia();
    

    displayMedia(media);
   

};

init();
