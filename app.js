const API_KEY = 'be7f9e1cfb24f25ed355d063d5ec0fc3';
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");
// function sleep(milliseconds){
//     return new promise (resolve => setTimeout(resolve, milliseconds));

// }
const getweather = async(city) =>{
    console.log('featching Weather for city')
    console.log(city);
    // await sleep(10000);

    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    if(data.cod == "404"){
        weather.innerHTML= ` <h2>City Not Found</h2> `;
        return;
    }

    console.log(data);
    weather.innerHTML=`
    <div>
    <h2>${data.main.temp} °C</h2>
    <h4>${data.weather[0].main}</h4>
    </div>`;

};
form.addEventListener(
    "submit",
    function(event) {
        getweather(search.value)
        event.preventDefault();
    }
)                                                                                                                                                 