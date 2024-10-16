const and = (x,y) => x && y ? 1 : 0;
const xor=(x,y)=>x!==y? 1:0;


const halfAdder=(x,y)=> [and(x,y),xor(x,y)];
console.log(halfAdder(1,1))