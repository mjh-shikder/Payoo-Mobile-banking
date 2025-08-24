const validPin = 12345

document.getElementById('btn-add-money')
    .addEventListener('click', function (e) {
        e.preventDefault()
        
        const bank = document.getElementById('bank').value;
        const accountNumber = document.getElementById('account-number').value;
        const addAmount = parseInt(document.getElementById('add-amount').value);
        const pin = parseInt(document.getElementById('add-pin').value) ;

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


// Toggling features
document.getElementById('w-add-money')
    .addEventListener('click', function () {
        document.getElementById('cashout-parent').style.display = 'none';

        document.getElementById('add-money-parent').style.display = 'block';
        
    })
    
    
    document.getElementById('w-cashout')
        .addEventListener('click', function () {
            document.getElementById('add-money-parent').style.display = 'none';

            document.getElementById('cashout-parent').style.display = 'block';
                
            
            
            
    
            
        })

