<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("127.0.0.1", "root", "", "fpm");

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}

$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    $nama     = $conn->real_escape_string($data['nama']);
    $email    = $conn->real_escape_string($data['email']);
    $wa       = $conn->real_escape_string($data['wa']);
    $instansi = $conn->real_escape_string($data['instansi']);
    $divisi   = $conn->real_escape_string($data['divisi']);
    $provinsi = $conn->real_escape_string($data['provinsi']);
    $kota     = $conn->real_escape_string($data['kota']);
    $hash     = md5($email . time());
    $password = password_hash($data['email'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO anggota (nama, email, wa, instansi, divisi, provinsi, kota, id_anggota_hash, password) 
            VALUES ('$nama', '$email', '$wa', '$instansi', '$divisi', '$provinsi', '$kota', '$hash', '$password')";

    if ($conn->query($sql)) {
        echo json_encode([
            "success" => true, 
            "id_anggota" => $conn->insert_id,
            "user" => ["id_anggota_hash" => $hash]
        ]);
    } else {
        echo json_encode(["error" => $conn->error]);
    }
} else {
    echo json_encode(["error" => "No data provided"]);
}
?>