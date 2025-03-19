// function checkForm() {
//    const form = document.getElementById('contactForm');
   
//    if (form.querySelector('#name').value === '' || form.querySelector('#email').value === '') {
//        alert('Заполните форму и согласитесь на обработку персональных данных.');
//        return false;
//    }
   
//    alert('Данные отправлены. Спасибо!');
//    return true;
// }

// FormData.submit()
 
function checkFields() {
   var nameField = document.getElementById('name');
   var emailField = document.getElementById('email');

   if (!nameField.value || !emailField.value) {
       alert('Заполните все поля!');
   } else {
       alert('Данные отправлены!');
   }
}