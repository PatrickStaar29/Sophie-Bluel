async function getCategories() {
  const req = await fetch('http://localhost:5678/api/categories')
  const datas = await req.json()
  
    // On boucle sur les datas et on peuple la page HTML
    for (const data of datas) {
      const button = document.createElement('button')
      button.className = 'category__button'
      button.dataset.category = data.id
      button.textContent = data.name
  
      button.addEventListener('click', function() {
        const categoryId = this.dataset.category
        console.log(categoryId)

        const buttons = document.querySelectorAll('.category__button')
          for (let j = 0; j < buttons.length; j++) {
                buttons[j].classList.remove("active")
            }
            this.classList.add("active")
            console.log('click')
        
        })

        const figure = document.querySelectorAll('figure')

         
      document.querySelector('.category__placement').appendChild(button);

      
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

async function getCategorieTableau() {
  const tabl = await fetch('http://localhost:5678/api/works')
  const trie = await tabl.json()


}

  

  