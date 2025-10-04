var para = document.getElementById("para")


var inp = document.getElementById("inp")

function add() {

  var ul = document.getElementById("output")
  var li = document.createElement("li");
  var counter = ul.childElementCount;


  li.innerHTML = "<div class='outputLi'>" + inp.value + "<button onclick='deleteTodo(" + counter + ")'>Delete</button></div>"

  li.setAttribute("id", counter)

  ul.appendChild(li)

  inp.value = ""



}


function deleteTodo(id) {
  var li = document.getElementById(id)
  li.remove();


}
