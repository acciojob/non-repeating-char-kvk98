function firstNonRepeatedChar(str) {
 // Write your code here
	for (let i = 0; i < str.length; i++) {
		for (let j = i+1; j < str.length; j++) {
			if (str[i]!=str[j]) {
				continue;
			}
			else {
				break;
			}
		}
		return str[i];
	}
	return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
