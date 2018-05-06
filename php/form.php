<?php

$message = "Name:" . $_POST["name"] . "\nMessage" . $_POST["message"];

if (mail("quiwah@gmail.com", $_POST["subject"], $message, "From:
" . $_POST["mail"])) {
	echo "Your message has been successfully sent.";
} else {
	echo "Your message could not be sent. Please try again.";
}

?>
