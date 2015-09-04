module.exports  = function deduplicateEmails(arr) {
  var hash = {};
  var uniqueArr = [];
  var duplicatesArr = [];

  for(var i = 0; i < arr.length; i++) {
    if(!hash.hasOwnProperty(arr[i].toLowerCase())) {
      hash[arr[i].toLowerCase()] = null;
      uniqueArr.push(arr[i].toLowerCase());
    } else {
      duplicatesArr.push(arr[i]);
    }
  }
  return({uniqueArr: uniqueArr, duplicatesArr: duplicatesArr});
}
