<?php
// Database configuration
$host = 'localhost';            // Database server (often 'localhost')
$db_name = 'your_database_name'; // Your database name
$username = 'your_db_username';  // Your database username
$password = 'your_db_password';  // Your database password

try {
    // Create a PDO instance (connect to the database)
    $conn = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);

    // Set the PDO error mode to exception (for better error handling)
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Uncomment below line to confirm connection
    // echo "Connected successfully"; 

} catch (PDOException $e) {
    // Display error message if connection fails
    echo "Connection failed: " . $e->getMessage();
}
?>

<?php
// Include the database connection file
require_once 'db_connect.php';

// Example query: Fetching all users from the 'users' table
try {
    $stmt = $conn->prepare("SELECT * FROM users");
    $stmt->execute();

    // Fetch all the results
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Output the users array (just for testing)
    echo "<pre>";
    print_r($users);
    echo "</pre>";

} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>
