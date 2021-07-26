function compute()
{
    var principal = document.getElementById("principal").value;
    //if principal entered in null or -ve
    //alert message dialogue box
    if(principal == "" || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //calculation for SI
    var interest = principal * years * rate / 100;

    //updating to current date 
    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);
    
    var resultDisplay = document.getElementById("result");
    //final output print statement 
    resultDisplay.innerHTML = "If you deposit " + "<span class='highlight'>" + principal + "</span>."  + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" + yearNow + "</span>";
}

function updateRate()
{
    var rateval = document.getElementById("rate");
    var output = document.getElementById("rate_val");
    output.innerHTML = rateval.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    rateval.oninput = function() 
    {
        output.innerHTML = this.value;
    }  
}