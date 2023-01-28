function Validation(user) {

    if (user.firstname === '' || user.lastname === '' || user.mobile === '') {
        alert ("please enter details...");
        return false;
    } 
    else if(!/^[A-Za-z]+$/.test(user.firstname)) {  
        alert('First Name is incorrect must contain alphabets only');
        return false; 
    }  
    else if(!/^[A-Za-z]+$/.test(user.lastname)) {  
        alert('Last Name is incorrect must contain alphabets only');
        return false;
    } 
    else if (user.profession === '') {
        alert("Please select your profession!");
        return false;
    } 
    else if (user.address === '') {
        alert("enter valid address details");
        return false;
    }   
    else if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(user.mobile)) {  
        alert("mobile number is invalid");
        return false;
    }
    else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(user.email)) {
        alert("E-mail ID is invalid");
        return false;
    }
    else {
        alert("Form Submitted Successfully");
        return true;
    }
    // return true;
}

export default Validation