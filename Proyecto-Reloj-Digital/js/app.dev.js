const reloj = document.querySelector('.reloj');

const getHour = () => {
    const date = new Date();
    const time = {
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    };

    reloj.innerHTML = `${time.hour} : ${time.minutes} : ${time.seconds}`;
}

setInterval(getHour, 1000);