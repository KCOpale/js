class Combattant {
    constructor(nom, pointsDeVie, attaque, precision) {
        this.nom = nom
        this.pointsDeVie = pointsDeVie
        this.attaque = attaque
        this.precision = precision
    }

    attaquer(adversaire) {
        if (Math.random() < this.precision) {
            adversaire.pointsDeVie = adversaire.pointsDeVie - this.attaque
            console.log(this.nom + " attaque " + adversaire.nom + " et inflige " + this.attaque + " dégâts !")
        } else {
            console.log(this.nom + " rate son attaque !")
        }
    }
}

let choGath = new Combattant("Cho'Gath", 30, 25, 0.8)
let darius = new Combattant("Darius", 40, 15, 0.7)

console.log("Début du combat entre " + choGath.nom + " et " + darius.nom + " !")

while (choGath.pointsDeVie > 0 && darius.pointsDeVie > 0) {
    choGath.attaquer(darius)
    if (darius.pointsDeVie <= 0) {
        console.log(darius.nom + " est KO !")
        break
    }

    darius.attaquer(choGath)
    if (choGath.pointsDeVie <= 0) {
        choGath.pointsDeVie = 1
        console.log(choGath.nom + " est sur le point de tomber, mais tient bon !")
    }
}

console.log(choGath.nom + " remporte le combat !")
