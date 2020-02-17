// for integers betwee [1, 100] do the following
// 1. for multiples of 15, print "fizzbuzz";
// 2. for multiples of 5 print "buzz";
// 3. for multiples of 3 print "fizz";

for(var i = 1; i < 101; i++) {
    var multipleOfThree = i % 3 === 0;
    var multipleOfFive = i % 5 === 0;
    if (multipleOfThree && multipleOfFive) {
        console.log("fizzbuzz");
    } else if(i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}
