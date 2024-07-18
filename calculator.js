// Use insert() function to insert the number in textview.
function insert(num) {
document.aa.answer.value = document.aa.answer.value + num;
}

// Use equal() function to return the result based on passed values.
	function equal(){
		var exp = document.aa.answer.value;
		if(exp){
		document.aa.answer.value = eval(exp)
		}
	}
/* Here, we create a backspace() function to remove the number at the end of the numeric series in textview. */
function backspace(){
var exp = document.aa.answer.value;
document.aa.answer.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */
}
	