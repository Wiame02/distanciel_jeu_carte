// enregistrement pour enumeration couleur qui définit les différentes couleurs 
//d’un jeu de carte (pique, carreau, trèfle et cœur),
type Couleur = {
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
export function creerCarte( couleur: Couleur , valeur : number ): Carte {
      let carte : Carte
      carte.couleur = couleur 
      carte.valeur = valeur
  
      return carte
};
//--------------------------------------
//Une fonction afficherCarte qui affiche une carte 
export function AfficheCarte(C: Carte)  {
console.log ("valeur de la carte :"+ C.valeur)
console.log ("couleur de la carte :"+ C.couleur)

};

//------------------------------------------------
// une fonction qui compare entre deux cartes
export function compareCarte(C: Carte, other: Carte): boolean {
      // varifie les couleurs 
      if (C.couleur < other.couleur)
            return false
      else
            return true
      // verifie les valeurs
      return C.valeur > other.valeur
};
