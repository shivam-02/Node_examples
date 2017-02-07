var x,y;
x="This is coolest programming stuff";
y="That is coolest programming language";
p=/(?:STUFF|LANGUAGE)/;
console.log(p.exec(x));
console.log(p.exec(y));
p=/(?:STUFF|LANGUAGE)$/i;
console.log(p.exec(x));
console.log(p.exec(y));
