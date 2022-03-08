
//fonction de construction  de l'image
function getPhoto(src)
{
    const pictureHTML=`<img src=${src}>` ;
    return pictureHTML;
}

//fonction de construction  de l'video

function getVideo(src)
{
    const videoHTML=`<video controls>
   <source src=${src} type=video/mp4> </video>` ;
    return videoHTML;
  
}

function mediaFactory(data)
{        
  
    const {id,photographerId,title,image,video,likes,date,price}=data;

    const picture =`Sample_Photos/Media/${image}`;

    const movie=`Sample_Photos/Media/${video}`;

    function getUsermediaDOM() {

        const figure = document.createElement( 'figure' );
        figure.setAttribute("id",`p${id}`);
        // const mediaHTML;
        // ${getPhoto(picture)}`#
        if(typeof video=='undefined')
        {
            mediaHTML=getPhoto(picture);
        }
        else
        {        
            mediaHTML=getVideo(movie);
        }

       figure.innerHTML=`<button onclick=""> ${mediaHTML}</button><figcaption>
       <p>${title}</p><div class="likesarea" ><p>${likes}</p>
       <button onclick="addlikes(${id})" >
       <img src="assets/icons/favorite-24px 1.svg" alt="likes" />
       </button></div><p class="date">${date}</p>
       </figcaption>`;

        return (figure);
    }

    return  {picture,movie, getUsermediaDOM};

}
