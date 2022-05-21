const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const email = document.getElementById('email')
const userError = document.getElementById('usererror')
form.addEventListener('submit', (e) => {
    let messages = []

    if (password.value.length <= 6) {
      messages.push('Password must be longer than 6 characters')
    }
  
    if (password.value.length >= 20) {
      messages.push('Password must be less than 20 characters')
    }
  
    if (password.value === 'password') {
      messages.push('Password cannot be password')
    }
  
    if (messages.length > 0) {
      e.preventDefault()
      errorElement.innerText = messages.join(', ')
    }
  })
form.addEventListener('submit', (e) => {
let messages = []

if (username.value.length <= 3) {
    messages.push('Username must be longer than 3characters')
    if (messages.length > 0) {
        e.preventDefault()
        userError.innerText = messages.join(', ')
      }
}
})
