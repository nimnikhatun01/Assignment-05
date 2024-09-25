


const donateNow =document.getElementById('Donate-now');
donateNow.addEventListener('click',function(){
    const donationAmount =parseFloat(document.getElementById('donation-amount').value );
    
   const balance = document.getElementById('account-amount').innerText;
   console.log(balance);

   

 const newBalanceAdd = parseFloat(donationAmount);
 const balanceNumber = parseFloat(balance);
const newBalance = newBalanceAdd - balanceNumber;
 console.log(newBalance)

 document.getElementById('account-amount').innerText = newBalance
   
})

