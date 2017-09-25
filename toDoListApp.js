var input = prompt("What would you like to do?");
var toDoList = ["Buy new turtle"];

function listItems() {
  console.log("***************"); // makes stars for dividing list items
  toDoList.forEach(function(toDoList, i) { //separates arrays itteratively
  console.log(i + ": " + toDoList); //formatting
  console.log("***************"); //moar stars
  });
}

function newListItem(str) {
  var newToDo = prompt("Add something to your to-do list");
  toDoList.push(newToDo); //adds item to end of array
  console.log("New list item added!");
}

function deleteListItem(n) {
  toDoList.splice(n, 1); //deletes single specified item
  console.log("Item deleted!");
}

while (input !== "quit") {
  if (input === "list") {
    listItems();
  } else if (input === "new") {
    newListItem();
  } else if (input === "delete") {
    deleteListItem();
  }
  var input = prompt("What would you like to do?");
}
console.log("OKAY! YOU QUIT THE APP!");
