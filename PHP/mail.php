<?php 

$mymail = "romaincordier33160@gmail.com";

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $mail = $_POST['mail'];
    $sujet = $_POST['sujet'];
    $message = $_POST['message'];

    mail($mymail, $sujet, $message);
}