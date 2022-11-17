class Personnage {
    constructor(prenom, mentalHealth) {
        this.prenom = prenom;
        this.mentalHealth = mentalHealth;
    }
}


let musiques = ["Anissa", "chanson2", "chanson3", "chanson4", "chanson5"];

function RandomSong() {
    let randomSong = musiques[Math.floor(Math.random() * musiques.length)];
    return randomSong
}


let Pierrick = new Personnage('Pierrick', 10);

for(i = 30; i > 0; i--) {

    console.log('Tour', i)
    let song = RandomSong()
    console.log(song)

    if(song == 'Anissa') {
        Pierrick.mentalHealth -= 1
        console.log('Les points de vie sont maintenant égaux à '+ Pierrick.mentalHealth)
    } else {
        console.log(Pierrick.mentalHealth)
    }

    if(Pierrick.mentalHealth == 0) {
        console.log('Explosion')
        break
    } else {
        console.log('Vous êtes toujours vivant.')
    }
}