const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

// 1. SELECTS the button that opens the modal
const addButton = document.getElementById('add-transaction-btn'); 

// 2. SELECTS the main hidden container (the backdrop + form area)
const transactionModal = document.getElementById('transactionModal'); 

// 3. SELECTS the button inside the modal that closes it
const closeModalBtn = document.getElementById('closeModalBtn'); 

const transactionForm = document.getElementById('transactionForm');

const amountInput = document.getElementById('amountInput');


// --- Menu Toggle Logic  ---
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
});

document.addEventListener('click', (e) => {
    if (window.innerWidth < 1024 &&
        !sidebar.contains(e.target) &&
        !menuToggle.contains(e.target) &&
        !sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.add('-translate-x-full');
    }
});
// -------------------------------------


// 4. SHOW the modal: when the Add Button is clicked
addButton.addEventListener('click', () => {
    transactionModal.classList.remove('hidden'); // Makes the whole container visible
});

// 5. HIDE the modal: when the Close Button is clicked
closeModalBtn.addEventListener('click', () => {
    transactionModal.classList.add('hidden'); // Hides the whole container
});

transactionForm.addEventListener('submit', (e) => {
    e.preventDefault(); //  Stops the page from refreshing!

    const amountInput = document.getElementById('amountInput').value;
    const type = document.getElementById('typeInput').value;
    const category = document.getElementById('categoryInput').value;

    const newTransaction = {
    amount: amountInput, // Key-value pair (note the comma!)
    type,          // Key-value pair
    category   // Key-value pair
};
console.log('✨ New Transaction Data:', newTransaction);

});