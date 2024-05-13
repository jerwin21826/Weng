function addNewBlock() {
    // Create a new input element for the user to input the name
    var nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Enter Name');
    
    // Create a save button
    var saveButton = document.createElement('button');
    saveButton.innerText = 'Save';
    saveButton.onclick = function() {
        // Create a new block with the entered name when the save button is clicked
        var name = nameInput.value;
        createBlock(name);
        // Send the name to the server to save
        saveToServer(name);
    };

    // Replace the button with the input and save button
    var addButton = document.getElementById('addMoreBlock');
    addButton.innerHTML = ''; // Clear existing content
    addButton.appendChild(nameInput);
    addButton.appendChild(saveButton);
}

function createBlock(name) {
    // Create a new block with the entered name
    var newBlock = document.createElement('div');
    newBlock.classList.add('block');
    newBlock.innerText = name;
    
    // Append the new block to the document body
    document.body.appendChild(newBlock);
}

function saveToServer(name) {
    // Create an XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    // Configure the request
    xhr.open('POST', 'save.php'); // Replace 'save.php' with the path to your server-side script
    // Set the Content-Type header for JSON data
    xhr.setRequestHeader('Content-Type', 'application/json');
    // Define the data to send to the server
    var data = JSON.stringify({ name: name });
    // Send the request
    xhr.send(data);
}
