<?php

require_once("./config/connection.php");

// Exemplo de conexão com o banco de dados.
// Obs: Você precisa criar o banco de dados para conseguir testar.
$conn = new Db();

$stmt = $conn->db->query("SELECT * FROM user");

echo "<pre>";
var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));