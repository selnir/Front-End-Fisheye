

function getPhoto(src)
{
    const pictureHTML=`<img src=${src} width="320" height="240">` ;
    return pictureHTML;
}
function getVideo(src)
{
    const videoHTML=`<video width="320" height="240" controls>
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

       figure.innerHTML=`<span onclick=""> ${mediaHTML}</span><figcaption>
       <p>${title}</p><div class="likesarea"><p>${likes}</p>
       <button" type="button" onclick="addlikes(${id})">
       <img src="assets/icons/favorite-24px 1.svg" />
       </button></div><p class="date">${date}</p>
       </figcaption>`;

        return (figure);
    }

    return  {picture,movie, getUsermediaDOM};

}
