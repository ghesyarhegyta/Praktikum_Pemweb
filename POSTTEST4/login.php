<?php
session_start();

if (isset($_SESSION['username'])) {
    header('Location: index.php');
    exit;
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    if ($username === 'ghesya' && $password === '123') {
        $_SESSION['username'] = $username;
        header('Location: index.php');
        exit;
    } else {
        $error = 'Username atau password salah!';
    }
}
?>

<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Beauty Ingredients</title>
    <link rel="stylesheet" href="style.css">
    <style>
    body {
        font-family: Poppins, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: linear-gradient(135deg, #ffb6c1, #ffc0cb, #ffe4e1);
    }

    .login-box {
        background: white;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(255, 105, 180, 0.25);
        width: 320px;
        border-top: 5px solid #ff69b4;
    }

    .login-box h2 {
        text-align: center;
        margin-bottom: 20px;
        color: #ff1493;
    }

    .login-box input {
        width: 100%;
        padding: 10px;
        margin: 6px 0;
        border: 1px solid #f8a1c4;
        border-radius: 6px;
        outline: none;
        transition: 0.3s;
    }

    .login-box input:focus {
        border-color: #ff69b4;
        box-shadow: 0 0 5px rgba(255, 105, 180, 0.4);
    }

    .login-box button {
        width: 100%;
        padding: 10px;
        background: linear-gradient(135deg, #ff69b4, #ff85a1);
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        transition: 0.3s;
    }

    .login-box button:hover {
        background: linear-gradient(135deg, #ff1493, #ff69b4);
        transform: translateY(-2px);
    }

    .error {
        color: #d63384;
        font-size: 0.9em;
        text-align: center;
        margin-top: 10px;
    }
    </style>
</head>

<body>
    <div class="login-box">
        <h2>Login</h2>
        <?php if ($error): ?>
        <p class="error"><?= htmlspecialchars($error) ?></p>
        <?php endif; ?>
        <form method="POST">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Masuk</button>
        </form>
    </div>
</body>

</html>