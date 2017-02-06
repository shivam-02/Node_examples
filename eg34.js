var k;
k="God is great";
var p;
p=/GREAT/i;
console.log(p.test(k));
p=/GREAT/;
console.log(p.test(k));
var x;
x="God is great,we are grateful to God.May great god help you."

p=/great/;
console.log(p.test(x));
p=/great/g;
console.log(p.test(x));
