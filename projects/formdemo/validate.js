function validateForm() {
    // Declare Constant
    var FORM_CLASS = "form-group";
    
    // Declare Variables
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var city = document.getElementById("city");
    var zip = document.getElementById("zip");
    var checkbox = document.getElementById("termsAndConditions");
    
    // Email Validation
    if (email.value.length === 0) {
        document.getElementById("emailContainer").className += " has-error";
        email.focus();
        email.select();
        return false;
    } else {
        document.getElementById("emailContainer").className = FORM_CLASS;
    }
    
    // Password Validation
    if (password.value.length === 0) {
        document.getElementById("passwordContainer").className += " has-error";  
        password.focus();
        password.select();
        return false;
    } else {
        document.getElementById("passwordContainer").className = FORM_CLASS;
    }
    
    // City Validation
    if (city.value.length === 0) {
        document.getElementById("cityContainer").className += " has-error";
        city.focus();
        city.select();
        return false;
    } else {
        document.getElementById("cityContainer").className = FORM_CLASS;
    }
    
    // Zip Validation
    if (zip.value.length === 0) {
        document.getElementById("zipContainer").className += " has-error";
        zip.focus();
        zip.select();
        return false;
    } else {
        document.getElementById("zipContainer").className = FORM_CLASS;
    }
    
    // Checkbox Validation
    if (!checkbox.checked) {
        document.getElementById("checkboxContainer").className += " has-error";
        checkbox.focus();
        return false;
    } else {
        document.getElementById("checkboxContainer").className = "checkbox";
    }

    return true;

}
