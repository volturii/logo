// Obsługa logowania
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Zalogowano pomyślnie!');
            // Pobierz dane użytkownika po zalogowaniu
            getUserData(userCredential.user.uid);
        })
        .catch((error) => {
            alert(error.message);
        });
});
