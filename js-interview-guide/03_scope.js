function funcA() {
  let a = 1;

  function funcB() {
    let b = 2;

    function funcC() {
      let c = 3;

      console.log('funcC:', a, b, c);
    }

    funcC();
    console.log('funcB:', a, b);
    //  console.log('funcB:', c); //c is not defined
  }

  funcB();
  console.log('funcA:', a);
  //   console.log('funcA:', b, c); //b, c is not defined
}

funcA();
