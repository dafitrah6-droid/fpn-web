<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS"); 
header("Access-Control-Allow-Headers: Content-Type, Authorization"); 
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$conn = new mysqli("localhost", "root", "", "fpm");

if ($conn->connect_error) {
    die(json_encode(["error" => "Koneksi database gagal"]));
}

$json = file_get_contents("php://input");
$data = json_decode($json, true);


if (empty($data['nama']) || empty($data['email'])) {
    die(json_encode(["error" => "Nama dan Email wajib diisi"]));
}

$nama = $data['nama'];
$email = $data['email'];
$divisi = $data['divisi'] ?? 'Umum';


$password = password_hash($email, PASSWORD_BCRYPT); 
$id_anggota = "FPN-" . date("Y") . "-" . rand(100, 999); 

$stmt = $conn->prepare("INSERT INTO anggota (nama, email, divisi, id_anggota, password, status) VALUES (?, ?, ?, ?, ?, 'Calon Anggota')");
$stmt->bind_param("sssss", $nama, $email, $divisi, $id_anggota, $password);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Pendaftaran berhasil!", 
        "id_anggota" => $id_anggota,
        "status" => "Calon Anggota"
    ]);
} else {
    echo json_encode(["error" => "Email sudah terdaftar atau gagal menyimpan data"]);
}

$stmt->close();
$conn->close();
?>