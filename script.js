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


var shareButton = document.getElementById("share-button");

shareButton.addEventListener("click", function() {
    updateStatus();
    document.getElementById("input").value = '';
    alert("your post has been shared!");
});

