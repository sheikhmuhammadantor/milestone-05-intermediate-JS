function outer() {
    let x = 10; // `x` is in the scope of `outer`
    
    return function inner() {
        x++;
    //   return x; // `inner` can access `x` from `outer`
    console.log(x);
    }
    
    // inner(); // Prints 10
    // console.log(x);
  }
  
  outer();
  console.log(outer());
//   console.log(inner());
//   inner();
//   inner();

let a = outer();
a();
a();
a();
a();