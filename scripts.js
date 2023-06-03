function goBack() {
  history.back();
}

const input = document.querySelector("#artistInput");
function checkMaxLenght() {
  const maxValue = 20; //FOR EXAMPLE

  if (input.value.length > maxValue) {
    input.style.borderColor = "red";
  } else {
    input.style.borderColor = "#edeef0";
  }
}
input.addEventListener("input", checkMaxLenght);
