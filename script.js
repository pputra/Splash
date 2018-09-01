function updateStatus() {
    var journalListElements = document.getElementById("journal-list");

    //create a container for the status update
    var statusContainer = document.createElement("div");

    statusContainer.setAttribute("class", "status-container");
    
    //generate the text field
    var fieldContent = document.getElementById("input").value;

    var divElement = document.createElement("div");

    divElement.setAttribute("class", "journal");

    divElement.appendChild(document.createTextNode(fieldContent));

    statusContainer.appendChild(divElement);

    //generate date;

    var dateElement = document.createElement("div");

    dateElement.setAttribute("class", "date");

    dateElement.appendChild(document.createTextNode(new Date()));

    statusContainer.appendChild(dateElement);

    journalListElements.appendChild(statusContainer);
}


var shareButton = document.getElementById("share-button");

shareButton.addEventListener("click", function() {
    updateStatus();
    document.getElementById("input").value = '';
    alert("your post has been shared!");
});

