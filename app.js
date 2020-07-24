var list = document.getElementById("list")

function myFunction() {
    var item = document.getElementById("todo")

    // create li tag with java text node
    var li = document.createElement("li")
    var listtext = document.createTextNode(item.value)
    li.appendChild(listtext)
    list.appendChild(li)

    // create delete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtn.appendChild(delText)
    li.appendChild(delBtn)
    delBtn.setAttribute("class", "text")
    delBtn.setAttribute("onclick", "deleteItem(this)")


    // create Edit Buttons
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
    editBtn.setAttribute("class", "text")
    editBtn.setAttribute("onclick", "editItem(this)")



    item.value = ""
    console.log(li)
}

// for delete item

function deleteItem(e) {
    e.parentNode.remove()
}

// for delete All


function deleteAll() {
    list.innerHTML = ""
}

// for Edit

function editItem(ee) {
    var editvalue = prompt("enter edit value", ee.parentNode.firstChild.nodeValue)

    ee.parentNode.firstChild.nodeValue = editvalue
}