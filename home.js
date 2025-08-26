const validPin = 12345

// fucntion to get input values (reusable function)
function getInputValueNumber(id) {
    const inputValue = parseInt(document.getElementById(id).value);
    return inputValue;
}

function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
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

    })


// cashout money feature
document.getElementById('btn-withdraw').addEventListener('click', function (e) {
    e.preventDefault
    const withdrawAmount = getInputValueNumber('withdraw-amount');
    const availableBlance = parseInt(document.getElementById('available-blance')
        .innerText)

    const totalNewAvailableBlance = availableBlance - withdrawAmount;

    document.getElementById('available-blance').innerText = totalNewAvailableBlance;


})



// Toggling features
// w add money
document.getElementById('w-add-money')
    .addEventListener('click', function () {
        const forms = document.getElementsByClassName('form');
        for (const form of forms) {
            form.style.display = 'none';
        }
        document.getElementById('add-money-parent').style.display = 'block';

    })

// w chasout
document.getElementById('w-cashout')
    .addEventListener('click', function () {
        const forms = document.getElementsByClassName('form');
        for (const form of forms) {
            form.style.display = 'none';
        }

        document.getElementById('cashout-parent').style.display = 'block';

    })
// w send money
document.getElementById('w-send-money').addEventListener('click', function () {


    const forms = document.getElementsByClassName('form');
    for (const form of forms) {
        form.style.display = 'none';
    }
    document.getElementById('send-money-parent').style.display = 'block';

})

//w get bonus
document.getElementById('w-get-bonus').addEventListener('click', function () {
    
      const forms = document.getElementsByClassName('form');
    for (const form of forms) {
        form.style.display = 'none';
    }
    document.getElementById('get-bonus-parent').style.display = 'block';
})

// w pay bill
document.getElementById('w-pay-bill').addEventListener('click', function () {
    
      const forms = document.getElementsByClassName('form');
    for (const form of forms) {
        form.style.display = 'none';
    }
    document.getElementById('pay-bill-parent').style.display = 'block';
})

// w transaction
document.getElementById('w-transaction').addEventListener('click', function () {
    
      const forms = document.getElementsByClassName('form');
    for (const form of forms) {
        form.style.display = 'none';
    }
    document.getElementById('transaction-parent').style.display = 'block';
})

