/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = function() {
  //write your code here

  const campo1 = document.getElementById("campo1");
  const campo2 = document.getElementById("campo2");
  const campo3 = document.getElementById("campo3");
  const campo4 = document.getElementById("campo4");
  const campo5 = document.getElementById("campo5");
  const campo6 = document.getElementById("campo6");
  const campo7 = document.getElementById("campo7");
  const campo8 = document.getElementById("campo8");
  const errorMsg = document.getElementById("errormsg");

  const campos = [
    campo1,
    campo2,
    campo3,
    campo4,
    campo5,
    campo6,
    campo7,
    campo8
  ];
  function validation() {
    if (
      campo1.value.trim() === "" ||
      campo2.value.trim() === "" ||
      campo3.value.trim() === "" ||
      campo4.value.trim() === "" ||
      campo5.value.trim() === "" ||
      campo6.value.trim() === "" ||
      campo7.value.trim() === "" ||
      campo8.value.trim() === ""
    ) {
      errorMsg.style.display = "block";
      campos.forEach(campo => (campo.style.backgroundColor = "#f8d7da"));
    } else {
      errorMsg.style.display = "none";
      campos.forEach(campo => (campo.style.backgroundColor = ""));
    }
  }
  campo1.addEventListener("change", () => {
    validation();
  });
  campo2.addEventListener("change", () => {
    validation();
  });
  campo3.addEventListener("change", () => {
    validation();
  });
  campo4.addEventListener("change", () => {
    validation();
  });
  campo5.addEventListener("change", () => {
    validation();
  });
  campo6.addEventListener("change", () => {
    validation();
  });
  campo7.addEventListener("change", () => {
    validation();
  });
  campo8.addEventListener("change", () => {
    validation();
  });
  sbtn.addEventListener("click", () => {
    validation();
  });
};
