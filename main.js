const printToDom = (stringToPrint, selectedDiv) => {
    document.getElementById(selectedDiv).innerHTML += stringToPrint;
};
const houseNames = [ 'Slytherin', 'Gryffindor', 'Hufflepuff', 'Ravenclaw'];
let Wizard = document.getElementById('inputName');
let counter = 0;

const expel = () => {
    const expelButtons = document.getElementsByClassName('expel');
    console.log(expelButtons);
    for (let i = 0; i < expelButtons.length; i++) {
      const element = expelButtons[i];
      element.addEventListener("click", (e) => {
        const buttonIClicked = e.target;
        const cardToDelete = buttonIClicked.parentNode.parentNode;
        cardToDelete.remove();
      })
    }
  };
sortFormCard = () => {
   document.getElementById('form').classList.replace('d-none', 'd-block')
};
const houseCardBuilder = (name) => {
    let randomizer = Math.floor((Math.random() * houseNames.length));
    let house = houseNames[randomizer];
    let domString =    
        `<div class="card d-flex row border-dark m-2" style="width: 18rem;">
        <div class="card-body justify-content-center" id="card">
        <h5 class="name text-center">${name}</h5>
        <p class="card-text text-center">${house}</p>
        <button href="#" class="expel btn border-dark btn-light deleteButton">Expel</button>
        </div>
        </div>`;
    counter ++;
    printToDom(domString, 'house-cards');
    expel();
};
document.getElementById('formButton').addEventListener("click", sortFormCard);
document.getElementById('sortButton').addEventListener("click", (e) => {
    e.preventDefault();
    houseCardBuilder(Wizard.value);
});