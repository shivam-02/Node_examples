function sam(p,q,r)
{
var x=0;
while(x<arguments.length)
{
console.log(arguments[x]);
x++;
}
console.log('-----------------------');
}


sam();
sam(1);
sam(1,2);
sam(1,2,3);
sam(1,2,3,4);
sam(1,2,3,4,5)
