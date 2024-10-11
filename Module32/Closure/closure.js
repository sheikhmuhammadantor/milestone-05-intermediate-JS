if (2) {

    if (2) {

        function stapWatch() {
            return function () {
                let count = 0;
                count++
                return count;
            }
        }

        // const watch1 = stapWatch();
        // const watch2 = stapWatch();
        // const watch3 = stapWatch();

        // console.log(watch1());
        // console.log(watch2());
        // console.log(watch3());
        // console.log(watch3());
        // console.log(watch3());
        // console.log(watch2());
        // console.log(watch2());
        // console.log(watch2());
        // console.log('Hello!')

        // console.log(watch3());
        // console.log(watch2());
        // console.log(watch1());


    }




    const watch1 = stapWatch();
    const watch2 = stapWatch();
    const watch3 = stapWatch();

    console.log(watch1());
    console.log(watch2());
    console.log(watch3());
    console.log(watch3());
    console.log(watch3());
    console.log(watch2());
    console.log(watch2());
    console.log(watch2());
    console.log('Hello!')

    console.log(watch3());
    console.log(watch2());
    console.log(watch1());



}

// const watch1 = stapWatch();
// const watch2 = stapWatch();
// const watch3 = stapWatch();

// console.log(watch1());
// console.log(watch2());
// console.log(watch3());
// console.log(watch3());
// console.log(watch3());
// console.log(watch2());
// console.log(watch2());
// console.log(watch2());
// console.log('Hello!')

// console.log(watch3());
// console.log(watch2());
// console.log(watch1());
