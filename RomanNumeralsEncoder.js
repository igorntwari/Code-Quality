// this approach is called base 10 and loop up 
// first i solved this endocer as simple as the way you could do it in mathematical way 
// i created ones numerica values, then i created tens values, later hundreds value and after thousands 
//  if number is in thousands i divided it by 1000 and then rounds it to nearest value 
// if number  is in hundreds i first transform  the number in 1000 then divideit by 100 and rounds it to the nearest high value
// if number is in tens i first transform  into 100s then divide it by 10 and rounds it to the nearest highest value
// id number is in ones i just turn it into ones and the

function solution(number){
    let ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
         tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
         hundreds = [ "", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
         thousands = ["", "M", "MM", "MMM"];
     return thousands[Math.floor(number / 1000)] +
            hundreds[Math.floor((number % 1000) / 100)] +
            tens[Math.floor((number % 100) / 10)] +
            ones[number % 10];
   }