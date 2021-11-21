function reverseString(s) {
    try {
      console.log(s.split("").reverse().join(""));
    } catch {
      console.log("s.split is not a function \n" + parseInt(s));
    }
  }
  