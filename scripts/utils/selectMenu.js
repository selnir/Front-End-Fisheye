var x, i, j,m, l, ll, selElmnt, a, b, c;
var hrelement1=document.createElement("hr");
var hrelement2=document.createElement("hr");



/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;

for (i = 0; i < l; i++) {

  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("button");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");


  for (j = 0; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */

    c = document.createElement("button");
    c.setAttribute("class", "not-same-as-selected");
    c.innerHTML = selElmnt.options[j].innerHTML;

    

    if (c.innerHTML==a.innerHTML){
      c.removeAttribute("class");
      c.setAttribute("class", "same-as-selected");
    }


    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl,m,n;
        this.innerHTML=="Popularite";

        switch (this.innerText) {
          case 'Popularite':
            tripop();
            break;
          case 'Date':
            tridate();
            break;
          case 'Titre':
            trititre();
            break;
        }
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {

          if (s.options[i].innerHTML == this.innerHTML) {

            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].setAttribute("class", "not-same-as-selected");
              // b.insertBefore(hrelement,element);

            }
            this.setAttribute("class", "same-as-selected");
            // var Ghrelement=b.getElementsByTagName("HR");
            b.removeChild(hrelement1);
            b.removeChild(hrelement2);

            // b.removechild(Ghrelement);
            var blastclass=b.lastChild.getAttribute("class");
            b.insertAdjacentElement("afterbegin",hrelement1)

            switch (blastclass) {
              case 'not-same-as-selected':
                b.lastChild.insertAdjacentElement("beforebegin",hrelement2);
            
                break;
              case 'same-as-selected':
                b.lastChild.previousSibling.insertAdjacentElement("beforebegin",hrelement2);
            
            
                break;
            
            }
            
            break;
          }
        }
        h.click();
    });
    
    b.appendChild(c);
    
    var blastclass=b.lastChild.getAttribute("class");

    b.insertAdjacentElement("afterbegin",hrelement1)

    switch (blastclass) {
      case 'not-same-as-selected':
        b.lastChild.insertAdjacentElement("beforebegin",hrelement2);
    
        break;
      case 'same-as-selected':
        b.lastChild.previousSibling.insertAdjacentElement("beforebegin",hrelement2);
    
    
        break;
    
    }

    //recuperer la valeur de classname de c pour afficher ou non le hr
    
  }




    // NotSameAsSelected=b.getElementsByClassName("not-same-as-selected");
    // NotSameAsSelectednode=Array.from(NotSameAsSelected);
    // NotSameAsSelectednode.forEach((element,index )=> {

    //   var hrelement=document.createElement("hr");

    //     b.insertBefore(hrelement,element);
        
    //   });

    // SameAsSelected=b.getElementsByClassName("same-as-selected");
    // SameAsSelectednode=Array.from(SameAsSelected);
    // SameAsSelectednode.forEach((element,index )=> {

    //     element.previousSibling.style.display="none";
        
    //   });

  

  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect); 