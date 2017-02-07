var p=/Great/ig;
var x="God is great,we are thankful for his greatness";
var m;
m=p.exec(x);
console.log(m);
console.log(p.lastIndex);
m=p.exec(x);
console.log(m);
console.log(p.lastIndex);
