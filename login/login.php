<?php 

session_start();

	include("connection.php");
	include("functions.php");


	if($_SERVER['REQUEST_METHOD'] == "POST")
	{
		//something was posted
		$user_name = $_POST['user_name'];
		$password = $_POST['password'];

		if(!empty($user_name) && !empty($password) && !is_numeric($user_name))
		{

			//read from database
			$query = "select * from users where user_name = '$user_name' limit 1";
			$result = mysqli_query($con, $query);

			if($result)
			{
				if($result && mysqli_num_rows($result) > 0)
				{

					$user_data = mysqli_fetch_assoc($result);
					
					if($user_data['password'] === $password)
					{

						$_SESSION['user_id'] = $user_data['user_id'];
						header("Location: /duurzaam-huis/index.php");
						die;
					}
				}
			}
			
			echo "wrong username or password!";
		}else
		{
			echo "wrong username or password!";
		}
	}

?>


<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
</head>
<body>

	<style type="text/css">
	@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
	* {
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		font-family: 'Lato', sans-serif;
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeLegibility;
	}

	body {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #0c0c0c;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	a {
		color: #E5383B;
		font-weight: 700;
	}
	
	.text{
		outline: none;
		height: 25px;
		border-radius: 5px;
		padding: 6px;
		border: solid thin #aaa;
		width: 100%;
	}

	#button{
		border-radius: 7px;
		color: black;
		padding: 10px;
		width: 100px;
		color: white;
		background-color: #BA181B;
		border: none;
	}

	#box{
		border-radius: 7px;
		background-color: #131313;
		margin: auto;
		width: 300px;
		padding: 20px;
	}

	</style>

	<div id="box">
		<form method="post">
			<div style="font-size: 20px;margin: 10px;color: white;">Login</div>

			<input class="text" placeholder="Username" type="text" name="user_name"><br><br>
			<input class="text" placeholder="Password" type="password" name="password"><br><br>

			<input id="button" type="submit" value="Login"><br><br>

			<a href="signup.php">Click to Signup</a><br><br>
		</form>
	</div>
</body>
</html>