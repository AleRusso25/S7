let namePetField = document.getElementById("namePet");
let namePropField = document.getElementById("nameProp");
let speciesField = document.getElementById("species");
let razzaField = document.getElementById("razza");

let petList = document.getElementById("petList");
let addButton = document.getElementById("add");

let pets = [];

class Pet {
  constructor(namePet, nameProp, species, razza) {
    this.namePet = namePet;
    this.nameProp = nameProp;
    this.species = species;
    this.razza = razza;
  }

  checkSameProp(newPet) {
    if (this.nameProp === newPet.nameProp) {
    return  console.log("questo proprietario ha piu di un animale");
    } else {
      return false;
    }
  }
}

const renderList = function () {
  petList.innerHTML = "";
  pets.forEach((pet) => {
    const newLi = document.createElement("li");
    newLi.innerText = "Nome: " + pet.namePet + ", proprietario: " + pet.nameProp + ", specie: " + pet.species + ", razza: " + pet.razza;
    petList.appendChild(newLi);
  });
};

addButton.onclick = function () {
  let newPet = new Pet(namePetField.value, namePropField.value, speciesField.value, razzaField.value);
  pets.push(newPet);
  renderList();
  namePetField.value = "";
  namePropField.value = "";
  speciesField.value = "";
  razzaField.value = "";
};
