document.getElementById("signup").onclick = function() {

    //get data fromm the user
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;


    //summon firebase
    firebase.auth().createUserWithEmailAndPassword(email, password).then((userCred) => {
        //getting the user ID
        const userId = userCred.user.uid;
        const date = new Date();

        //creating a new collection in the database
        firebase.firestore().collection("users").doc(userId).set({
            date: date.toDateString(),
            email: email,
            userId: userId,
            password: password

        }).then(() => {
            console.log("user created");
            window.location.href = "index.html";
        })
    }).catch((error) => {
        const error1 = error.message;
        console.log(error1);

        alert(error1);
    })

}