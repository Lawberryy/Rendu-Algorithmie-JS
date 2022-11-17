class Tueur {
    constructor(nom, pointsVie) {
        this.nom = nom;
        this.pointsVie = pointsVie;
    }
}

// tueur
let Jason = new Tueur('Jason', '100');


class Caracteristiques {
    constructor(nom, probaMourir, probaDegats, probaMourirDegats) {
        this.nom = nom;
        this.probaMourir = probaMourir;
        this.probaDegats = probaDegats;
        this.probaMourirEtDegats = probaMourirDegats;
    }
}

// 5 caractéristiques
let nerd = new Caracteristiques('Nerd', 0.7, 0.1, 0.2);
let sportif = new Caracteristiques('Sportif', 0.2, 0.5, 0.3);
let blonde = new Caracteristiques('Blonde', 0.4, 0.2, 0.4);
let gigaChad = new Caracteristiques('gigaChad', 0.1, 0.7, 0.2);
let smartAss = new Caracteristiques('SmartAss', 0.3, 0.4, 0.3);

let listeCarac = [nerd, sportif, blonde, gigaChad];

// liste prénoms
let prenoms = ["Zoro", "Usopp", "Shanks", "Ace", "Law"];


class Survivant {
    constructor(nom, caractéristiques) {
        this.nom = nom;
        this.caractéristiques = caractéristiques;
    }

    static RandomPrenom() {
        let Prenom = prenoms[Math.floor(Math.random() * prenoms.length)];
        return Prenom;
    }
    
    static RandomCaracteristiques() {
        let randomCarac = listeCarac[Math.floor(Math.random() * listeCarac.length)];
        return randomCarac;
    }
}

let Survivant1 = new Survivant(Survivant.RandomPrenom(), Survivant.RandomCaracteristiques());
let Survivant2 = new Survivant(Survivant.RandomPrenom(), Survivant.RandomCaracteristiques());
let Survivant3 = new Survivant(Survivant.RandomPrenom(), Survivant.RandomCaracteristiques());
let Survivant4 = new Survivant(Survivant.RandomPrenom(), Survivant.RandomCaracteristiques());
let Survivant5 = new Survivant(Survivant.RandomPrenom(), Survivant.RandomCaracteristiques());

let survivants = [Survivant1, Survivant2, Survivant3, Survivant4, Survivant5];

// boucle while
while(Jason.pointsVie > 0 && survivants.length > 0) {

    let randomProba = Math.random();
    console.log('La probabilité aléatoire de ce tour est ', randomProba);
    randomSurvivant = survivants[0];
    console.log('Le survivant de ce tour est', randomSurvivant.nom);
    console.log(randomSurvivant.caractéristiques);
    
    if(randomProba < randomSurvivant.caractéristiques.probaMourir) {
        console.log('Jason a tué ', randomSurvivant.nom);
        survivants.splice(0,1);
    } 
    else if(randomProba > randomSurvivant.caractéristiques.probaMourir && randomProba < (randomSurvivant.caractéristiques.probaMourir + randomSurvivant.caractéristiques.probaDegats)) {
        console.log(randomSurvivant.nom, ' a esquivé et a infligé 10 pts de dégâts');
        Jason.pointsVie -= 10;
        console.log('Il reste ', Jason.pointsVie, 'pts de vie à Jason');
    } 
    else {
        console.log(randomSurvivant.nom, 'a infligé 15 points de dégâts mais est mort ensuite.');
        Jason.pointsVie -= 15;
        console.log('Il reste ', Jason.pointsVie, 'pts de vie à Jason');
        survivants.splice(0,1);
    }


    if(Jason.pointsVie <= 0) {
        console.log('Jason est mort');
        console.log(survivants.length, ' survivant(s) au final !');
    } 
    else if(Jason.pointsVie > 0 && survivants.length == 0) {
        console.log('Jason a tué tout le monde');
    }
}