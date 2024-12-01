const City = document.getElementById('City');
const Btn = document.getElementById('btn');
const Cname = document.getElementById('Cname');
const Temp = document.getElementById('Temp');
const W_Speed = document.getElementById('W-Speed');
const Cli = document.getElementById('Cli');
const Hum = document.getElementById('Hum');
const Vis = document.getElementById('Vis');

Btn.addEventListener('click', async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=madurai&appid=bb5236fe0cf121cd0f443e8dbc78bbc1`, {
        method: 'GET'
    });
    const data = await response.json();
    console.log(data); 
    Cname.textContent = data.name;
    Temp.textContent = Math.round(data.main.temp - 273.15);
    W_Speed.textContent = data.wind.speed;
    Cli.textContent = data.weather[0].main;
    Hum.textContent = data.main.humidity;
    Vis.textContent = data.visibility / 1000;
});

function getCurrentDateInfo() {
    const today = new Date();
    const day = today.toLocaleString('en-US', { weekday: 'long' }).substring(0, 3);
    const month = today.getMonth();
    const date = today.getDate();
    const year = today.getFullYear();
    
    return {
        day: day,
        month: month,
        date: date,
        year: year
    };
}

const dateInfo = getCurrentDateInfo();
console.log(`Day: ${dateInfo.day}`); 
console.log(`Month: ${dateInfo.month}`); 
console.log(`Date: ${dateInfo.date}`); 
console.log(`Year: ${dateInfo.year}`); 
