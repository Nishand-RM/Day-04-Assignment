//odd numbers
const arr = [1 , 2, 4, 9, 12, 13, 20];
const odd = [];
arr.forEach((num) => num % 2 === 1 && odd.push(num));
console.log(odd);

//prime numbers
let prime = (num) => {
  if(num >2)
  {
    for(var i=2;i<num-1;i++)
    {
      if(num % i == 0)
      {
        console.log("not prime number");
      }
      else
      {
        console.log("prime number");
      }
    }
  }
  return num;
}
  console.log(prime(7));

//sum of arrays
let sum1 =0;
let sum = (arr) => {
  for(var i=0;i<arr.length;i++)
  {
    sum1+= arr[i];
  }
  return sum1;

}
  console.log(sum([3,4,5,6]));

//palindrome

let pal = (arr) => {
  const palindromes = [];
    for (const element of arr) {
      const reversedElement = element.split("").reverse().join("");
      if (element === reversedElement) {
        palindromes.push(element);
      }
    }
    return palindromes;
  }
  console.log(pal(["mom","cat"]));
  
  //title caps
  
  let res =(str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  console.log(res("hi hello everyone"));
