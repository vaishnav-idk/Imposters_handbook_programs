const halfAdder=(x,y)=>[(x&y),(x^y)];
ans=halfAdder(1,1)
console.log(`Sum is equal to ${ans[0]}`)
console.log(`Sum is carry to ${ans[1]}`)
