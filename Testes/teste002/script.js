const horaEL = document.querySelector("#hora")
const minutoEL = document.querySelector("#minuto")
const segundoEL = document.querySelector("#segundo")
const milisecondEL = document.querySelector("#milisecond")
const começar = document.querySelector("#começar")
const pararEL = document.querySelector("#parar")
const resetarEL = document.querySelector("#resetar")

let interval;
let hora = 0;
let minuto = 0;
let segundo = 0;
let milisecond = 0;
let ispaused = false

começar.addEventListener("click", startTimer)

function startTimer() {
    interval = setInterval(() => {
        if (ispaused) {

            milisecond += 10;
            if (milisecond === 1000) {
                second++;
                milisecond = 0;
        
            }
            if (segundo === 60) {
                minuto++;
                segundo = 0;
            }
            if (minuto === 60) {
                hora++;
                minuto = 0;
            }
        
            horaEL.textContent = hora;
            minutoEL.textContent = minuto;
            segundoEL.textContent = segundo;
            milisecondEL.textContent = milisecond;
        }
    }, 10);
}
