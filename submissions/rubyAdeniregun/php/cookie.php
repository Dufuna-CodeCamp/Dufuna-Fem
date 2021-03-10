<?php
require_once("db_connection.php");
class Customer extends Connect {
    public function allData() {
        try {
            $sql = "SELECT * FROM registered_customers";
            $result = $this->connect()->query($sql);
            $data = $result->fetchAll();
            setcookie("name", json_encode($data), time() + 3600);
            return $data;
        } catch (PDOExeption $e) {
            die("ERROR: Could not execute $sql. " . $e->getMessage());
        }
    }    
}
?>
