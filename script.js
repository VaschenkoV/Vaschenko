
document.getElementById('contactForm').addEventListener('submit', function(event) {  
  event.preventDefault();  
  
  const name = document.getElementById('name').value;  
  const response = document.getElementById('formResponse');  
  response.innerHTML = `<p>Дякуємо, ${name}! Ваше повідомлення надіслано успішно!</p>`;  

  this.reset();  
});  

 
document.querySelectorAll('.faq-question').forEach(item => {  
  item.addEventListener('click', () => {  
      const faqItem = item.parentElement;  
      faqItem.classList.toggle('active');  
  });  
});  