function sumItems(array) {
  // Sum all the numbers in the array
  var sum = 0;
  array.forEach(element => {
    if (Array.isArray(element)) {
      sum += sumItems(element);
    }
    else {
      sum += element;
    }
  });
  return sum;
}
console.log(sumItems([2,[3, 4],4,5,6]));

module.exports = sumItems;