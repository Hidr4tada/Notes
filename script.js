const noteInput = document.getElementById("noteInput");
const addNoteButton = document.getElementById("addNoteButton");
const notesList = document.getElementById("notesList");

addNoteButton.addEventListener("click", function(event) {
  event.preventDefault();
  const noteText = noteInput.value;
  if (noteText !== "") {
    const noteElement = document.createElement("li");
    noteElement.textContent = noteText;
    notesList.appendChild(noteElement);
    noteInput.value = "";
  }
});
