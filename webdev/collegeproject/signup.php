<?php
// Database connection details (replace with your credentials)
$host = "localhost";
$username = "root";
$password = "odedara";
$database = "student_registration";

// Create a connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to insert a new user into the database
function createUser($first_name, $last_name, $email, $password) {
    global $conn;
    
    // Hash the password for security
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    
    // Prepare the SQL statement
    $stmt = $conn->prepare("INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $first_name, $last_name, $email, $hashed_password);
    
    // Execute the statement
    if ($stmt->execute()) {
        return true; // Registration successful
    } else {
        return false; // Registration failed
    }
    
    $stmt->close();
}

// Close the database connection
$conn->close();
?>
