document.getElementById("signup").onclick = function() {

    //get data fromm the user
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;


    //summon firebase
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {

        window.location.href = "index.html";
    }).catch((error) => {
        const error1 = error.message;
        console.log(error1);

        alert(error1);
    })

}