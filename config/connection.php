<?php

require_once(dirname(__FILE__) ."/env.php");

/**
 * PHP PDO para conexão com o MySQL.
 * Para saber mais sobre procure em php.net
 */
class Db 
{
    public $db;
    public function __construct()
    {
        try {
            $dsn = "mysql:dbname=" . DB_DATABASE . ";host=" . DB_HOST;
            $user = DB_USERNAME;
            $pass = DB_PASSWORD;

            $this->db = new \PDO($dsn, $user, $pass);
            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (\Exception $e) {
            print 'Error: ' . $e->getMessage();
        }
    }
}