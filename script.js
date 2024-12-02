const City = document.getElementById('City');
const Btn = document.getElementById('btn');
const Cname = document.getElementById('Cname');
const Temp = document.getElementById('Temp');
const W_Speed = document.getElementById('W-Speed');
const Cli = document.getElementById('Cli');
const Hum = document.getElementById('Hum');
const Vis = document.getElementById('Vis');
const TDate = document.getElementById('Date');
const Time = document.getElementById('Time');
const Icon = document.getElementById('Icon');
const Err = document.getElementById('Err');

Btn.addEventListener('click', async () => {
    let CityName = City.value;
    if (CityName === '') {
        Err.classList.remove('d-none');
    } else {


        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=bb5236fe0cf121cd0f443e8dbc78bbc1`, {
            method: 'GET'
        });
        const data = await response.json();
        console.log(data);
        Cname.textContent = data.name;
        Temp.textContent = `${Math.round(data.main.temp - 273.15)} °C`;
        W_Speed.textContent = data.wind.speed;
        Cli.textContent = data.weather[0].main;
        Hum.textContent = data.main.humidity;
        Vis.textContent = data.visibility / 1000;
        let Iconcode = data.weather[0].icon;
        Icon.setAttribute("src", `https://openweathermap.org/img/wn/${Iconcode}@2x.png`);

    }

});


const getCurrentDateInfo = () => {
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
TDate.textContent = `${dateInfo.day}  ${dateInfo.date}/${dateInfo.month}/${dateInfo.year}`;


setInterval(() => {
    const now = new Date();
    let options = {
         hour: 'numeric',
          minute: 'numeric',
           second: 'numeric',
            hour12: true
         }; 
    let timeString = now.toLocaleTimeString('en-US', options);
    Time.textContent = timeString;
    
}, 1000);