function selectAccordion(index, price) {
    const accordionItems = document.querySelectorAll('.accordion-item');
    const totalPriceEl = document.getElementById('totalPrice');

    // Close all accordion items and remove selected class
    accordionItems.forEach((item, i) => {
    item.classList.remove('open');
    item.classList.remove('selected');
    if (i === index) {
        item.classList.add('open');
        item.classList.add('selected');
    }
    });

    // Updating the total price
    totalPriceEl.textContent = price.toFixed(2);
}

function handleSubmit() {
    // Showing the confirmation page 
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';

    //Hiding the message after a few seconds
    setTimeout(() => {
    confirmationMessage.style.display = 'none';
    }, 3000); // Hides after 3 seconds
}


// Default selection of most polular
window.onload = function() {
    selectAccordion(1, 345);
};
