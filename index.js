const squareOur = document.querySelector(".wrapper__ball");
const maxWidth = document.documentElement.clientWidth -84;
const maxHeight = document.documentElement.clientHeight -84;

let topSquare = maxHeight / 2;
let rightSquare = maxWidth / 2;

// console.log(squareOur);
function initial() {
  // topSquare = 100;
  // rightSquare = 500;

  // console.log(document.documentElement.clientWidth );
  // console.log(document.documentElement.clientHeight );

  squareOur.style.top = `${topSquare}px`;
  squareOur.style.left = `${rightSquare}px`;
}

function moveSquare(event) {
  // console.log(event);
  if (event.code === "ArrowUp") {
    if (topSquare >= 0) {
      topSquare = topSquare - 10;
    } else {
      topSquare = topSquare;
    }
    squareOur.style.top = `${topSquare}px`;
    console.log(topSquare);
  }

  if (event.code === "ArrowDown") {
    if (topSquare >= maxHeight) {
      topSquare = topSquare;
    } else {
      topSquare = topSquare + 10;
    }
    squareOur.style.top = `${topSquare}px`;
    console.log(topSquare);
  }

  if (event.code === "ArrowRight") {
    if (rightSquare > maxWidth) {
      rightSquare = rightSquare;
    } else {
      rightSquare = rightSquare + 10;
    }
    squareOur.style.left = `${rightSquare}px`;
    console.log(rightSquare);
  }
  if (event.code === "ArrowLeft") {
    if (rightSquare > 0) {
      rightSquare = rightSquare- 10;
    } else {
      rightSquare = rightSquare;
    }
    squareOur.style.left = `${rightSquare}px`;
    console.log(rightSquare);
  }
}

document.addEventListener("keydown", (event) => moveSquare(event));

initial();

/*
ArrowLeft

const helloFunction = (peremennay) => {
   console.log(peremennay)
}

*/
