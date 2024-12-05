document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();
    const Requestor = document.getElementById('Requestor').value;
    const Dep = document.getElementById('Dep').value;
    const email = document.getElementById('email').value;
    const num = document.getElementById('num').value;
    const time = document.getElementById('time').value;
    const Comments = document.getElementById('Comments').value;
    if(!Requestor || !Dep){
    alert("Please Input both Requestor and Department you're from");
    return
    }

    if(!num || !email){
        alert("You need to enter your Phone number and email");
        return
        }

    if(!time || !Comments){
    alert("Please Enter time and the Issue/Concerns");
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
