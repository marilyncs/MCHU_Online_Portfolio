jQuery(function ($) {
  let decodedEmail = atob('bWFyaWx5bi5uLmNodUBnbWFpbC5jb20=');
  $('#email-address').html('<a href="mailto:' + decodedEmail + '">' + decodedEmail + '<a/>');
});
