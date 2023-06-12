async function getLogin() {

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const errorText = document.getElementById('error')

    const logApi = await fetch('http://localhost:5678/api/users/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    if (logApi.ok){
    const data = await logApi.json()
    // console.table(data.token)
    localStorage.setItem('token', data.token)
    window.location.href = 'index.html'
    } else {
    errorText.style.display = 'block'
    }   
}
// getLogin()
const button = document.querySelector('button')

button.addEventListener('click', (e) => {
    e.preventDefault();

    // Vérification si les champs sont remplis

    // Si les champs sont rempli lancer la fonction
    getLogin()
})


