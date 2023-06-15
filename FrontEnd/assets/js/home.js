async function getCategories() {
  const req = await fetch('http://localhost:5678/api/categories')
  const datas = await req.json()

    for(const data of datas){
      const button = `<button class="category__button" data-category="${data.id}">${data.name}</button>`

      document.querySelector('.category__placement').insertAdjacentHTML('beforeend', button)
    }

    const button = document.querySelectorAll('.category__button')

    button.forEach(el => {
      el.addEventListener('click', (e) => {
        const active = document.querySelector('.active')
        active.classList.remove('active')

        e.target.classList.add('active')

        showWorkFiltered(e.target.dataset.category)
      })
    })
}

function showWorkFiltered(idCategory){
  if(idCategory == 0){
    const figure = document.querySelectorAll('.gallery figure')
    figure.forEach(el => {
      el.style.display = "block"
    })
  }

  if(idCategory > 0){
    const figure = document.querySelectorAll('.gallery figure')
    figure.forEach(el => {
      el.style.display = "none"
    })

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
}

getAllWorks()