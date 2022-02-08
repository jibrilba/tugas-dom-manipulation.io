let divHeader = document.createElement("div");
divHeader.setAttribute("class", "header");

let divH2 = document.createElement("h2");
divH2.setAttribute("style", "margin:5px");
divH2.append(document.createTextNode("To Do List"));
divHeader.appendChild(divH2);

let divInput = document.createElement("input");
divInput.setAttribute("type", "text");
divInput.setAttribute("id", "myInput");
divInput.setAttribute("placeHolder", "Title...");
divHeader.appendChild(divInput);

let divSpan = document.createElement("span");
divSpan.setAttribute("class", "addBtn");
divSpan.setAttribute("onclick", "newElement()");
divSpan.append(document.createTextNode("Add"));
divHeader.appendChild(divSpan);

document.body.appendChild(divHeader);

let divOutput = document.createElement("ul");
divOutput.setAttribute("id", "myUL");

let li = document.createElement('li');
li.textContent = 'To Do List Satu';
divOutput.appendChild(li);

li = document.createElement('li');
li.textContent = 'To Do List Dua';

divOutput.appendChild(li);

document.body.append(divOutput);

divButton = document.createElement("button");
divButton.setAttribute("type", "button");
divButton.setAttribute("id", "clear-list");
divButton.setAttribute("onclick", "removeAll()");
divButton.append(document.createTextNode("Clear Items"));

document.body.append(divButton);



var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function removeAll() {
    var lst = document.getElementsByTagName("ul");
    lst[0].innerHTML = "";
}