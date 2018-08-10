<?php
$date = new DateTime();
$newname = "data/data_".$date->format('Y-m-d_H.i.s').".json";

//var_dump $newname;
rename("data/data.json",$newname);

 $data = $_POST["text"];
 //var_dump( $data);
 
//$decodedData = json_decode($data);
//var_dump($decodedData);

if (file_put_contents("data/data.json", $data))
   echo "done...";
else 
   echo "ERROR:Could not save";

?>
