let quote = document.querySelector('.quote')//element for show quote--
let button = document.getElementById('button')


button.addEventListener('click', ()=>{
    fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes/1")//API call--
        .then(response=>response.json())
        .then(data=>{
                                                    //element html into div quote--
                    quote.innerHTML = `<p>"${data[0].quote}"</p>         
                                        <i>author: ${data[0].author}</i>
        `
       
})


    quote.classList.remove('display')//this element is hidden for display class, so remove this class--
    setTimeout(()=>{
        quote.classList.add('display')//insert class "display" for hidden element--
        while (quote.firstChild) {
            quote.removeChild(quote.firstChild);//delete sons--
          }
    },5000)
})




    



