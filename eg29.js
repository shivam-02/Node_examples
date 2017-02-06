function sam(p,q,r)
{
if(p===undefined && q===undefined && r===undefined)
{
console.log('No arguments are defined');
}
else if(q===undefined && r===undefined)
{
console.log(p);
}
else if(r===undefined)
{
console.log(p+','+q);
}
else
{
console.log(p+','+q+','+r);
}
}
sam();
sam(1);
sam(1,2);
sam(1,2,3);
