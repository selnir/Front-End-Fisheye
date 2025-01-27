function photographerFactory(data) {
    const { name,id,city,country, tagline,price,portrait } = data;
    

    const picture = `Sample_Photos/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const section=document.createElement('section');
        const url=`photographer.html?idphoto=${id}`;
        const a=document.createElement('a');
        a.setAttribute('href',url);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt",name);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const p1=document.createElement( 'p' );
        p1.className="local";
        p1.textContent = city+","+country;
        const p2=document.createElement('p');
        p2.className="tagline";
        p2.textContent=tagline;
        const p3=document.createElement('p');
        p3.className="price";
        p3.textContent=price+"€/jour";
        article.appendChild(a),
        a.appendChild(img);
        a.appendChild(h2);
        section.appendChild(p1);
        section.appendChild(p2);
        section.appendChild(p3);
        article.appendChild(section);


        return (article);
    }
    return { name, picture, getUserCardDOM }
}