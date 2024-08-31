<h1>Hands-on-Activity</h1>
<?php
    $table = array(
        "header"=>array(
            "StudentID",
            "Firstname",
            "Middlename",
            "Lastname",
            "Section",
            "Course",
            "Yearlevel"
        ),
        "body" => array (
                  array (      
                    "firstname"=>"Firstname",
                    "middlename"=>"Middlename",
                    "lastname"=>"Lastname",
                    "section"=>"Section", 
                    "course"=>"Course",
                    "yearlevel"=>"Yearlevel",       
                  ),
                  array (      
                    "firstname"=>"Firstname",
                    "middlename"=>"Middlename",
                    "lastname"=>"Lastname",
                    "section"=>"Section", 
                    "course"=>"Course",
                    "yearlevel"=>"Yearlevel",       
                  ),
                  array (      
                    "firstname"=>"Firstname",
                    "middlename"=>"Middlename",
                    "lastname"=>"Lastname",
                    "section"=>"Section", 
                    "course"=>"Course",
                    "yearlevel"=>"Yearlevel",       
                  ),
                  array (      
                    "firstname"=>"Firstname",
                    "middlename"=>"Middlename",
                    "lastname"=>"Lastname",
                    "section"=>"Section", 
                    "course"=>"Course",
                    "yearlevel"=>"Yearlevel",       
                  ),
                  array (      
                    "firstname"=>"Firstname",
                    "middlename"=>"Middlename",
                    "lastname"=>"Lastname",
                    "section"=>"Section", 
                    "course"=>"Course",
                    "yearlevel"=>"Yearlevel",       
                  ),
                  array (      
                    "firstname"=>"Firstname",
                    "middlename"=>"Middlename",
                    "lastname"=>"Lastname",
                    "section"=>"Section", 
                    "course"=>"Course",
                    "yearlevel"=>"Yearlevel",       
                  ),
                  array (      
                    "firstname"=>"Firstname",
                    "middlename"=>"Middlename",
                    "lastname"=>"Lastname",
                    "section"=>"Section", 
                    "course"=>"Course",
                    "yearlevel"=>"Yearlevel",       
                  ),
                  array (      
                    "firstname"=>"Firstname",
                    "middlename"=>"Middlename",
                    "lastname"=>"Lastname",
                    "section"=>"Section", 
                    "course"=>"Course",
                    "yearlevel"=>"Yearlevel",       
                  ),
                  array (      
                    "firstname"=>"Firstname",
                    "middlename"=>"Middlename",
                    "lastname"=>"Lastname",
                    "section"=>"Section", 
                    "course"=>"Course",
                    "yearlevel"=>"Yearlevel",       
                  ),
                  array (      
                    "firstname"=>"Firstname",
                    "middlename"=>"Middlename",
                    "lastname"=>"Lastname",
                    "section"=>"Section", 
                    "course"=>"Course",
                    "yearlevel"=>"Yearlevel",       
                  ),
                  array (      
                    "firstname"=>"Firstname",
                    "middlename"=>"Middlename",
                    "lastname"=>"Lastname",
                    "section"=>"Section", 
                    "course"=>"Course",
                    "yearlevel"=>"Yearlevel",       
                  ),
                  array (      
                    "firstname"=>"Firstname",
                    "middlename"=>"Middlename",
                    "lastname"=>"Lastname",
                    "section"=>"Section", 
                    "course"=>"Course",
                    "yearlevel"=>"Yearlevel",       
                  ),

        )
    )

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hands-on Activity</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            font-size: 16px;
            text-align: left;
        }
        th, td {
            padding: 12px;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Hands-on Activity</h1>
    <?php
    // Define the table array
    $table = array(
        "header" => array(
            "StudentID",
            "Firstname",
            "Middlename",
            "Lastname",
            "Section",
            "Course",
            "Yearlevel"
        ),
        "body" => array(
            array(
                "studentid" => "1",
                "firstname" => "Firstname1",
                "middlename" => "Middlename1",
                "lastname" => "Lastname1",
                "section" => "Section1",
                "course" => "Course1",
                "yearlevel" => "Yearlevel1"
            ),
            array(
                "studentid" => "2",
                "firstname" => "Firstname2",
                "middlename" => "Middlename2",
                "lastname" => "Lastname2",
                "section" => "Section2",
                "course" => "Course2",
                "yearlevel" => "Yearlevel2"
            ),
            // Add more student records as needed
            // ...
        )
    );

    ?>
    <table border="3">
      </thead>  
         <?php
            for($i = 0; $i <= count($table["header"]) -1; $i++) {
                echo "<tr>" .$table["header"][$i]."</th>";
            }
           ?>
       </thead> 
    </body> 
      <?php
             for($i = 0; $i <= count($table["body"]) -1; $i++) { 
                echo "<tr>";
                echo "<td>" .$table ["body"][$i]["firstname"]."</td>";
                echo "<td>" .$table ["body"][$i]["middlename"]."</td>";
                echo "<td>" .$table ["body"][$i]["lastname"]."</td>";
                echo "<td>" .$table ["body"][$i]["section"]."</td>";
                echo "<td>" .$table ["body"][$i]["course"]."</td>";
                echo "<td>" .$table ["body"][$i]["yearlevel"]."</td";

             }
?>
</body>
</Table>
