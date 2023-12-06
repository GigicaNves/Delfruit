<?php

$dbHost = "localhost";
$dbUsername = "id21625051_gigica_nves";
$dbPassword = "Gi182463#";
$dbName = "id21625051_delfruit";

try {
    $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUsername, $dbPassword);
    // Configurando o PDO para lançar exceções em caso de erros

} catch(PDOException $err) {
    die("Erro: A conexão com o banco de dados não teve êxito. Erro: " . $err->getMessage());
}

?>