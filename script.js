
function verificar() {
 let name = window.document.querySelector('#typename')
 let country = window.document.querySelector('#typecontry')
 let resdiv = window.document.querySelector('#res')
 let typename = name.value
 let typecountry = country.value

  if (typecountry == 'Brasil') {
      resdiv.innerHTML = `<p>Olá, ${typename}! Você é Brasileir@!</p> `
   } else{
    res.innerHTML = `<p>olá,${typename}! você é <strong>Estrangeir@</strong>! e nasceu no país ${typecountry}</p>`
   }
  
 }