document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.getElementById("countdown");

    const startDate = new Date("October 9, 2024");
    const oneMonth = 30 * 24 * 60 * 60 * 1000; // Aproximadamente un mes en milisegundos

    let countdownText = "";

    for (let i = 1; i <= 3; i++) {
        let monthDate = new Date(startDate.getTime() + (oneMonth * i));
        countdownText += `Primer mes: ${monthDate.toLocaleDateString()}<br><br>`;
    }

    countdownElement.innerHTML = countdownText;
});
