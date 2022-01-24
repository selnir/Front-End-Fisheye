

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
  
    const {photographerId,title,image,video,likes,date,price}=data;

    const picture =`Sample_Photos/Media/${image}`;

    const movie=`Sample_Photos/Media/${video}`;

    function getUsermediaDOM() {

        const article = document.createElement( 'article' );
        // const mediaHTML =`
        // ${getPhoto(picture)}`#
        if(typeof video=='undefined')
        {
            article.innerHTML=getPhoto(picture);
        }
        else
        {        
            article.innerHTML=getVideo(movie);
        }

       

        return (article);
    }

    return  {picture,movie, getUsermediaDOM};

}