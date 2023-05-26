const token = localStorage.getItem('token')

const modale = document.querySelector('.modale')

const loginButton = document.querySelector('#login')
const logoutButton = document.querySelector('#logout')

const modaleModif = document.getElementById('mod_dif')

const filtre = document.querySelector('.category__placement')

if (token){
    modale.style.display = 'flex'
    loginButton.style.display = 'none'
    logoutButton.style.display = 'block'
    filtre.style.display = 'none'
    modaleModif.style.display = 'block'
}else{
    modale.style.display = 'none'
    loginButton.style.display = 'block'
    logoutButton.style.display = 'none'
    filtre.style.display = 'flex'
    modaleModif.style.display = 'none'
}

logoutButton.addEventListener('click', (e)=>{
    localStorage.removeItem('token')
})
    
