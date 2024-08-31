<h1>Condition</h1>

<?php
    if ($age >= 22) {
        echo "Legal age";
    } else if($age >= 0  && $age <=10) {
        echo 'something';
    } else {
        echo "Kabataan";
    }

    //short-hand if condition
    //(condition) ? true condition : else condition

    $ageLabel = ($age >=22) ? '20+' : '21-';
    echo $ageLabel;




    switch ($role) {
        case 'admin':
            #code
            echo 'you have full access ...';
            break;

        case 'student':
                #code
                echo 'you have full access ...';
                break;   

        case 'instructor':
               #code
               echo 'you have full access ...';
               break;   
    }

    ?>