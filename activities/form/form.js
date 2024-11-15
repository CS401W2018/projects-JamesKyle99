document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    if(!username || !email){
    alert("You need a username and an email!!!");
    return
    }

    const formData = {
        username: username,
        emailAddress:email,
        password: document.getElementById('pass').value,
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
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
