document.getElementById("signin").onclick = function() {
    //get data fromm the user
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;

    //sign in this person

    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        window.location.href = "home.html";
    }).catch((error) => {
        const mss = error.message;
        alert(mss);
    })
}