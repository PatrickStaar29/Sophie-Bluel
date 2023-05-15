async function getCategories() {
    // Les données du Swagger
    const datas = [
      {
        "id": 1,
        "name": "Objets"
      },
      {
        "id": 2,
        "name": "Appartements"
      },
      {
        "id": 3,
        "name": "Hotels & restaurants"
      }
    ];
  
    // On boucle sur les datas et on peuple la page HTML
    for (const data of datas) {
      const button = document.createElement('button');
      button.className = 'category__button';
      button.dataset.category = data.id;
      button.textContent = data.name;
  
      button.addEventListener('click', function() {
        const categoryId = this.dataset.category;
        console.log(categoryId);
      });
  
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
  getCategories();
  