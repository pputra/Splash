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

    //generate the delete content button

    var deleteContentButton = document.createElement("button");

    deleteContentButton.setAttribute("class", "delete-content");

    deleteContentButton.appendChild(document.createTextNode("X"));

    deleteContentButton.addEventListener("click", function() {

        //delete the date element which is its next sibling
        deleteContentButton.parentElement.parentElement.removeChild(deleteContentButton.parentElement.nextElementSibling);
        
        //delete the content 
        deleteContentButton.parentElement.parentElement.removeChild(deleteContentButton.parentElement);
    });

    divElement.appendChild(deleteContentButton);

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

