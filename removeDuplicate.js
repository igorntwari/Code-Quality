function removeDuplicates(arr) {
return arr.filter((element, index) => arr.indexOf(element )== index )
}
console.log(removeDuplicates([2,3,4,5,5,5,66,,6,2,3,45]))