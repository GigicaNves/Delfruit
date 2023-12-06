<?php
include_once('conexao.php');

$primeiroNome = $_POST['primeiroNome'];
$segundoNome = $_POST['segundoNome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];

try {
    $stmt = $pdo->prepare("INSERT INTO `mensagem` (`id_usuario`, `nome`, `sobrenome`, `email`, `mensagem`) VALUES (NULL, :primeiroNome, :segundoNome, :email, :mensagem);");

    $stmt->bindParam(':primeiroNome', $primeiroNome);
    $stmt->bindParam(':segundoNome', $segundoNome);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':mensagem', $mensagem);

    $stmt->execute();

} catch (PDOException $e) {
    echo "Erro no catch: " . $e->getMessage();
}

?>