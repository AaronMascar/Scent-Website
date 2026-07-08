function checkData(){

	//validation for salutation
	if (document.signup.salutation.value=="")
	{
		alert("Please select your salutation.");
		document.signup.salutation.focus();
		return false;
	}

	//validation for gender	
	if (document.signup.gender.value=="")
	{
		alert("Please select your gender.");
		document.signup.gender.focus();
		return false;
	}

	//validation for name
	if (document.signup.name.value=="")
	{
		alert("Please fill in your name.");
		document.signup.name.focus();
		return false;
	}
	else if(document.signup.name.value.length<2)
	{
		alert("Please enter your full name.");
		document.signup.name.focus();
		return false;
	}
	else if(document.signup.name.value.search(/\d/g)!=-1)
	{
		alert("The name can't contain numbers.");
		document.signup.name.focus();
		return false;
	}
	
	//validation for phone
	if (document.signup.phone.value=="")
	{
		alert("Please write your Phone number.");
		document.signup.phone.focus();
		return false;
	}
	else if(document.signup.phone.value.search(/\d/g)==-1)
	{
		alert("The phone can't contain letters.");
		document.signup.phone.focus();
		return false;
	}
	
	//validation for email
	if (document.signup.email.value=="")
	{
		alert("Please enter your email address.");
		document.signup.email.focus();
		return false;
	}
	else if (document.signup.email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
	{
		alert("Please enter the correct email format.");
		document.signup.email.focus();
		return false;
	}
	else if(document.signup.email.value.match(/^[a-zA-Z_-]+$/))
	{
		alert("You have entered an invalid email address!");
		document.signup.email.focus();
		return false;
	}
	
	//validation for comment
	if (document.signup.comment.value=="")
	{
		alert("Please write a comment that you would like to send.");
		document.signup.comment.focus();
		return false;
	}
	else{
		alert("Feedback Form sent successfully. Thank you.");
		return true;
	}
}
