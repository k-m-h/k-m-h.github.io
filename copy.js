


var copyPhoneBtn = document.querySelector('.js-phonecopybtn');
copyPhoneBtn.addEventListener('click', function(event) {
  // Select the email link anchor text
  var phoneLink = document.querySelector('.js-phonelink');
  var range = document.createRange();
  range.selectNode(phoneLink);
  window.getSelection().addRange(range);

  try {
    // Now that we've selected the anchor text, execute the copy command
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copy phone command was ' + msg);
  } catch(err) {
    console.log('Oops, unable to copy');
  }

  // Remove the selections - NOTE: Should use
  // removeRange(range) when it is supported
  window.getSelection().removeAllRanges();
});
