<?php
//to preflight
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS'){
	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Headers: Content-Type');
	exit;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST'){
	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Headers: Content-Type');
	$base_dir = "uploads/";
	$uid = uniqid();
	$file = $_FILES["file"];
	$event_id = $_POST["event_id"];
	$file_ext = strtolower(pathinfo($file["name"],PATHINFO_EXTENSION));
	$new_file_path = $base_dir.$uid.'.'.$file_ext;
	if (file_exists($new_file_path)){
		echo '{"error":"file already exists"}';
	}
	if (move_uploaded_file($file["tmp_name"], $new_file_path)) {
		$response = '{"file_path":"'.$new_file_path.'","file_name":"'.$file["name"].'","event_id":"'.$event_id.'"}';
    echo $response ;
    		}
    	else {
            echo '{"error":"failed to save"}';
            echo $file["name"].'<br>';
            echo $_FILES["fileToUpload"]["tmp_name"];
    	}

	exit;
}

if ($_SERVER['REQUEST_METHOD'] == 'GET'){

}



?>
