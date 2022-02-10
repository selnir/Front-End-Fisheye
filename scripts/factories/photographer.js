function photographerFactory(data) {
    const { name,id,city,country, tagline,price,portrait } = data;
    

    const picture = `Sample_Photos/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const url=new URL(location.origin + '/photographer.html');
        const search_params=url.searchParams;
        search_params.set('idphoto',id)
        const a=document.createElement('a');
        a.setAttribute('href',url);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
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
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}