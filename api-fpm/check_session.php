<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') { exit; }

$conn = new mysqli("localhost", "root", "", "fpm");
if ($conn->connect_error) {
    echo json_encode(["success" => false, "error" => "Database error"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);
$id_anggota = $data['id_anggota'] ?? '';

if (empty($id_anggota)) {
    echo json_encode(["success" => false, "error" => "Session empty"]);
    exit;
}


$stmt = $conn->prepare("SELECT id_anggota, nama, email, divisi, status FROM anggota WHERE id_anggota = ?");
$stmt->bind_param("s", $id_anggota);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    echo json_encode([
        "success" => true,
        "user" => $row
    ]);
} else {
    echo json_encode(["success" => false, "error" => "Invalid Session"]);
}

$stmt->close();
$conn->close();
?>