
function verificar() {
  var name = window.document.querySelector('#typename')
  var country = window.document.querySelector('#typecontry')
  var resdiv = window.document.querySelector('#res')
  var typename = name.value
  var typecountry = country.value

  if (typecountry == 'Brasil') {
      resdiv.innerHTML = `<p>Olá, ${typename}! Você é Brasileir@!</p> `
   } else{
    res.innerHTML = `<p>olá,${typename}! você é <strong>Estrangeir@</strong>! e nasceu no país ${typecountry}</p>`
   }
  
 }
