<?php
// --- 
error_reporting(0); 
ob_start();         
// ------------------------------------------------

<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");


if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}
?>

$conn = new mysqli("localhost", "root", "", "fpm");

if ($conn->connect_error) {
    
    ob_clean(); 
    echo json_encode(["success" => false, "error" => "Koneksi database gagal: " . $conn->connect_error]);
    exit;
}

// Ambil input JSON
$json = file_get_contents("php://input");
$data = json_decode($json, true);

$email    = $data['email'] ?? '';
$password = $data['password'] ?? '';

// 1. Validasi input kosong
if (empty($email) || empty($password)) {
    ob_clean();
    echo json_encode(["success" => false, "error" => "Email dan Password wajib diisi"]);
    exit;
}

// 2. Gunakan Prepared Statement
$stmt = $conn->prepare("SELECT * FROM anggota WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    // 3. Verifikasi Password
    if (password_verify($password, $row['password'])) {
        
        // --- LOGIKA TAMBAHAN UNTUK HASH AKSES ---
        if (empty($row['id_anggota_hash'])) {
            $generatedHash = hash('sha256', $row['id_anggota'] . time());
            $update = $conn->prepare("UPDATE anggota SET id_anggota_hash = ? WHERE id_anggota = ?");
            $update->bind_param("ss", $generatedHash, $row['id_anggota']);
            $update->execute();
            $row['id_anggota_hash'] = $generatedHash;
        }
        // ----------------------------------------

        unset($row['password']); 
        
        ob_clean(); // Memastikan hanya JSON di bawah ini yang terkirim
        echo json_encode([
            "success" => true, 
            "message" => "Login Berhasil", 
            "user" => [
                "id_anggota" => $row['id_anggota'],
                "nama"       => $row['nama'],
                "email"      => $row['email'],
                "divisi"     => $row['divisi'],
                "status"     => $row['status'],
                "hash"       => $row['id_anggota_hash']
            ]
        ]);
    } else {
        ob_clean();
        echo json_encode(["success" => false, "error" => "Password yang Anda masukkan salah"]);
    }
} else {
    ob_clean();
    echo json_encode(["success" => false, "error" => "Email tidak ditemukan atau belum terdaftar"]);
}

$stmt->close();
$conn->close();
?>