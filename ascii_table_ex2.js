const AsciiTable = require("ascii-table/ascii-table");

const xor=(x,y)=>x!==y? 1:0;
const equ=(x,y)=>x===y?1:0;
const imp = (x,y) => x ? y : 1;

const ascii=(op,fn)=>
{
	const table=new AsciiTable(`${op}`)
	table.addRow(0,0,fn(0,0))
	table.addRow(0,1,fn(0,1))
	table.addRow(1,0,fn(1,0))
	table.addRow(1,1,fn(1,1))
	console.log(table.toString())
}

ascii("XOR",xor)