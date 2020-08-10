$.getJSON( "https://api.coindesk.com/v1/bpi/currentprice/usd.json", function( data) {
   var amountInBtc = 0.005; //convert 0.005 btc to usd
   var exchangeRate = parseInt(data.bpi.USD.rate_float);
   var amount = amountInBtc * exchangeRate;
   console.log(amount);
});