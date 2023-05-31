const token = localStorage.getItem('token')

const barreModif = document.querySelector('.barre_modif')

const loginButton = document.querySelector('#login')
const logoutButton = document.querySelector('#logout')

const modifDesign = document.querySelector('.modif_design')
const modifProjet = document.querySelector('.modif_projet')

const filtre = document.querySelector('.category__placement')

if (token){
    barreModif.style.display = 'flex'
    loginButton.style.display = 'none'
    logoutButton.style.display = 'block'
    filtre.style.display = 'none'
    modifDesign.style.display = 'null'
    modifProjet.style.display = 'null'
}else{
    barreModif.style.display = 'none'
    loginButton.style.display = 'block'
    logoutButton.style.display = 'none'
    filtre.style.display = 'flex'
    modifDesign.style.display = 'none'
    modifProjet.style.display = 'none'
}

logoutButton.addEventListener('click', (e)=>{
    localStorage.removeItem('token')
})
    

const modale = document.querySelector('.modale')
    modale.style.display = 'none'

const modaleBackground = document.querySelector('.modale_background')
    modaleBackground.style.display = 'none'

function openModal() {
    const modalElements = document.querySelectorAll('.modale, .modale_background')
        
    modalElements.forEach(function(element) {
        element.style.display = 'flex'
    })
}
function closeModal() {
    const modalElements = document.querySelectorAll('.modale, .modale_background')
        
    modalElements.forEach(function(element) {
        element.style.display = 'none'
    })
}

const modalButtons = document.querySelectorAll('.mod')

modalButtons.forEach(function(a) {
    a.addEventListener('click', openModal)
})

modaleBackground.addEventListener('click', closeModal)

async function getAllWorks() {
    const figworks = await fetch('http://localhost:5678/api/works')
    const tabl = await figworks.json()
    console.log(tabl)
    for (const figworks of tabl){
        // Ajouter l'icone de suppression
      const modalePeuple = `<figure data-category="${figworks.categoryId}" style="position:relative;"><span class='modale_cross'><i class="fa-solid fa-trash-can"></i></span><img class='modale_img' src="${figworks.imageUrl}" data-category="${figworks.id} alt="${figworks.title}">
      </figure>`
      document.querySelector('.modale_peuple').insertAdjacentHTML('beforeend', modalePeuple)
    }

    // Ajouter les écouteurs d'évènement au click sur la poubelle
  }
  getAllWorks()

  /*
  Tu cliques sur le bouton pour supprimer une photo
  Tu fais ton appel à l'api pour supprimer la photo
    > Tu attends le retour de l'appel API
    Si le retour de l'appel API est bon 
        > Tu fais un .remove() directement de la modale
        > Tu fais un .remove() de la page d'accueil

  */