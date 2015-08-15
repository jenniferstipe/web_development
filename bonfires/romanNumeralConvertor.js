function convert(num) {

  remainder = 0;
  
  console.log(num.length);
  
  do {
   if (num > 1000) 
      {
      remainder = num % 1000;
      num -= 1000;
      console.log(remainder);
      console.log(num);
      }
   else if (num > 500) 
      {
      remainder = num % 500;
      num -= 500;
      console.log(remainder);
      console.log(num);
      }
   else if (num > 100) 
      {
      remainder = num % 100;
      num -= 100;
      console.log(remainder);
      console.log(num);
      }
   else if (num > 50) 
      {
      remainder = num % 50;
      num -= 50;
      console.log(remainder);
      console.log(num);
      }
   else if (num > 10) 
      {
      remainder = num % 10;
      num -= 10;
      console.log(remainder);
      console.log(num);
      }    
   else if (num > 5) 
      {
      remainder = num % 5;
      num -= 5;
      console.log(remainder);
      console.log(num);
      }        
   else if (num >= 1) 
      {
      remainder = num % 1;
      num -= 1;
      console.log(remainder);
      console.log(num);
      }            
  } while (num !== 0);
  
  return num;
}

convert(36);
