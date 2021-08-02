<?php
  class Category {
    // DB Stuff
    private $conn;
    private $table = 'user';

    // Properties
    public $id;
    public $name;
    public $created_at;
    public $username;
    public $password;
    public $email;


    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }

    // Get categories
    public function read() {
      // Create query
      $query = 'SELECT
        id,
        name,
        username,
        email
      FROM
        ' . $this->table . '
      ORDER BY
        id DESC';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Execute query
      $stmt->execute();

      return $stmt;
    }




    public function log(){
      $query = 'SELECT * FROM user WHERE username = :username AND password = :password';

      $stmt = $this->conn->prepare($query);

     
      // $hashed_password  = sha1($this->password);
      // Bind Data
      $stmt-> bindParam(':username', $this->username);
      $stmt-> bindParam(':password', $this->password);
      $stmt->execute();
      $result = $stmt;
      $row = $result->fetch(PDO::FETCH_ASSOC);
      // Execute query
      if(!empty($row)) {
        return true;
      }
      else{
        return false;
      }

    }
  }
