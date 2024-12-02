
/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (inputPass, inputIcon) =>{
  const input = document.getElementById(inputPass),
        iconEye = document.getElementById(inputIcon)
        
  iconEye.addEventListener('click', () =>{
      // Change password to text
      if(input.type === 'password'){
          // Switch to text
          input.type = 'text'

          // Add icon
          iconEye.classList.add('ri-eye-off-line')
          // Remove icon
          iconEye.classList.remove('ri-eye-line')
      }else{
          // Change to password
          input.type = 'password'
          // Add icon
          iconEye.classList.add('ri-eye-line')
           // Remove icon
           iconEye.classList.remove('ri-eye-off-line')
      }
  })
}

showHiddenPass('password','input-icon')