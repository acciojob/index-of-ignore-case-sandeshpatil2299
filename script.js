function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let s= s1.toLowerCase();
	let t= s2.toLowerCase();

	for(let i=0; i<=s.length - t.length; i++) {
		if(s[i] === t[0]) {
			if(s.substring(i, i+t.length) === t) return i;
		}
	}

	return -1;
}

// Please do not change the code below
// const s1 = prompt("Enter s1:");\
// const s2 = prompt("Enter s2:");
// alert(indexOfIgnoreCase(s1, s2));
