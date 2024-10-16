const AsciiTable = require("ascii-table/ascii-table")

const and = (x,y) => x && y ? 1 : 0;

const or = (x,y) => x || y ? 1 : 0;

const not = x => x ? 0 : 1;
const ascii=(op,fn)=>{
	const tbl = new AsciiTable(`${op}`)
	tbl
	.addRow(0,0,fn(0,0))
	.addRow(0,1,fn(0,1))
	.addRow(1,0,fn(1,0))
	.addRow(1,1,fn(1,1))
	console.log(tbl.toString())
	
}

ascii("AND",and);
ascii("OR",or);