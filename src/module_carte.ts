// enregistrement pour enumeration couleur qui définit les différentes couleurs 
//d’un jeu de carte (pique, carreau, trèfle et cœur),
enum Couleur {
      pique,
      carreau,
      coeur,
      trefle,
};
//----------------------------------
//Un enregistrement Carte qui permet de représenter des cartes,
//chacune avec une couleur et une valeur 
type Carte = {
      couleur: Couleur
      valeur: number
};
//-------------------------------------
//Une fonction creerCarte pour créer une carte à partir d’un couleur et d’une valeur.
export function creerCarte(couleur: Couleur, valeur: number): Carte {
      let carte: Carte
    // @carte.couleur  pour definir la couleur d'une carte
      carte.couleur = couleur
      //@carte.valeur pour definir la valeur d'une carte 
      carte.valeur = valeur

      return carte
};
//-------------------------------------
//Une fonction afficherCarte qui affiche une carte 
export function AfficheCarte(C: Carte) {
      // affiche la valeur d'une carte
      console.log("valeur de la carte :" + C.valeur)
      // affiche la couleur d'une carte 
      console.log("couleur de la carte :" + C.couleur)

};

//------------------------------------------------
 //une fonction qui compare entre deux cartes et renvoie une valeur positive si la première carte est plus forte, 
//zéro si elles ont les mêmes valeurs, et une valeur négative si la première carte est moins forte.

export function compareCarte(self: Carte, other: Carte): boolean {
      // varifie les couleurs 
      //@ self.couleur c'est  une premiere carte
      //@other.couleur c'est une deuxieme carte
      if (self.couleur < other.couleur)
            return false
      else
            return true
      // verifie les valeurs
      return self.valeur > other.valeur
};
//--------------------------------------------
// Une fonction creerJeu qui renvoie l’ensemble des 52 cartes possibles sous la forme d’un tableau.
export function creerJeu(): Array<Carte> {
      let jeuxComplet: Array<Carte>
      let carte: Carte
      // une boucle pour qui va de 2 a 14 et qui defini la couleur et la valeur des cartes
      for (let i = 2; i <= 14; i++) {
            carte.couleur = Couleur.coeur
            carte.valeur = i
            jeuxComplet.push(carte)

      }
      //Une fonction creerJeu qui renvoie l’ensemble des 52 cartes possibles sous la forme d’un tableau.
      for (let i = 2; i <= 14; i++) {
            carte.couleur = Couleur.carreau
            carte.valeur = i
            jeuxComplet.push(carte)
      };
       //Une fonction creerJeu qui renvoie l’ensemble des 52 cartes possibles sous la forme d’un tableau.
      for (let i = 2; i <= 14; i++) {
            carte.couleur = Couleur.trefle
            carte.valeur = i
            jeuxComplet.push(carte)
                  ;
      }
       //Une fonction creerJeu qui renvoie l’ensemble des 52 cartes possibles sous la forme d’un tableau.
      for (let i = 2; i <= 14; i++) {
            carte.couleur = Couleur.pique
            carte.valeur = i
            jeuxComplet.push(carte)
      }

      return jeuxComplet

}

//-----------------------------------
//Une fonction tirerCarte qui retire la première carte d’un tableau de cartes, et qui la rend en valeur de retour.
 export function tireCarte (  t_carte: Array <Carte> ): Carte {
      let Carte : Carte // on definit une carte 
      Carte = t_carte[0] // qui prend pour indice 0
      t_carte.splice (0, 1)
      return Carte 
 }
