// JEU DE NIM

// nombre de bâtonnets restants
  let nb = 0; // valeur de base, avant le début du jeu où les joueurs pourront choisir le nombre qu'ils veulent
  let game = true;

// fonction pour récupérer les ID des éléments plus rapidement
    function Byid(id){
      return document.getElementById(id);
    }
// pareil pour la value
    function valuede(id){
      return Byid(id).value;
    }

    function setup(id,id2,id3){
      let batonnets=Byid(id);
      let error1=Byid("error1");
      nb=valuede(id3);
      
      if(nb<=3 || isNaN(nb)){ // si le nbre de bâtonnets rentré par le joueur en début de partie n'est pas supérieur à 3, ou si l'élément  n'est pas un nombre :
        error1.innerHTML="Entrez un chiffre supérieur à 3 svp";
      }
      else {
        error1.innerHTML="";
        batonnets.innerHTML="";
        
        for (let i=0; i<nb; i++){ // tant que i < au nbre de bâtonnets voulu par le joueur, on insère un nouveau batônnet
          insererBatonnet(id); // on appelle cette fonction décrite plus bas
        }

        ElmtJoueur=Byid("joueur");
        joueur.textContent="Au tour du joueur 1 :"; // on ajoute ce bout de texte au h2 avec l'ID joueur pour annoncer le tour
        game = true; // au tour du joueur 1
        insererBoutonRetirer(id2); // on appelle la fonction décrite plus bas
        document.getElementById("nb").value=""; // on récupère la valeur rentrée dans l'input text (en HTML) pour savoir combien de bâtonnets le joueur va vouloir retirer de la liste
      }
    }

    function insererBatonnet(id){
      let elmt=Byid(id);
      let createtd=document.createElement("td"); // on crée la colonne du tableau contenant le bâtonnet
      let i=document.createElement("div"); // on crée la div c-à-d le bâtonnet lui-même
      i.setAttribute("class", "batonnet"); // on lui donne une classe juste pour pouvoir le styliser en css
      createtd.appendChild(i); // i est enfant de l'élément createtd
      elmt.appendChild(createtd); // createtd est enfant de l'élément elmt
    }

    function insererBoutonRetirer(idb){
      let elmt=Byid(idb);
      elmt.innerHTML= "<p><button type='button' class='retirer' onclick='enlever(nbBatonnetsAEnlever)'>Retirer</button> <input type='text' id='nbBatonnetsAEnlever' name='nbBatonnetsAEnlever' size='5' value=''/><span> bâtonnet(s)</span><span id='error2'></span></p><p id='reste'></p>"
    } // on insère le bouton retirer qui contient la fonction enlever() onclick, un input text pour que le joueur puisse écrire


    function enlever(nb2){ // fonction pour enlever le nb correct de bâtonnets

      let batonnets=Byid("rangeeDeBatonnets");
      let nbBatonnetsAEnlever=parseInt(valuede("nbBatonnetsAEnlever")); // convertit l'input text (entré par le joueur) considéré comme un string en int pour pouvoir le soustraire au nb total de bâtonnets plus tard
      let infoBatonnetsRestants=Byid("reste");
            
      if(nbBatonnetsAEnlever > 3 || nbBatonnetsAEnlever <= 0 || isNaN(nbBatonnetsAEnlever)) {

        error2=Byid("error2");
        error2.textContent=" Entrez un chiffre entre 1 et 3 et inférieur au nombre de bâtonnet(s) restant(s) : " + nb;

      } 
      else if (nbBatonnetsAEnlever > nb) {

        error2.textContent=" Entrez un chiffre inférieur au nombre de bâtonnet(s) restant(s) : " + nb ;

      } 
      else { // si tout va bien et pas d'error
        game = !game; // au tour du joueur suivant (true pour joueur 1, false pour joueur 2)

          if (game == true) {
            joueur.textContent="Au tour du joueur 1 :";
          }
          else {
            joueur.textContent="Au tour du joueur 2 :";
          }

          for (let i = nbBatonnetsAEnlever - 1; i >= 0; i--) {
            batonnets.removeChild(batonnets.childNodes[i]); // on enlève le dernier "enfant" de la rangée de bâtonnets, tant que i >= 0
          } 

          nb = nb - nbBatonnetsAEnlever; // nouveau nombre de bâtonnets restants
      }

      infoBatonnetsRestants.textContent="Il reste " + nb + " bâtonnet(s) à retirer.";
      document.getElementById("nbBatonnetsAEnlever").value="";


      // condition de victoire
      if(nb === 0){ 
        joueur.textContent="";
        game = !game; // joueur suivant

        if (game == true) {
            joueur.textContent="Le joueur 1 a gagné ! GG ! Rechargez la page pour rejouer.";
          }

          else {
            joueur.textContent="Le joueur 2 a gagné ! GG ! Rechargez la page pour rejouer.";
          }
        
        let enleverQuandJeuFini = document.getElementById('interfaceJeu');
        enleverQuandJeuFini.classList.add('remove');
      }
    }

  //   function SupprimerBatonnet() {
  // }