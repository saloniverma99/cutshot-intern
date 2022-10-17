<?php
$years = array("Bill"=>2009 , "George"=>2001 , "Barak"=>2005);
echo "<ol>";
foreach($years as $name=>$years){
    echo "<li>" .$name ." was elected in ". $years. "</li>";
};
echo "</ol>";
?>
