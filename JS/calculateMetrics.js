function  calculateMetrics(){
    /* Calculates the BMI*
     return true , if validation error
     return false, if validation success.
     */
    var f = document.getElementById("form");

    /* form validation check for check validity*/
    if(f.checkValidity()) {
        document.getElementById("calculate").click();
        var ht, wt, result;
        ht = parseFloat(document.getElementById("lblHeight").value);
        wt = parseFloat(document.getElementById("lblWeight").value);
        result = (wt / (ht * ht));
        if (isNaN(result)) {
            result = "";
        }
        document.getElementById("lblResult").innerHTML = result.toFixed(2);
        return false;
    }
    else
        return true;
}
