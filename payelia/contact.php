<?php
/**
 * EDIT THE VALUES BELOW THIS LINE TO ADJUST THE CONFIGURATION
 * EACH OPTION HAS A COMMENT ABOVE IT WITH A DESCRIPTION
 */
/**
 * Specify the email address to which all mail messages are sent.
 * The script will try to use PHP's mail() function,
 * so if it is not properly configured it will fail silently (no error).
 */
$mailTo     = 'mail@yourdomain.com';

/**
 * Set the message that will be shown on success
 */
$successMsg = 'Thank you, massage sent successfuly!';

/**
 * Set the message that will be shown if not all fields are filled
 */
$fillMsg    = 'Please fill all fields!';

/**
 * Set the message that will be shown on error
 */
$errorMsg   = 'Hm.. seems there is a some problem, sorry!';

/**
 * DO NOT EDIT ANYTHING BELOW THIS LINE, UNLESS YOU'RE SURE WHAT YOU'RE DOING
 */

?>
<?php
if(
    !isset($_POST['name']) ||
	!isset($_POST['email']) ||
    !isset($_POST['message']) ||
    empty($_POST['name']) ||
	empty($_POST['email']) ||
    empty($_POST['message'])
) {
    echo '<script type="text/javascript">window.parent.$("#contact-form").html("' . $fillMsg . '");window.parent.$("#contact-form").show();</script>';
} else {

    ?>
    <?php
	$msg = "Name: ".$_POST['name']."\r\n";
	$msg .= "Email: ".$_POST['email']."\r\n";
	$msg .= "message: ".$_POST['message']."\r\n";

    $success = @mail($mailTo, $_POST['email'], $msg, 'From: ' . $_POST['name'] . '<' . $_POST['email'] . '>');
    if ($success) {
        echo '<script type="text/javascript">window.parent.$("#contact-form").html("' . $successMsg . '");
		window.parent.$("#input_name").val("");
		window.parent.$("#input_email").val("");
		window.parent.$("#textarea_message").val(""); 
		window.parent.$("#contact-form").show();</script>';
    } 
		else {
        echo '<script type="text/javascript">window.parent.$("#contact-form ").html("' . $errorMsg . '");window.parent.$("#contact-form").show();</script>';
    }
}