console.log("Dont get fooled! running...")


function changePrice(){
    
    var text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');
    
    var prices = [];
    
    for(let i=0; i < text.length; i++) {
        var arr = text[i].innerHTML.match(/\$((?:\d|\,)*\.?\d+)/g) || []
    
        if(arr.length != 0){
            arr.forEach(element => {
                prices.push(element)
            });
        }
           
    }
    
    console.log(prices)
    
    prices.forEach(element => {
        for(let i=0; i < text.length; i++) {
            if(text[i].innerHTML.includes(element)) {
                var number =  element.slice(1)
                var newPrice = Math.round(Number(number)).toString()
                text[i].innerHTML = text[i].innerHTML.replace(number, newPrice)
            }
        }
    });
}

changePrice();