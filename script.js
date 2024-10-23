document.addEventListener("DOMContentLoaded", () => {
    const liveCountdownElement = document.getElementById("live-countdown");
    const monthlyDatesElement = document.getElementById("monthly-dates");

    const startDate = new Date("October 9, 2024");
    const oneMonth = 30 * 24 * 60 * 60 * 1000; // Aproximadamente un mes en milisegundos

    function updateCountdown() {
        const now = new Date();
        const timeDiff = now - startDate;

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        liveCountdownElement.innerHTML = `Días: ${days}, Horas: ${hours}, Minutos: ${minutes}, Segundos: ${seconds}`;
    }

    setInterval(updateCountdown, 1000);
    
    let countdownText = "";

    for (let i = 1; i <= 12; i++) {
        let monthDate = new Date(startDate.getTime() + (oneMonth * i));
        countdownText += `${i}º mes: ${monthDate.getDate()}/${monthDate.getMonth() + 1}/${monthDate.getFullYear()}<br><br>`;
    }

    monthlyDatesElement.innerHTML = countdownText;
});
