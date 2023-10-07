var listDOM = document.querySelector("#list");
var liDOM = document.querySelectorAll("#list>li");

var i;
for (i=0; i<liDOM.length; i++ ){
    liDOM[i].id = `li-${i}`;
    liDOM[i].addEventListener('click', onClick);
    closeButtonOfListItems(liDOM[i]);//Adds a close button to the right of the default li items.
}
var index = i;


//Adds a new list element.
function newElement() {
    var inputDOM = document.querySelector("#task");

    //Delete whitespaces in inputDOM.value and 
    //get the length of the inputDOM.value without its whitespaces. 
    //İf inputDOM.value contains nothing (no input has been entered) 
    //or contains only whitespaces, 
    //then it will return false. 
    //In other situations, it will return true.
    if (inputDOM.value.replace(/\s/g, '').length) {
        var liDOM = document.createElement('li');
        liDOM.innerHTML = inputDOM.value;
        liDOM.id = `li-${index}`;
        index++;

        liDOM.addEventListener('click', onClick);

        listDOM.append(liDOM);
        closeButtonOfListItems(liDOM);//Adds a close button to the right of the li element
        

        var successToast = document.querySelector("#liveToast.success");
        successToast.classList.replace("hide", "show");
        
        setTimeout(function(){ successToast.classList.replace("show", "hide"); }, 3000);
    }
    else {
        var errorToast = document.querySelector("#liveToast.error");
        errorToast.classList.replace("hide", "show");
        setTimeout(function(){ errorToast.classList.replace("show", "hide"); }, 3000);
    }
}

function closeButtonOfListItems (li) { 
    var iconDOM = document.createElement("i");
    iconDOM.classList = "fa-solid fa-xmark";
    iconDOM.style = "float: right; padding: 8px 10px;";
    iconDOM.addEventListener('click', onClick);
    iconDOM.addEventListener('mouseover', mouseOver);
    iconDOM.addEventListener('mouseout', mouseOut);

    li.appendChild(iconDOM);
}

function onClick() {
    if ( this.id.startsWith("li-") ){//Returns true, if the clicked element is the li element
        if (this.classList.length == 0) {
            this.classList += " checked";  //The .centered class was available in the css file.
        }
        else {
            this.classList.remove("checked");
        }
    }
    else{//When the icon element is clicked, this block will run.
        this.parentNode.remove();
    }
}

function mouseOver() {
    this.style = "float: right; padding: 8px 10px; background: #f78501;";
}

function mouseOut() {
    this.style = "float: right; padding: 8px 10px;";
}











