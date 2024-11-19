document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const pass = document.getElementById('pass').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const age = document.getElementById('age').value;
    if(!username || !pass){
    alert("You need a username and an Password!!!");
    return
    }

    if(!age || age < 18){
        alert("You must be 18 above");
        return
        }

    if(!email || !dob){
    alert("You need a email and an Date of birth!!!");
    return
    }

    


    const formData = {
        username: username,
        emailAddress:email,
        password: document.getElementById('pass').value,
    };

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('myForm').innerHTML = "";
        
        } else if (xhr.readyState === 4) {
            alert ('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    console.log(formData);
   

});
