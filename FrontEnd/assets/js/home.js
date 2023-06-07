async function getCategories() {
  const req = await fetch('http://localhost:5678/api/categories')
  const datas = await req.json()

    // On boucle sur les datas pour faire le peuplage de la page
    for(const data of datas){
      // On fait directement la structure comme en html
      const button = `<button class="category__button" data-category="${data.id}">${data.name}</button>`

      // On ajoute le bouton sur le DOM
      document.querySelector('.category__placement').insertAdjacentHTML('beforeend', button)
    }

    // On sélectionne tous les boutons
    const button = document.querySelectorAll('.category__button')

    // On ajoute un eventlistener sur chacun des boutons
    button.forEach(el => {
      el.addEventListener('click', (e) => {
        // Supprimer la classe active sur l'élément qui possède déjà la classe active
        const active = document.querySelector('.active')
        active.classList.remove('active')

        e.target.classList.add('active')

        // Filtrer les travaux
        // showWorkFiltered(idDeLaCategorie)
        showWorkFiltered(e.target.dataset.category)
      })
    })
}

/*
  Fonction qui permet d'afficher les travaux filtrés en fonction d'une catégorie
*/
function showWorkFiltered(idCategory){
  // Soit c'est l'id 0 = on affiche tous les travaux
  if(idCategory == 0){
    // On affiche tout
    const figure = document.querySelectorAll('.gallery figure')
    figure.forEach(el => {
      el.style.display = "block"
    })
  }

  // Soit c'est un autre id = on affiche uniquement les travaux avec cet id
  if(idCategory > 0){
    // On sélectionne TOUTES les images (figure) qui possèdent la catégorie = à celle envoyée lors du clic

    // On séléctionne toutes les images et on les masque
    const figure = document.querySelectorAll('.gallery figure')
    figure.forEach(el => {
      el.style.display = "none"
    })

    // On sélectionne toutes les figures qui possèdent l'attribut data-category=idCategory
    const figureToShow = document.querySelectorAll(`.gallery>figure[data-category="${idCategory}"]`)
    figureToShow.forEach(el => {
      el.style.display = "block"
    })
  }

}

getCategories()

async function getAllWorks() {
  const figworks = await fetch('http://localhost:5678/api/works')
  const tabl = await figworks.json()
  console.log(tabl)
  for (const figworks of tabl){
    const figure = `<figure data-category="${figworks.categoryId}"><img src="${figworks.imageUrl}" data-id="${figworks.id}" alt="${figworks.title}">
    <figcaption>${figworks.title}</figcaption><figure>`
     
      
    document.querySelector('.gallery').insertAdjacentHTML('beforeend', figure)
  }
  // On ajoute le bouton sur le DOM
  // Créer les éléments

  /*
      console.log()
      console.table()
  */
}

getAllWorks()



