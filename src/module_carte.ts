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
      carte.couleur = couleur
      carte.valeur = valeur

      return carte
};
//--------------------------------------
//Une fonction afficherCarte qui affiche une carte 
export function AfficheCarte(C: Carte) {
      console.log("valeur de la carte :" + C.valeur)
      console.log("couleur de la carte :" + C.couleur)

};

//------------------------------------------------
// une fonction qui compare entre deux cartes
export function compareCarte(self: Carte, other: Carte): boolean {
      // varifie les couleurs 
      if (self.couleur < other.couleur)
            return false
      else
            return true
      // verifie les valeurs
      return self.valeur > other.valeur
};
//--------------------------------------------
export function creerJeu(): Array<Carte> {
      let jeuxComplet: Array<Carte>
      let carte: Carte

      for (let i = 2; i <= 14; i++) {
            carte.couleur = Couleur.coeur
            carte.valeur = i
            jeuxComplet.push(carte)

      };
      for (let i = 2; i <= 14; i++) {
            carte.couleur = Couleur.carreau
            carte.valeur = i
            jeuxComplet.push(carte)
      };
      for (let i = 2; i <= 14; i++) {
            carte.couleur = Couleur.trefle
            carte.valeur = i
            jeuxComplet.push(carte)
                  ;
      }
      for (let i = 2; i <= 14; i++) {
            carte.couleur = Couleur.pique
            carte.valeur = i
            jeuxComplet.push(carte)
      }

      return jeuxComplet

}

//-----------------------------------
 export function tireCarte (  t_carte: Array <Carte> ): Carte {
      let Carte : Carte 
      Carte = t_carte[0] 
      t_carte.splice (0, 1)
      return Carte 
 }
