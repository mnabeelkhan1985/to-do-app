function addtodoList(){
    var todoItems = document.getElementById("todoList")
    var todoValue = todoItems.value
    if(todoValue == ""){
        alert("Please Enter any task");
        return 0
    }
    else if (!todoValue.trim().length) {
        alert('Invalid Task');
        todoItems.value = ""
        return 0
    }
    var list =document.getElementById("finalList")
     
    var li = document.createElement("li")
    var inp = document.createElement("input")
    var edBtn = document.createElement ("button")
    var delBtn = document.createElement ("button")
    
    edBtn.innerHTML = "EDIT"
    delBtn.innerHTML = "DELETE"

    li.setAttribute  ("id", "li")
    li.setAttribute  ("class", "listitem")

    inp.setAttribute ("id", "list-Input")
    inp.setAttribute ("class", "list-input listinput")
    inp.setAttribute ("type", "text")
    inp.setAttribute ("disabled", "disabled")

    edBtn.setAttribute("id", "edBtn")
    edBtn.setAttribute("class", "btn btn-warning")
    edBtn.setAttribute("onclick", "up(this)")

    delBtn.setAttribute("id", "delBtn")
    delBtn.setAttribute("class", "btn btn-danger")
    delBtn.setAttribute("onclick", "del(this.parentElement)")

    list.appendChild(li)
    li.appendChild(inp)
    li.appendChild(edBtn)
    li.appendChild(delBtn)


    inp.value = todoValue;
    todoItems.value = ""

}

function del(dlt){
    dlt.remove()
}

function dltAll(){
    mainList.innerHTML = ""
}

function up(btn1) {

    btn1.innerHTML = "UPDATE";
    btn1.previousSibling.disabled = false
    btn1.setAttribute("onclick", "innerupdate(this)")
}
function innerupdate(btn2) {
    btn2.innerHTML = "EDIT"
    btn2.previousSibling.disabled = true
    btn2.setAttribute("onclick", "up(this)");
}