// there's many ways to solve this challenge but the best and easy way is using a method called  
// return number.toLocaleString() which 
// but i used the following regex which checks 
//a positive one to look for any point in the string that has a multiple of 3 digits in a row after it,
// a negative assertion to make sure that point only has exactly a multiple of 3 digits. The replacement expression puts a comma there

const numberFormat = (number)=> {
    //Your code here
      // this regex checks every 3 consective numbers space and adds comma between them
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  console.log(numberFormat(233223778))