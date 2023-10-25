// Write a function that checks the level of nesting of an array.
// Then, use that function to flatten the array into a single-dimensional array.

function CountingNesting(arr) {
    let levels = 0;
    
    // Check if arr is an array
    if (Array.isArray(arr)) {
      for (const item of arr) {
        if (Array.isArray(item)) {
          const levelsFromChild = 1 + CountingNesting(item);
          if (levelsFromChild > levels) {
            levels = levelsFromChild;
          }
        }
      }
    }
    
    return levels;
  }
  
  function flattenArray(arr) {
    let result = arr.flat(Infinity)
    return result
  }
  
  const node = [1, [2, [3, 4], 5], 6];
  let result = CountingNesting(node);
  console.log(`Deepest: ${result}`);
  
  const flatArray = flattenArray(node);
  console.log("Flattened Array:", flatArray);
  