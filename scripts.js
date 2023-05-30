function goBack() {
  history.back();
}

const input = document.querySelector("#artistInput");
function checkMaxLenght() {
  const maxValue = 5;

  if (input.value.length > maxValue) {
    input.style.borderColor = "red";
    console.log(true);
  } else {
    input.style.borderColor = "#edeef0";
    console.log(false);
  }
}
input.addEventListener("input", checkMaxLenght);
