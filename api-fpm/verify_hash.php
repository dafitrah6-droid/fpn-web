<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "fpm");

if ($conn->connect_error) {
    die(json_encode(["error" => "Koneksi database gagal"]));
}

$hash_dari_qr = $_GET['hash'] ?? '';

if (empty($hash_dari_qr)) {
    die(json_encode(["error" => "Hash tidak ditemukan"]));
}


$result = $conn->query("SELECT * FROM anggota");

$found = false;
$memberData = null;
$salt = "FPN_BANTEN_2026"; 

while($row = $result->fetch_assoc()) {
    
    $raw_id = $row['id_anggota'] . $row['email'] . $salt;
    $check_hash = hash('sha256', $raw_id);

    
    if ($check_hash === $hash_dari_qr) {
        $found = true;
        $memberData = [
            "nama" => $row['nama'],
            "divisi" => $row['divisi'],
            "id_anggota" => $row['id_anggota'],
            "status" => "Verified Member 2026"
        ];
        break;
    }
}

if ($found) {
    echo json_encode($memberData);
} else {
    
    http_response_code(404);
    echo json_encode(["error" => "Sertifikat Tidak Valid atau Data Palsu"]);
}

$conn->close();
?>