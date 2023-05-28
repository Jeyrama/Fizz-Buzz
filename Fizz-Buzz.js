/*
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:
  If the value is a multiple of 3: use the value "Fizz" instead
  If the value is a multiple of 5: use the value "Buzz" instead
  If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

Note:
  N will never be less than 1.

Example:
  fizzbuzz(3) -->  [1, 2, "Fizz"]
*/


// Solution

function fizzbuzz(n) {
  let i = 1, arr = [];
  while (i <= n) {
    let fizz = (i % 3 == 0);
    let buzz = (i % 5 == 0);
    if (fizz || buzz) {
      arr.push((fizz?"Fizz":"") + (buzz?"Buzz":""));
    }
    else {
      arr.push(i);
    }
    i++;
  }
  return arr;
}

// or