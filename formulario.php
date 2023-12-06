<?php
    if(isset($_POST['submit']))
    {
        include_once('conexao.php');

        $primeiroNome = $_POST['primeiroNome'];
        $segundoNome = $_POST['segundoNome'];
        $email = $_POST['email'];
        $mensagem = $_POST['mensagem'];

        $result = POO($comn, "INSERT INTO mensagem(nome, sobrenome, email, mensagem) 
        VALUES ('$primeiroNome', '$segundoNome', '$email', '$mensagem')");
    }
?>