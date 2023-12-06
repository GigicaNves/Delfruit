<?php
$dbHost = "localhost";
$dbUsername = "id21625051_gigica_nves";
$dbPassword = "Gi182463#";
$dbName = "id21625051_delfruit";

try{
    $comn = new POO("mysql:host=$dbHost; dbname=" . $dbname, $dbUsername, $dbPassword);
    // echo "conectado com êxito!";
}

catch(PDOExeption $err){
    die("Erro: a conexão com banco de dados não teve êxito. Erro: " . $err->getMessage());
}
?>