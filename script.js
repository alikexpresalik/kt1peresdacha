const themeToggleBtn = document.getElementById('theme-toggle');
const cartCountSpan = document.getElementById('cart-count');
const buyButtons = document.querySelectorAll('.btn-buy');
const removeButtons = document.querySelectorAll('.btn-remove');
const faqQuestions = document.querySelectorAll('.faq-question');
const feedbackForm = document.getElementById('feedback-form');
let cartItems = 0;
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartItems++;
        cartCountSpan.textContent = cartItems;
    });
});


removeButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (cartItems > 0) {
            cartItems--;
            cartCountSpan.textContent = cartItems;
        }
    });
});

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const parent = question.parentElement;
        parent.classList.toggle('active');
    });
});



feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Заявка отравлена!');
    feedbackForm.reset();
});