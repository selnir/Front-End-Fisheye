function photographerFactory(data) {
    const { name,id,city,country, tagline,price,portrait } = data;

    const picture = `Sample Photos/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const url=new URL(location.origin + '/photographer.html');
        const search_params=url.searchParams;
        search_params.set('id',id)
        const a=document.createElement('a');
        a.setAttribute('href',url);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3=document.createElement( 'h3' );
        h3.className="local";
        h3.textContent = city+","+country;
        const p=document.createElement('p');
        p.className="tagline";
        p.textContent=tagline;
        const p1=document.createElement('p');
        p1.className="price";
        p1.textContent=price+"€/jour";
        article.appendChild(a),
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(p1);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}