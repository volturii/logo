// Wyświetlanie nazwy użytkownika po zalogowaniu
function getUserData(userId) {
    db.collection('users').doc(userId).get()
        .then((doc) => {
            if (doc.exists) {
                const displayName = doc.data().displayName;
                document.getElementById('userName').innerText = displayName;
            } else {
                console.log('Brak danych użytkownika w Firestore.');
            }
        })
        .catch((error) => {
            console.error('Błąd podczas pobierania danych użytkownika z Firestore: ', error);
        });
}

// Sprawdź stan logowania przy załadowaniu strony
auth.onAuthStateChanged((user) => {
    if (user) {
        // Jeśli użytkownik jest zalogowany, pobierz i wyświetl jego dane
        getUserData(user.uid);
    } else {
        // Jeśli użytkownik jest wylogowany, wyczyść wyświetlane dane
        document.getElementById('userName').innerText = '';
    }
});
