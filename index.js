// for integers betwee [1, 100] do the following
// 1. for multiples of 15, print "fizzbuzz";
// 2. for multiples of 5 print "buzz";
// 3. for multiples of 3 print "fizz";

function fizzbuzz() {
    for (var i = 1; i <=100; i++) {
        if ( i % 15 === 0) {
            console.log("Fizzbuzz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else if (i % 3 ===0) {
            console.log("fizz");
        } else {
            console.log(i);
        }
    }
}

fizzbuzz();

