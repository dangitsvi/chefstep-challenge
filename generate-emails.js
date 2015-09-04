module.exports = function generateEmails(num) {
  var emailList = [];
  var duplicates = [];
  for(var i = 0; i < Math.floor(num/2); i++) {
    var email = "dummy" + i + "@dummymail.com";
    emailList.push(email);
    duplicates.push(email);
  }
  return(emailList.concat(duplicates));
}
