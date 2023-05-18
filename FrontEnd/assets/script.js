async function getCategories() {
  const req = await fetch('http://localhost:5678/api/categories')
  const datas = await req.json()

    // On boucle sur les datas et on peuple la page HTML
    // for (const data of datas) {
    //   const button = document.createElement('button')
    //   button.className = 'category__button'
    //   button.dataset.category = data.id
    //   button.textContent = data.name
  
    //   button.addEventListener('click', function() {
    //     const categoryId = this.dataset.category
    //     console.log(categoryId)

    //     const buttons = document.querySelectorAll('.category__button')
    //       for (let j = 0; j < buttons.length; j++) {
    //             buttons[j].classList.remove("active")
    //         }
    //         this.classList.add("active")
    //         console.log('click')
        
    //     })

    //     const figure = document.querySelectorAll('figure')

         
    //   document.querySelector('.category__placement').appendChild(button);

      
    // }

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
  
  // On click sur la catégorie avec l'id 1 :
        // On masque TOUS les travaux
        // On affiche uniquement les travaux avec la catégorie 1
        // document.querySelector('figure').style.display = "none";
        // const figure = document.querySelectorAll('figure')
        // figure.forEach(el => {
        //     el.style.display = "none";
        // })
        // Javascript select data attribute
        // document.querySelector('figure:[data-category=1]')

  // Appel de la fonction pour récupérer et afficher les catégories
getCategories()

async function getAllWorks() {
  const test = await fetch('http://localhost:5678/api/works')
  const tablou = await test.json()
  // Fait l'appel à l'API : http://localhost:5678/api/works
  console.table(tablou)
  // Parcourir le tableau avec for

  // Créer les éléments

  /*
      console.log()
      console.table()
  */
}

getAllWorks()