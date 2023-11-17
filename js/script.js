const input = document.getElementById('items');
const numberOfElement = document.getElementById('number_of_items')

async function items() {
  const response = await fetch("https://raw.githubusercontent.com/grpou/dt/main/data/items.json");
  return response.json();
}

items().then(data => {
  let item_list = Object.keys(data)
  numberOfElement.innerText = String(item_list.length) + ' items'
})

const correspondances_runes_carac = [
  // ['caracteristique', ['Rune Ba', poids, jet], ['Rune Pa', poids], ['Rune Ra', poids]],
  ['Agilité', ['Rune Age', 1, 1], ['Rune Pa Age', 3], ['Rune Ra Age', 10]],
  ['Intelligence', ['Rune Ine', 1, 1], ['Rune Pa Ine', 3], ['Rune Ra Ine', 10]],
  ['Vitalité', ['Rune Vi',1, 5], ['Rune Pa Vi', 3], ['Rune Ra Vi', 10]],
  ['Chance', ['Rune Cha', 1, 1], ['Rune Pa Cha', 3], ['Rune Ra Cha', 10]],
  ['Sagesse', ['Rune Sa', 1, 3], ['Rune Pa Sa', 9], ['Rune Ra Sa', 30]],
  ['Force', ['Rune Fo', 1, 1], ['Rune Pa Fo', 3], ['Rune Ra Fo', 10]],
  ['% Rés. Neutre', ['Rune Ré Per Neutre', 6, 1]],
  ['% Rés. Terre', ['Rune Ré Per Terre', 6, 1]],
  ['% Rés. Eau', ['Rune Ré Per Eau', 6, 1]],
  ['% Rés. Feu', ['Rune Ré Per Feu', 6, 1]],
  ['% Rés. Air', ['Rune Ré Per Air', 6, 1]],
  ['Rés. Neutre', ['Rune Ré Neutre', 2, 1]],
  ['Rés. Terre', ['Rune Ré Terre', 2, 1]],
  ['Rés. Eau', ['Rune Ré Eau', 2, 1]],
  ['Rés. Feu', ['Rune Ré Feu', 2, 1]],
  ['Rés. Air', ['Rune Ré Air', 2, 1]],
  ['Puissance', ['Rune Pui', 2, 1], ['Rune Pa Pui', 6], ['Rune Ra Pui', 20]],
  ['Prospection', ['Rune Prospe', 3, 1], ['Rune Pa Prospe', 9]],
  ['Initiative', ['Rune Ini', 1, 10], ['Rune Pa Ini', 3], ['Rune Ra Ini', 10]],
  ['PO', ['Rune Po', 51, 1]],
  ['PA', ['Rune Ga Pa', 100, 1]],
  ['PM', ['Rune Ga Pme', 90, 1]],
  ['Invocation', ['Rune Invo', 30, 1]],
  ['Soin', ['Rune So', 10, 1], ['Rune Pa So', 30]],
  ['Critique', ['Rune Cri', 10, 1]],
  ['Tacle', ['Rune Tac', 4, 1], ['Rune Pa Tac', 12]],
  ['Fuite', ['Rune Fui', 4, 1], ['Rune Pa Fui', 12]],
  ['Dommages', ['Rune Do', 20, 1]],
  ['Dommages Terre', ['Rune Do Terre', 5, 1], ['Rune Pa Do Terre', 15]],
  ['Dommages Neutre', ['Rune Do Neutre', 5, 1], ['Rune Pa Do Neutre', 15]],
  ['Dommages Feu', ['Rune Do Feu', 5, 1], ['Rune Pa Do Feu', 15]],
  ['Dommages Eau', ['Rune Do Eau', 5, 1], ['Rune Pa Do Eau', 15]],
  ['Dommages Air', ['Rune Do Air', 5, 1], ['Rune Pa Do Air', 15]],
  ['Pods', ['Rune Pod', 2.5, 10], ['Rune Pa Pod', 7.5], ['Rune Ra Pod', 25]],
  ['Dommages Poussée', ['Rune Do Pou', 5, 1], ['Rune Pa Do Pou', 15]],
  ['Rés. Poussée', ['Rune Ré Pou', 2, 1], ['Rune Pa Ré Pou', 6]],
  ['Rés. Critique', ['Rune Ré Cri', 2, 1], ['Rune Pa Ré Cri', 6]],
  ['Dommages Critique', ['Rune Do Cri', 5, 1], ['Rune Pa Do Cri', 15]],
  ['Retrait PA', ['Rune Ret Pa', 7, 1], ['Rune Pa Ret Pa', 21]],
  ['Retrait PM', ['Rune Ret Pme', 7, 1], ['Rune Pa Ret Pme', 21]],
  ['Esquive PA', ['Rune Ré Pa', 7, 1], ['Rune Pa Ré Pa', 21]],
  ['Esquive PM', ['Rune Ré Pme', 7, 1], ['Rune Pa Ré Pme', 21]],
  ['Arme de chasse', ['Rune de chasse', 2, 1]]
]

let id_bontons_runes = []

for (let i = 0; i < correspondances_runes_carac.length; i++) {
  let nom_rune_liste = correspondances_runes_carac[i][1][0].split(' ')
  let nom_rune = ''
  for (let j = 1; j < nom_rune_liste.length; j++) {
    nom_rune += correspondances_runes_carac[i][1][0].split(' ')[j].toLowerCase().replace('é', 'e')
  }
  id_bontons_runes.push(nom_rune)
}

let filtre_runes = []

const types_items = ["Amulette", "Anneau", "Bottes", "Bouclier", "Cape", "Ceinture", "Chapeau", "Dofus", "Trophée", "Arc", "Baguette", "Épée", "Faux", "Hache", "Dagues", "Bâton", "Marteau", "Pelle", "Pioche"]
let filtre_type = []

for (let i = 0; i < id_bontons_runes.length; i++) {
  let element = document.getElementById(id_bontons_runes[i])
  element.addEventListener("click", () => {
    if (filtre_runes.indexOf(id_bontons_runes[i])!==-1) {
      filtre_runes.splice(filtre_runes.indexOf(id_bontons_runes[i]), 1)
      // deactivate element
      element.style = ''
    } else {
      filtre_runes.push(id_bontons_runes[i])
      // activate element
      element.style = 'color:blue;'
    }
  });
}