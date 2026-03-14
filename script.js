// Simple dummy add to cart alert
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});