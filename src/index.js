// console.log('%c HI', 'color: firebrick')

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogImg = document.querySelector('#dog-image-container')
const ul = document.querySelector('ul')
const dropdown = document.querySelector('#breed-dropdown')

let dogArr;

//challenge 1
fetch(imgUrl)
    .then(res => res.json())
    .then(data => renderDog(data))


function renderDog(data){
    data.message.forEach(img => {
       
        

    const dogs = document.createElement('img')
    dogs.src = img 
    dogs.alt = 'dog-img'

    dogImg.appendChild(dogs)

    })
   
}

// challenge 2
fetch(breedUrl)
    .then(res => res.json())
    .then(data => renderBreed(data))

function renderBreed(breeds){
    let dogArr = Object.keys(breeds.message)
    for(const breed in breeds.message){
    
    
     const li = document.createElement('li')
        li.textContent = breed
        li.id = breed 
        li.style.cursor = 'pointer'
        li.addEventListener('click', switchColor)

        ul.append(li)   
    }
    
}

//challenge 3 

function switchColor(e){
    e.target.style.color = 'red'
}


//challenge 4




dropdown.addEventListener('change', event => filterByName(event.target.value))

console.log(dogArr)
function filterByName(name){
    let filterDogs = dogArr.filter(letter => letter[0] === name)
    ul.innerHTML = ""
    filterDogs.forEach(renderBreed)
}