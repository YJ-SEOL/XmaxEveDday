const clockTitle = document.querySelector(".js-clock");

function xmasEve() {
    const xmasEve = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
    const now = new Date();

    const diff = new Date(xmasEve - now);
    const secInMs = Math.floor(diff / 1000);
    const minInMs = Math.floor(secInMs / 60);
    const hourInMs = Math.floor(minInMs / 60);
    const day = Math.floor(hourInMs / 24);

    const s = secInMs % 60;
    const m = minInMs % 60;
    const h = hourInMs % 24;

    const dayStr = `${day < 10 ? `0${day}` : day}d`;
    const hourStr = `${h < 10 ? `0${h}` : h}h`;
    const minStr = `${m < 10 ? `0${m}` : m}m`;
    const secStr = `${s < 10 ? `0${s}` : s}s`;

    clockTitle.innerText = `${dayStr} ${hourStr} ${minStr} ${secStr}`;
}

xmasEve();
setInterval(xmasEve, 1000);
