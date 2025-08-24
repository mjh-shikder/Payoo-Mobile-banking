document.getElementById('btn-add-money')
    .addEventListener('click', function (e) {
        e.preventDefault()
        
        const bank = document.getElementById('bank').value;
        const accountNumber = parseInt(document.getElementById('account-number').value);
        const addAmount = parseInt(document.getElementById('add-amount').value);
        const pin = parseInt(document.getElementById('add-pin').value) ;

        const availableBlance = parseInt(document.getElementById('available-blance')
        .innerText)

        const totalBlance = availableBlance + addAmount;
        
        // Now set the new amout to the page

        document.getElementById('available-blance').innerText = totalBlance
        
})