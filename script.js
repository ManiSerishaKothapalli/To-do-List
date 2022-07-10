let addwork = document.getElementById("work");
let changecard = document.getElementById("cardTitle");
let addbtn = document.getElementById("btnAdd");
let updatebtn = document.getElementById("btnUpdate");
let ul = document.createElement("ul");
let cardSelected = document.getElementsByName("cardSelected");

let data = {
  selectedAction: "",
  selectedCard: "card1",
};

function selectCard(card) {
  // code goes here to select a card
  let div = document.querySelector(`.${data.selectedCard}`);
  console.log(div);
  data.selectedCard = card;
  return card;
}

function addWork() {
  // code goes here for add work mode
  if (addwork.value) {
    let div = document.querySelector(`.${data.selectedCard}`);

    div.appendChild(ul);
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = addwork.value;
    document.getElementById("work").value = "";
  }
}

function update() {
  // code goes here to update card title
  if (changecard.value) {
    let div = document.querySelector(`.${data.selectedCard}`);
    div.querySelector("h2").innerHTML = changecard.value;
    document.getElementById("cardTitle").value = "";
  }
}

function clearWorkList() {
  //code goes here to clear workList
  let div = document.querySelector(`.${data.selectedCard}`);
  div.removeChild(div.querySelector("ul"));
}

window.onload = () => {
  changeMode("add");
};

function changeMode(value) {
  // code goes here switch between add work, update card title and delete work

  switch (value) {
    case "add":
      console.log(updatebtn);
      addwork.style.display = "inline";
      changecard.style.display = "none";
      updatebtn.style.display = "none";
      addbtn.style.display = "inline";
      break;
    case "edit":
      addwork.style.display = "none";
      addbtn.style.display = "none";
      changecard.style.display = "inline";
      updatebtn.style.display = "inline";

      break;
    case "delete":
      addwork.style.display = "none";
      changecard.style.display = "none";
      updatebtn.style.display = "none";
      addbtn.style.display = "none";
      break;
  }
}
