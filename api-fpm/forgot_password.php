<?php
// Izinkan akses dari port 3000 (Next.js)
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Tangani Preflight Request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$conn = new mysqli("localhost", "root", "", "fpm");
$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'] ?? '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // 1. LOGIKA KIRIM OTP
    if (isset($data['request_otp'])) {
        $otp = rand(100000, 999999);
        $stmt = $conn->prepare("SELECT nama FROM anggota WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($row = $result->fetch_assoc()) {
            $mail = new PHPMailer(true);
            try {
                $mail->isSMTP();
                $mail->Host       = 'smtp.gmail.com';
                $mail->SMTPAuth   = true;
                $mail->Username   = 'dafitrah6@gmail.com'; 
                $mail->Password   = 'sjrfpjsxvzinmzbh'; 
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
                $mail->Port       = 587;

                
                $mail->SMTPOptions = array(
                    'ssl' => array(
                        'verify_peer' => false,
                        'verify_peer_name' => false,
                        'allow_self_signed' => true
                    )
                );
                // ------------------------------------

                $mail->setFrom('dafitrah6@gmail.com', 'Portal Negarawan');
                $mail->addAddress($email);
                $mail->isHTML(true);
                $mail->Subject = 'OTP Reset Password - FPN';
                $mail->Body    = "Halo <b>{$row['nama']}</b>, kode OTP Anda: <h2>$otp</h2>";

                if($mail->send()) {
                    $update = $conn->prepare("UPDATE anggota SET otp_code = ? WHERE email = ?");
                    $update->bind_param("ss", $otp, $email);
                    $update->execute();
                    echo json_encode(["success" => true, "message" => "OTP Terkirim"]);
                }
            } catch (Exception $e) {
                echo json_encode(["success" => false, "error" => "SMTP Error: " . $mail->ErrorInfo]);
            }
        } else {
            echo json_encode(["success" => false, "error" => "Email kaga terdaftar!"]);
        }
        exit;
    }

    
    $otp_input = $data['otp'] ?? '';
    $new_pass = $data['new_password'] ?? '';

    $check = $conn->prepare("SELECT id FROM anggota WHERE email = ? AND otp_code = ?");
    $check->bind_param("ss", $email, $otp_input);
    $check->execute();
    
    if ($check->get_result()->num_rows > 0) {
        $hashed = password_hash($new_pass, PASSWORD_DEFAULT);
        // Pastikan kolom di tabel kamu adalah 'id' atau sesuaikan (tadi di gambar 'id_anggota')
        $upd = $conn->prepare("UPDATE anggota SET password = ?, otp_code = NULL WHERE email = ?");
        $upd->bind_param("ss", $hashed, $email);
        $upd->execute();
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => "OTP salah!"]);
    }
}
?>