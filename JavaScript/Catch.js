const number = "1000a";

try {

    if (isNaN(number)) {
        throw "Given is a not a number!!";
    } else {
        let divide = number / 1000;
        console.log(divide);
    }

} catch (error) {

    console.log(error);
    // console.log('Number can not divided by 0');

} finally {

    console.log("Executing for nothing!! I'm useless!!");

}