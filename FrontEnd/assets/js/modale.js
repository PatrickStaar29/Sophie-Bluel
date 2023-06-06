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
    const figwork = await fetch('http://localhost:5678/api/works');
    const tabl = await figwork.json();
    console.log(tabl);
    for (const figwork of tabl) {
      // Ajouter l'icone de suppression avec l'attribut onclick
      const modalePeuple = `<figure data-category="${figwork.categoryId}" style="position:relative;"><span class='modale_cross' data-category="${figwork.id}"><i class="fa-solid fa-trash-can" ></i></span>
        <img class='modale_img' src="${figwork.imageUrl}" data-category="${figwork.id}" alt="${figwork.title}"><figcaption>éditer</figcaption></figure>`;
      document.querySelector('.modale_peuple').insertAdjacentHTML('beforeend', modalePeuple);
    }
    const suppr = document.querySelectorAll('.modale_cross')
        suppr.forEach((el) => {
                el.addEventListener('click', deleteFigure);
            })


            async function deleteFigure(event) {

              const span = event.currentTarget;
              const figure = span.closest('figure');
              const figureId = span.getAttribute('data-category');
              const token = localStorage.getItem('token');
            
              const response = await fetch(`http://localhost:5678/api/works/${figureId}`, {
                method: 'DELETE',
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              });
            
              if (response.ok) {
                figure.remove();
                console.log('Figure supprimée avec succès.');
              } else {
                console.error('Erreur lors de la suppression de la figure.');
              }
            }
            
            
            
      
  }
  
  // Fonction pour supprimer une figure
  
  
  getAllWorks();
  
  

  /*
  Tu cliques sur le bouton pour supprimer une photo
  Tu fais ton appel à l'api pour supprimer la photo
    > Tu attends le retour de l'appel API
    Si le retour de l'appel API est bon 
        > Tu fais un .remove() directement de la modale
        > Tu fais un .remove() de la page d'accueil

  */

const modalePublication = document.querySelector('.modale_publication')

modalePublication.style.display = 'none'

