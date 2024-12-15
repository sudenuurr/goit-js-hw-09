const formItem = document.querySelector('.feedback-form');
const mailInput = document.querySelector('#exampleFormControlInput1');
const messageInput = document.querySelector('#exampleFormControlTextarea1');

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedData) {
  mailInput.value = savedData.email || '';
  messageInput.value = savedData.message || '';
}

formItem.addEventListener('input', () => {
  const formData = {
    email: mailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

formItem.addEventListener('submit', event => {
  event.preventDefault();

  if (mailInput.value && messageInput.value) {
    // localStorage.removeItem('feedback-form-state');
    formItem.reset();
    alert('Form başarıyla gönderildi!');
  } else {
    alert('Lütfen gerekli alanları doldurunuz...');
  }
});
