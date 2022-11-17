
// nbre d'allumettes restantes
  let nb=0;
  let jeu=true;

    function Byid(id){
      return document.getElementById(id);
    }

    function valuede(id){
      return Byid(id).value;
    }

    function flam(id,id2,id3){
      let elmtfeu=Byid(id);
      let error1=Byid("error1");
      nb=valuede(id3);
      
      if(nb<=3 || isNaN(nb)){
        error1.innerHTML="Entrez un chiffre supérieur à 3 svp";
      }else{
        error1.innerHTML="";
        elmtfeu.innerHTML="";
        for (let i=0; i<nb; i++){
          insereimg(id);
        }
        ElmtJoueur=Byid("joueur");
        joueur.textContent="Au tour du joueur 1 :";
        jeu=true;
        insereButton(id2);
        document.getElementById("nb").value="";
      }

    }

    function insereimg(id){
      let elmt=Byid(id);
      let createtd=document.createElement("td");
      let i=document.createElement("div");
      i.setAttribute("class", "allu");
      createtd.appendChild(i);
      elmt.appendChild(createtd);
    }

    function insereButton(idb){
      let elmt=Byid(idb);
      elmt.innerHTML="<p><button type='button' onclick='enlever(nbAllumEnlev)'>Retirer</button> <input type='text' id='nbAllumEnlev' name='nbAllumEnlev' size='5' value=''/><label> allumette(s)</label><span id='error2'></span></p><p id='reste'></p>"
    }


    function enlever(nb2){
      let elmtfeu=Byid("trfeu");
      let nbAllumEnlev=parseInt(valuede("nbAllumEnlev"));
      let ElmtReste=Byid("reste");
            
      if(nbAllumEnlev>3 || nbAllumEnlev<=0 || isNaN(nbAllumEnlev)){
        error2=Byid("error2");
        error2.textContent=" Entrez un chiffre entre 0 et 3 et inférieur au nombre d\'allumette(s) restante(s) : "+nb;

      }else if (nbAllumEnlev>nb){
        error2.textContent=" Entrez un chiffre inférieur au nombre d\'allumette(s) restante(s) : "+nb;

      }else{
        error2.textContent="";
        jeu=!jeu;
          if (jeu==true) {
            joueur.textContent="Au tour du joueur 1 :";
          }else{
            joueur.textContent="Au tour du joueur 2 :";
          }
          for (let i=nbAllumEnlev-1; i>=0;i--){
            elmtfeu.removeChild(elmtfeu.childNodes[i]);
          } 
          nb=nb-nbAllumEnlev;
      }

      ElmtReste.textContent="Il reste "+nb+" allumette(s) à jouer.";
      document.getElementById("nbAllumEnlev").value="";

      if(nb === 0){ 
        joueur.textContent="";
        jeu=!jeu;
        if (jeu==true) {
            joueur.textContent="Le joueur 1 a gagné !";
            // joueur.style.color="#2E76FF";
          }else{
            joueur.textContent="Le joueur 2 a gagné !";
            // joueur.style.color="#2E76FF";
          }
        // let i=document.createElement("IMG");
        // i.setAttribute("src", "img/7oqt0qq2.gif");
        // i.setAttribute("alt","gagné");
        elmtfeu.appendChild(i);

        error2.textContent=" ***** Le jeu est Terminé. *****";
          // error2.style.color="#2E76FF";
      }

    }