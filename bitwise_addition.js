const add = function(x, y) {
	// Iterate till there is no carry
	let carry_bit = 0;
	
	do {
	  // Using a bitwise AND will tell us if there is a carry bit somewhere
	  carry_bit = x & y;
	  console.log(`carry bit ${carry_bit.toString(2)}`)
	  
	  // This is the XOR addition, which is our sum
	  x = x ^ y;
	  console.log(`sum bit ${x.toString(2)}`)
	  
	  // If we have a carry bit, reset y to the shifted value
	  // If carry is 0, this will be 0
	  y = carry_bit << 1;
	} while (carry_bit);
	
	return x;
  }
  
  console.log(add(10,11));  // Output: 142
  