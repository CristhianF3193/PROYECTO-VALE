document.addEventListener("DOMContentLoaded", () => {
    const liveCountdownElement = document.getElementById("live-countdown");
    const totalDaysElement = document.getElementById("total-days");
    const monthlyDatesElement = document.getElementById("monthly-dates");

    const startDate = new Date("October 9, 2024 00:00:00");

    function updateCountdown() {
        const now = new Date();
        const timeDiff = now - startDate;

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        liveCountdownElement.innerHTML = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} Segundos`;
    
        // Calculate total days including partial days
        const totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        totalDaysElement.innerHTML = `Hoy es el día: ${totalDays}`;
    }

    setInterval(updateCountdown, 1000);

    let countdownText = "";

    for (let i = 1; i <= 12; i++) {
        let monthDate = new Date(startDate.getFullYear(), startDate.getMonth() + i, 9);
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        countdownText += `${i}º mes: ${monthDate.toLocaleDateString('es-ES', options)}<br><br>`;
    }

    monthlyDatesElement.innerHTML = countdownText;
});
