const pragraphs = document.querySelectorAll('p') 

pragraphs.forEach(function(p){
   if(p.textContent.includes('the') ){
        p.remove()
   }
})