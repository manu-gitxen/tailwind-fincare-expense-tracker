const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

//  SELECTS the button that opens the modal
const addButton = document.getElementById('add-transaction-btn'); 

//  SELECTS the main hidden container (the backdrop + form area)
const transactionModal = document.getElementById('transactionModal'); 

//SELECTS the button inside the modal that closes it
const closeModalBtn = document.getElementById('closeModalBtn'); 

const transactionForm = document.getElementById('transactionForm');

const amountInput = document.getElementById('amountInput');

// expense field array object

const expenseData = [
    {name:'Rent/Housing',
        percentage : 35,
         color:'bg-green-300',


    },
    {name:'Food and Groceries',
        percentage:20,
        color:'bg-blue-300',

    },
    {name:'Transport',
        percentage:15,
        color:'bg-purple-300'
    },

    {name:'Health',
        percentage:12,
        color:'bg-red-300'
    },
    {name:'Shopping',
        percentage:10,
        color:'bg-yellow-300'
    },
    {name:'Entertainment',
        percentage:17,
        color:'bg-pink-300'
    },
    {name:'Other',
        percentage:2,
        color:'bg-gray-500'
    },

];

// foreach loop 
let htmlContent = '';

const expenseListContainer = document.getElementById('expenseListContainer');


// --- Menu Toggle
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



//SHOW the modal
addButton.addEventListener('click', () => {
    transactionModal.classList.remove('hidden'); // Makes the whole container visible
});

// HIDE the modal: when the Close Button is clicked
closeModalBtn.addEventListener('click', () => {
    transactionModal.classList.add('hidden'); // Hides the container
});

transactionForm.addEventListener('submit', (e) => {
    e.preventDefault(); //  Stops the page from refreshing!

    const amountInput = document.getElementById('amountInput').value;
    const type = document.getElementById('typeInput').value;
    const category = document.getElementById('categoryInput').value;

    const newTransaction = {
    amount: amountInput, 
    type,         
    category   
};

 transactionForm.reset();
 transactionModal.classList.add('hidden')


});

expenseData.forEach((expense)=>{
    const itemHTML= `
                        <div>
                            <div class="flex justify-between"><span>${expense.name}</span><span>${expense.percentage}%</span></div>
                            <div class="h-3 md:h-4 ${expense.color} rounded-full w-[${expense.percentage}%]"></div>
                        </div>
                     
    
    `;
    htmlContent += itemHTML;
});

expenseListContainer.innerHTML = htmlContent;