const validPin = 12345
const transactionData = []

// fucntion to get input values (reusable function)
function getInputValueNumber(id) {
    const inputValue = parseInt(document.getElementById(id).value);
    return inputValue;
}

function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

// function to toggle 
function handleToggle(id) {
    const forms = document.getElementsByClassName('form');

    for (const form of forms) {
        form.style.display = 'none';
    }

    document.getElementById(id).style.display = 'block';

}

// function for selected button style
function selectedBtnStyle(id) {

    const formBtns = document.getElementsByClassName('Form-btn')

    for (const btn of formBtns) {
        btn.classList.remove('border-[#0874f2]', 'bg-[#f2f8fe]')
        btn.classList.add('border-gray-300')
    }
    document.getElementById(id).classList.remove('border-gray-300')
    document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#f2f8fe]')

}

// Add money feature
document.getElementById('btn-add-money')
    .addEventListener('click', function (e) {
        e.preventDefault()

        const bank = getInputValue('bank');
        const accountNumber = document.getElementById('account-number').value;
        const addAmount = getInputValueNumber('add-amount');
        const pin = getInputValueNumber('add-pin');

        const availableBlance = parseInt(document.getElementById('available-blance')
            .innerText)

        if (accountNumber.length < 11) {
            alert('Provide a valid account number to continue')
            return;
        }

        if (validPin !== pin) {
            alert('Pin number is not correct')
            return;
        }

        const totalBlance = availableBlance + addAmount;

        // Now set the new amout to the page

        document.getElementById('available-blance').innerText = totalBlance
        // fro add money transaction 
        
        const data = {
            name: "Add Money",
            date: new Date().toLocaleTimeString()
        }
        transactionData.push(data);
        
        
    })


// cashout money feature
document.getElementById('btn-withdraw').addEventListener('click', function (e) {
    e.preventDefault
    const withdrawAmount = getInputValueNumber('withdraw-amount');
    const availableBlance = parseInt(document.getElementById('available-blance')
        .innerText)

    const totalNewAvailableBlance = availableBlance - withdrawAmount;

    document.getElementById('available-blance').innerText = totalNewAvailableBlance;

    // cashout transaction data
    const data = {
            name: "Cash Out",
            date: new Date().toLocaleTimeString()
        }
        transactionData.push(data);
})


// Transaction Histroy Feature
document.getElementById('w-transaction').addEventListener('click', function () {
    const trasnactionContainer = document.getElementById('transaction-container');
    trasnactionContainer.innerText = ''

    for (const data of transactionData) {
        const div = document.createElement('div')
        div.innerHTML = `  <div class="flex items-center justify-between bg-white px-3 py-4 rounded-md mx-3 mt-3">
        <div class="flex gap-4 ">
          <div class="p-3  rounded-full bg-[#f4f5f7]"><img src="./assets/transaction1.png" alt="transaction Icon"></div>
          <div>
            <h2>${data.name}</h2>
            <p>${data.date}</p>
          </div>
        </div>
        <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
      </div>
      `
        
        trasnactionContainer.appendChild(div)
        
        
    }


   
    
})


// Toggling features

// w add money
document.getElementById('w-add-money')
    .addEventListener('click', function () {

        handleToggle('add-money-parent');
        // selected button style
        selectedBtnStyle('w-add-money');
    })

// w chasout
document.getElementById('w-cashout')
    .addEventListener('click', function () {

        handleToggle('cashout-parent');
        // selected button style
        selectedBtnStyle('w-cashout');
    })
// w send money
document.getElementById('w-send-money').addEventListener('click', function () {

    handleToggle('send-money-parent');

    // selected button style
    selectedBtnStyle('w-send-money');


})

//w get bonus
document.getElementById('w-get-bonus').addEventListener('click', function () {

    handleToggle('get-bonus-parent');

    // selected button style
    selectedBtnStyle('w-get-bonus');
})

// w pay bill
document.getElementById('w-pay-bill').addEventListener('click', function () {

    handleToggle('pay-bill-parent');

    // selected button style
    selectedBtnStyle('w-pay-bill');
})

// w transaction
document.getElementById('w-transaction').addEventListener('click', function () {

    handleToggle('transaction-parent');

    // selected button style
    selectedBtnStyle('w-transaction');
})

