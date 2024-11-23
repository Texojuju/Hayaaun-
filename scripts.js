// Mahsulotlarni savatga qo'shish
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Mahsulot savatga qo\'shildi!');
  });
});

// Formani yuborish
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Saytni qayta yuklanishini oldini olish
  alert('Xabaringiz yuborildi! Rahmat!');
});