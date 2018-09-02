//an arr to get the index of a content that we want to delete
var contentIndex = [];

function updateStatus() {
    var statusListElements = document.getElementById("main-container");
    console.log(statusListElements);
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
        var hasConfirmation = confirm("Are you sure you want to remove this post?");

        if (hasConfirmation) {
            var indexToRemove = contentIndex.indexOf(deleteContentButton.parentElement.parentElement);
            var contentToRemove = contentIndex[indexToRemove];
            //remove the element from the html
            statusListElements.removeChild(contentToRemove);
            //remove the element from the arr index
            contentIndex.splice(indexToRemove, 1);
            alert("Your post has been removed");
        }
    });

    divElement.appendChild(deleteContentButton);

    statusContainer.appendChild(divElement);

    //generate date;
    var dateElement = document.createElement("div");

    dateElement.setAttribute("class", "date");

    dateElement.appendChild(document.createTextNode(new Date()));

    statusContainer.appendChild(dateElement);

    //assigning index to the elements
    contentIndex.push(statusContainer);

    statusListElements.appendChild(statusContainer);
}


var shareButton = document.getElementById("share-button");

shareButton.addEventListener("click", function() {
    updateStatus();
    document.getElementById("input").value = '';
    alert("Your post has been shared!");
});

