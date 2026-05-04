<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");


$conn = new mysqli("localhost", "root", "", "fpm");

if ($conn->connect_error) {
    die(json_encode(["error" => "Koneksi ke database gagal: " . $conn->connect_error]));
}


$email = $_GET['email'] ?? '';

if (empty($email)) {
    die(json_encode(["error" => "Email parameter is required"]));
}


$stmt = $conn->prepare("SELECT nama, email, divisi, id_anggota, status FROM anggota WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    

    $salt = "FPN_BANTEN_2026"; 
    $raw_id = $row['id_anggota'] . $row['email'] . $salt;
    $row['id_anggota_hash'] = hash('sha256', $raw_id);
    
    echo json_encode($row);
} else {
    echo json_encode(["error" => "Data anggota dengan email tersebut tidak ditemukan"]);
}

$stmt->close();
$conn->close();
?>