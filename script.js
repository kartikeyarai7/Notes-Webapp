let sub = document.querySelector("#exampleSubject");
let notes = document.querySelector("#exampleNotes");
let add = document.querySelector("#addNotes");
let clear = document.querySelector("#clearNotes");
let notesCollection = document.querySelector("#notesCollection");

add.addEventListener("click", e => {
  e.preventDefault();
  console.log("This is clicked");
  createElements();
  //   sub.value = "";
  //   notes.value = "";
  console.log(notesCollection);
});

clear.addEventListener("click", e => {
  e.preventDefault();
  sub.value = "";
  notes.value = "";
});

function delete_row(a) {
  notesCollection.removeChild(a);
}

function createElements() {
  let d = document.createElement("div");
  let h = document.createElement("h4");
  let p = document.createElement("p");
  //   let b = document.createElement("button");

  d.classList.add("bg-light", "p-3", "m-3", "col-3");

  h.classList.add("text-center");

  p.classList.add("overflow-auto");

  //   b.classList.add("btn", "btn-danger", "btn-block", "delt");

  h.appendChild(document.createTextNode(sub.value));
  p.appendChild(document.createTextNode(notes.value));
  //   b.appendChild(document.createTextNode("Delete"));
  d.appendChild(h);
  d.appendChild(p);
  //   d.appendChild(b);
  notesCollection.appendChild(d);
}
