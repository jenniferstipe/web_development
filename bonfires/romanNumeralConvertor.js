function convert(num) {

  romanNum = '';
  
  do {
   if (num >= 1000) 
      {
      num -= 1000;
      console.log('remainder: ' + remainder);
      console.log('num: ' + num);
      }
   else if (num >= 500) 
      {
      num -= 500;
      romanNum += 'M';
      console.log('remainder: ' + remainder);
      console.log('num: ' + num);
      }
   else if (num >= 100) 
      {
      num -= 100;
      romanNum += 'C';
       console.log('remainder: ' + remainder);
      console.log('num: ' + num);
      }
   else if (num >= 50) 
      {
      num -= 50;
      romanNum += 'L';
      console.log('remainder: ' + remainder);
      console.log('num: ' + num);
      }
   else if (num >= 10) 
      {
      num -= 10;
      romanNum += 'X';
      console.log('remainder: ' + remainder);
      console.log('num: ' + num);
      }    
    else if (num === 9) 
      {
      num -= 9;
      romanNum += 'IX';
       console.log('remainder: ' + remainder);
      console.log('num: ' + num);
      }        
    else if (num >= 5) 
      {
      num -= 5;
      romanNum += 'V';
       console.log('remainder: ' + remainder);
      console.log('num: ' + num);
      }        
   else if (num >= 1) 
      {
      num -= 1;
      romanNum += 'I';
       console.log('remainder: ' + remainder);
      console.log('num: ' + num);
      }            
  } while (num !== 0);
  
  return romanNum;
}

convert(36);
