<?php
// Get the name data from the request
$name = json_decode(file_get_contents('php://input'), true)['name'];
// Define the directory to save the files
$directory = 'added/';
// Create the directory if it doesn't exist
if (!file_exists($directory)) {
    mkdir($directory, 0777, true);
}
// Generate a unique filename
$filename = $directory . uniqid() . '.txt';
// Save the name data to a file
file_put_contents($filename, $name);
?>
