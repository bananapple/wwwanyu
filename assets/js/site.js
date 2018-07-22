var copyEmail = document.querySelector('#copyBtn');  
copyEmail.addEventListener('click', function(event) {  
  var emailTxt = document.querySelector('#email');  
  var range = document.createRange();  
  range.selectNode(emailTxt);  
  window.getSelection().addRange(range);
  try {  
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
    console.log('Copy email command was ' + msg);  
    } catch(err) {  
      console.log('Oops, unable to copy');  
    }
  window.getSelection().removeAllRanges();  
});

$('.carousel').carousel({
    interval: 2400
  })