const accountId =144553
let accountEmail ="mohitsingh4716@gmail.com"
var accountPassword="12345"
accountCity="Bihar"

/*
 prefer not to use var because of issue in
 block scope and functional scope 
*/

//accountId=121112 const cannot be changed 
accountEmail="mohit@singh.com"
accountPassword="21223"
accountCity="jaipur"

console.log(accountId);

console.table([accountId,accountPassword,accountEmail,accountCity, ])