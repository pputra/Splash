function updateStatus() {
    var journalListElements = document.getElementById("journal-list");
    
    //generate date;

    var dateElement = document.createElement("div");

    dateElement.setAttribute("class", "date");

    dateElement.appendChild(document.createTextNode(new Date()));

    journalListElements.appendChild(dateElement);

    //generate the text field
    var fieldContent = document.getElementById("input").value;

    

    var divElement = document.createElement("div");

    divElement.setAttribute("class", "journal");

    divElement.appendChild(document.createTextNode(fieldContent));

    journalListElements.appendChild(divElement);

}

function getCurrDate() {
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
return today;
}



var shareButton = document.getElementById("share-button");

shareButton.addEventListener("click", function() {
    updateStatus();
    document.getElementById("input").value = '';
    alert("your post has been shared!");
});

