var k="God is great";
console.log(k.search("great"));
console.log(k.search("GREAT"));
var p=new RegExp("GREAT","i");
console.log(k.search(p));
