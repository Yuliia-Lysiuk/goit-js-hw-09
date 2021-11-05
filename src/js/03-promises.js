import Notiflix from 'notiflix';

const ref = {
  form: document.querySelector("form"),
}



ref.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = {};
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => inputValue[name] = Number(value));
  
  ref.form.reset()

  for (let index = 0; index < inputValue.amount; index++) {
     const position = index + 1;
    const delayEl = inputValue.delay + (inputValue.step * index);
    onShowPromise(position, delayEl);
  }
  
})

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve) {
      resolve({position, delay});
    } else {
      reject({position, delay});
    }
  }, delay);
  
});
}

function onShowPromise(position, delay) {
  createPromise(position, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}