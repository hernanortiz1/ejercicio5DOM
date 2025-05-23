let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;
let corriendo = false;

const display = document.querySelector(".display-1");
const btns = document.querySelectorAll(".display-3 i");

const actualizarPantalla = () => {
  const h = horas.toString().padStart(2, "0");
  const m = minutos.toString().padStart(2, "0");
  const s = segundos.toString().padStart(2, "0");
  display.textContent = `${h} : ${m} : ${s}`;
};


const contarTiempo = () => {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }
  if (minutos === 60) {
    minutos = 0;
    horas++;
  }
  actualizarPantalla();
};

// BOTON INICIAR
btns[1].addEventListener("click", () => {
  if (!corriendo) {
    intervalo = setInterval(contarTiempo, 1000);
    corriendo = true;
  }
});

// PAUSA
btns[0].addEventListener("click", () => {
   clearInterval(intervalo);
  corriendo = false;
});

// RESET
btns[2].addEventListener("click", () => {
  clearInterval(intervalo);
  segundos = 0;
  minutos = 0;
  horas = 0;
  corriendo = false;
  actualizarPantalla();
});