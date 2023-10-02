const findMax = (nums) => {
  let max = -Infinity;
  let message = ""
  if(nums !== null && Array.isArray(nums) && nums.length > 0 ){
    nums.forEach(num => {
      if(typeof num === 'number'){
        if(num > max) max = num;
      } else {
        message = "You should provide an array of numbers";
      }
    });
  } else {
      message = "You are not sending an Array";
  }
  
  return message === "" ? max : message ;
}

console.log(findMax());
