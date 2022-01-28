

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

       figure.innerHTML=`<figure >${mediaHTML}<figcaption>
       <p>${title}</p><div class="likesarea"><p>${likes}</p>
       <button id="p${id}" class="butlikes" type="button" onclick="addlikes(this)">
       <img src="assets/icons/favorite-24px 1.svg" />
       </button></div>
       </figcaption></figure>`;

        return (figure);
    }

    return  {picture,movie, getUsermediaDOM};

}
