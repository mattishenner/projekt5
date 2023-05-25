function switchPage() {
    // Check if any radio button is checked
    if (document.getElementById('option1').checked || document.getElementById('option2').checked) {
        document.getElementById('formPage1').style.display = 'none';
        if (document.getElementById('option1').checked) {
            document.getElementById('formPage2').style.display = 'block';
        } else if (document.getElementById('option2').checked) {
            document.getElementById('formPage3').style.display = 'block';
        }
    } else {
        alert("Husk at vælg en kontaktmetode");
    }
}

function switchBack() {
    document.getElementById('formPage1').style.display = 'block';
    document.getElementById('formPage2').style.display = 'none';
    document.getElementById('formPage3').style.display = 'none';
}