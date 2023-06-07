let contactForm = document.getElementById('new-person')

contactForm.addEventListener('submit', function (e) {
  e.preventDefault()
  
  const nameInputField = document.getElementById('name')
  const passwordInputField = document.getElementById('password')
 

  const retrievedName = nameInputField.value
  const retrievedPassword = passwordInputField.value


  const newContact = {
    name: retrievedName,
    password: retrievedPassword,
   
  }

  console.log('CONTATTO INSERITO', newContact)
  
  let newContactCard = document.createElement('div')
 
  newContactCard.classList.add('contact-card')
  
  newContactCard.innerHTML = `
    <p>${retrievedName} ${retrievedPassword}</p>
   
    <button>ELIMINA</button>
  `

 
  const savedContactsDiv = document.getElementById('saved-contacts')
  savedContactsDiv.appendChild(newContactCard)

  
  const allTheDeleteButtons = document.querySelectorAll('.contact-card button')
 
  allTheDeleteButtons.forEach((button) => {
  
    button.addEventListener('click', function (e) {
     
      let buttonIJustClicked = e.target
      
      let cardToRemove = buttonIJustClicked.parentElement
     
      cardToRemove.remove()
    })
  })


  nameInputField.value = ''
  passwordInputField.value = ''
  
})