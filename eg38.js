var p=/Great/ig;
var x="God is great,we are thankful for his greatness";
var k;
while(true)
{
k=p.exec(x);
if(!k)break;
console.log(k);
}
