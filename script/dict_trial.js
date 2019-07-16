function isDict(v) {
  return typeof v==='object' && v!==null && !(v instanceof Array) && !(v instanceof Date);
}

value = isDict({"schmekles": "[1,2,3]"});
value2 = isDict("meow");
console.log(value);
console.log(value2);
