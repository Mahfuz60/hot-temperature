const apiKey='907ccca5620fd5a51c51601f7e60e858';
const apiBase='http://api.openweathermap.org/data/2.5/weather';

const weatherData=city=>{
    const url=`${apiBase}?q=${city}&units=metric&appid=${apiKey}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>updateUI(data))
}

const searchButton=document.getElementById('search-button').addEventListener('click',()=>{
    const searchCity=document.getElementById('city').value;
    weatherData(searchCity);




})

const updateUI=data=>{
    document.getElementById('show_city').innerText=data.name||'unknown location!';
    document.getElementById('show_temp').innerText=data.main.temp;
    document.getElementById('weather-status').innerText=data.weather[0].main;
    document.getElementById('icon').setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

    document.getElementById('city').value = "";

    

}
weatherData('dhaka');




