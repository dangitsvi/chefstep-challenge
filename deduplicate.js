module.exports  = function deduplicateEmails(arr) {
  var hash = {};
  var uniqueArr = [];
  var duplicatesArr = [];

  for(var i = 0; i < arr.length; i++) {
    if(!hash.hasOwnProperty(arr[i])) {
      hash[arr[i]] = null;
      uniqueArr.push(arr[i]);
    } else {
      duplicatesArr.push(arr[i]);
    }
  }
  return({uniqueArr: uniqueArr, duplicatesArr: duplicatesArr});
}
