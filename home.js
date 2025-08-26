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
document.getElementById('btn-withdraw').addEventListener('click', function(e) {
    e.preventDefault
    const withdrawAmount = getInputValueNumber('withdraw-amount');
    const availableBlance = parseInt(document.getElementById('available-blance')
        .innerText)

    const totalNewAvailableBlance = availableBlance - withdrawAmount;
    
    document.getElementById('available-blance').innerText = totalNewAvailableBlance;
    
    
})



// Toggling features
document.getElementById('w-add-money')
    .addEventListener('click', function () {
        document.getElementById('cashout-parent').style.display = 'none';
        document.getElementById('send-money-parent').style.display = 'none';

        document.getElementById('add-money-parent').style.display = 'block';
        
    })
    
    
    document.getElementById('w-cashout')
        .addEventListener('click', function () {
            document.getElementById('add-money-parent').style.display = 'none';
            document.getElementById('send-money-parent').style.display = 'none';

            document.getElementById('cashout-parent').style.display = 'block';
            
        })

document.getElementById('w-send-money').addEventListener('click', function () {
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('cashout-parent').style.display = 'none';
    document.getElementById('send-money-parent').style.display = 'block';
})




