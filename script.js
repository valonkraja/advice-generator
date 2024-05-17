const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");

const getAdvice = async () => {
  try {
    const advicePromise = await fetch("https://api.adviceslip.com/advice");
    const adviceObject = await advicePromise.json();
    adviceId.innerHTML = `ADVICE #${adviceObject.slip.id}`;
    adviceText.innerHTML = adviceObject.slip.advice;
    console.log(adviceObject.slip.advice);
  } catch (error) {
    return error;
  }
};

getAdvice();
