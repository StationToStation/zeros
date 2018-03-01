module.exports = function getZerosCount(number) {
  let count=0;
  do{
    number=Math.floor(number/5);
    count+=number;
  }
  while(number>4)
  return count;
}
