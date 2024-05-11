const marks = 75;

function startProgram() {
  console.log("Program Start");
}

const checkMarks = (marks) => {
  return new Promise((resolve, reject) => {

    if (marks > 80) {
      resolve("Congratulations! You Passed");
    } else {
      reject("Sorry! Better luck next time!");
    }

  })
}

async function isPassed() {
  try {
    await checkMarks(marks);
  } catch (error) {
    console.log(error);
  }
}

startProgram();
isPassed();
console.log("Program is running...");