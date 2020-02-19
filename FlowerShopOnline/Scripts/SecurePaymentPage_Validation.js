


function ValidateCardNumber() {                                             //Card Number Validation
    
    var regex = /^4[0-9]{12}$|4[0-9]{15}$/;
    if (document.getElementById("txtcardNumber").value=="") {
        document.getElementById("nullcardNumber").style.display = "block";
        document.getElementById("errorcardNumber").style.display = "none";
        flag= false;
    }
    else if (!document.getElementById("txtcardNumber").value.match(regex)) {
        document.getElementById("errorcardNumber").style.display = "block";
        document.getElementById("nullcardNumber").style.display = "none";
        flag= false;
    }
    else {
        document.getElementById("errorcardNumber").style.display = "none";
        document.getElementById("nullcardNumber").style.display = "none";
    }
}

function validateSecurityCode() {                                            //Security Code Validation
    var regex = /[0-9]{8}/;
    if (document.getElementById("txtsecurityCode").value=="") {
        document.getElementById("nullsecurityCode").style.display = "block";
        document.getElementById("errorsecurityCode").style.display = "none";
        flag= false;
    }
    else if (!document.getElementById("txtsecurityCode").value.match(regex)) {
        document.getElementById("errorsecurityCode").style.display = "block";
        document.getElementById("nullsecurityCode").style.display = "none";
        flag= false;
    }
    else {
        document.getElementById("errorsecurityCode").style.display = "none";
        document.getElementById("nullsecurityCode").style.display = "none";
    }
}

function validateExpiryDate() {                                             //Expiry Date Validation
    if (document.getElementById("expiryMonth").selectedIndex == "" | document.getElementById("expiryYear").selectedIndex == "") {
        
        document.getElementById("nullmonthAndYear").style.display = "block";
        flag = false;
    }
    else {
        document.getElementById("nullmonthAndYear").style.display = "none";

    }
}


function validateName() {                                                    //Name Validation
   
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (document.getElementById("txtcardholdername").value == "") {
        document.getElementById("nullcardHolderName").style.display = "block";
        document.getElementById("errorcardHolderName").style.display = "none";
        flag= false;
    }
    else if (!document.getElementById("txtcardholdername").value.match(regex)) {
        document.getElementById("errorcardHolderName").style.display = "block";
        document.getElementById("nullcardHolderName").style.display = "none";
        flag= false;
    }
    else {
        document.getElementById("errorcardHolderName").style.display = "none";
        document.getElementById("nullcardHolderName").style.display = "none";
    }
}

function validateAddress() {                                                 //Address Validation
    
    var regex = /^[0-9a-z]+[A-Z\s]*[,'-/]+[a-z]*$/;
    if (document.getElementById("txtAddress").value=="") {
        document.getElementById("nullAddress").style.display = "block";
        document.getElementById("errorAddress").style.display = "none";
        flag = false;
    }
    else if (!document.getElementById("txtAddress").value.match(regex)) {
        document.getElementById("errorAddress").style.display = "block";
        document.getElementById("nullAddress").style.display = "none";
        flag = false;
    }
    else {
        document.getElementById("errorAddress").style.display = "none";
        document.getElementById("nullAddress").style.display = "none";    
    }
}

function validateCity() {                                                   //City Validation

    if (document.getElementById("txttownorcity").value == "") {
        document.getElementById("nullcity").style.display = "block";
        flag = false;
    }
    else {
        document.getElementById("nullcity").style.display = "none";

    }
}

function validateZipCode() {                                               //Zipcode Validation
  
    var regex = /[11-92][0-9]{4}$/;
    if (document.getElementById("txtpostcodeorzip").value=="") {
        document.getElementById("nullzipCode").style.display = "block";
        document.getElementById("errorzipCode").style.display = "none";
        flag = false;
    }
    else if (!document.getElementById("txtpostcodeorzip").value.match(regex)) {
        document.getElementById("errorzipCode").style.display = "block";
        document.getElementById("nullzipCode").style.display = "none";
        flag = false;
    }
    else {
        document.getElementById("errorzipCode").style.display = "none";
        document.getElementById("nullzipCode").style.display = "none";
    }
}

function validateCountry() {                                              //Country Validation
    if (document.getElementById("country").selectedIndex == "") {

        document.getElementById("nullcountry").style.display = "block";
        flag = false;
    }
    else {
        document.getElementById("nullcountry").style.display = "none";

    }
}

function validateEmail() {                                                   //Email Validation
    
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (document.getElementById("txtemail").value=="") {
        document.getElementById("nullEmail").style.display = "block";
        document.getElementById("errorEmail").style.display = "none";
        flag = false;
    }
    else if (!document.getElementById("txtemail").value.match(regex)) {
        document.getElementById("errorEmail").style.display = "block";
        document.getElementById("nullEmail").style.display = "none";
        flag = false;
    }
    else {
        document.getElementById("errorEmail").style.display = "none";
        document.getElementById("nullEmail").style.display = "none";
    }
}

function Validate() {                                       
    flag = true;
    ValidateCardNumber();
    validateSecurityCode();
    validateExpiryDate();
    validateName();
    validateAddress();
    validateCity();
    validateZipCode();
    validateCountry();
    validateEmail();
    if (flag == true) {
        document.getElementById("txtcardNumber").value = "";
        document.getElementById("txtsecurityCode").value = "";
        document.getElementById("expiryMonth").value = "";
        document.getElementById("expiryYear").value = "";
        document.getElementById("txtcardholdername").value = "";
        document.getElementById("txtAddress").value = "";
        document.getElementById("txtsecondaddress").value = "";
        document.getElementById("txtthirdaddress").value = "";
        document.getElementById("txttownorcity").value = "";
        document.getElementById("txtregion").value = "";
        document.getElementById("txtpostcodeorzip").value = "";
        document.getElementById("txttelephone").value = "";
        document.getElementById("txtfax").value = "";
        document.getElementById("txtemail").value = "";
            
        alert("Payment Successful!");
    }
}

function cancel()
{
    document.getElementById("txtcardNumber").value = "";
    document.getElementById("txtsecurityCode").value = "";
    document.getElementById("expiryMonth").value = "";
    document.getElementById("expiryYear").value = "";
    document.getElementById("txtcardholdername").value = "";
    document.getElementById("txtAddress").value = "";
    document.getElementById("txtsecondaddress").value = "";
    document.getElementById("txtthirdaddress").value = "";
    document.getElementById("txttownorcity").value = "";
    document.getElementById("txtregion").value = "";
    document.getElementById("txtpostcodeorzip").value = "";
    document.getElementById("txttelephone").value = "";
    document.getElementById("txtfax").value = "";
    document.getElementById("txtemail").value = "";
    document.getElementById("errorcardNumber").style.display = "none";
    document.getElementById("nullcardNumber").style.display = "none";
    document.getElementById("errorsecurityCode").style.display = "none";
    document.getElementById("nullsecurityCode").style.display = "none";
    document.getElementById("nullmonthAndYear").style.display = "none";
    document.getElementById("errorcardHolderName").style.display = "none";
    document.getElementById("nullcardHolderName").style.display = "none";
    document.getElementById("errorAddress").style.display = "none";
    document.getElementById("nullAddress").style.display = "none";
    document.getElementById("nullcity").style.display = "none";
    document.getElementById("errorzipCode").style.display = "none";
    document.getElementById("nullzipCode").style.display = "none";
    document.getElementById("nullcountry").style.display = "none";
    document.getElementById("errorEmail").style.display = "none";
    document.getElementById("nullEmail").style.display = "none";
    alert("Your request cancelled!");
}

   

