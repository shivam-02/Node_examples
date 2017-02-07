var x,y;
x="This is coolest programming stuff";
y="That is coolest programming stuff";
p=/(?:This)/;
console.log(p.exec(x));
console.log(p.exec(y));
