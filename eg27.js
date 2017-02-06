var x;
x=function(r)
{
return r(10,20);
};
var y=x(function(p,q)
{
return p+q;
});
console.log(y);
