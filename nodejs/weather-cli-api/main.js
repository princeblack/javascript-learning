const axios = require('axios');

let [city,type]= process.argv.slice(2)
const apiKey = `d279c35e92369fd1e0e7f8da11d48ef5`;
const url=`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}&units=metric&cnt=40`;

even
getData = async()=>{
    try {
        const res = await axios.get(url);
        if (type === "now")printTodayWeather(res.data.list[0],res.data.city);
        else if (type === "week")getAvgTempWeather(res.data.list,res.data.city)
    } catch (error) {
        console.log(error);
    }  
};

printTodayWeather= (weatherData, cityData) =>{
    
    let res =`It is now ${weatherData.main.temp}C in ${cityData.name},${cityData.contry}.
    the current weather condition are : ${weatherData.weather[0].description}`;
    
};
getAvgTempWeather = (weatherData,cityData) =>{
    console.log(`Weekly overvierw for ${cityData.name}, ${cityData.country}`);
    const dt = weatherData.map(el =>{
        const newEl = {
            temp: el.main.temp,
            date: el.dt_txt.slice()
        }
    })
    
}

printOutWeather = dt => {
    console.log(`the temp for ${dt.date} is ${dt.temp}`);
    
}

myReducer = (acc,cur) =>{
    // I am still in the same day
    if (cur.date === acc.date) {
        // add this temp
        acc.temp += cur.temp;
    }else{
        // A new days i born
        printOutWeather(acc)
        acc={
            temp:0,
            date: cur.date
        }
    }
    return acc;
}

getData()














































    // .then(res => {
    //     const date1 = new Date(res.data.list[0].dt * 1000).toISOString().substring(0, 10);
    //     let date2 = new Date(res.data.list[8].dt * 1000)
    //     let date3 = new Date(res.data.list[16].dt * 1000).toISOString().substring(0, 10)
    //     let date4 = new Date(res.data.list[24].dt * 1000).toISOString().substring(0, 10)
    //     let date5 = new Date(res.data.list[32].dt * 1000)
        
    //     console.log(date5);
        
    // }).catch(error =>{
    //     console.log("problem with date ");
        
    // })

































    // let dt = new Date() 
    // let res = dt.toISOString().substring(0, 10)
    // console.log(res);

    // let now = new Date();
    // let pp = now.toISOString().substring(0,10)
    // console.log(pp);
    
    // .then(res =>{
    //     let date1 = new Date(res.data.list[0].dt * 1000)
    //     let date2 = new Date(res.data.list[8].dt * 1000)
    //     // let date3 = new Date(res.data.list[16].dt * 1000).toISOString().substring(0, 10)
    //     // let date4 = new Date(res.data.list[24].dt * 1000).toISOString().substring(0, 10)
    //     // let date5 = new Date(res.data.list[32].dt * 1000).toISOString().substring(0, 10)
    //     console.log(date1); 
    //     console.log(date2);
    //     // console.log(date3);
    //     // console.log(date4);
    //     // console.log(date5);
    //     // console.log(`${Math.floor(res.data.list.main.temp)}° in ${res.data.list.name} `);
    //     // console.log(`temp min :${res.data.list.main.temp_min}°`);
    //     // console.log(`temp max :${res.data.list.main.temp_max}°`);
    //     // console.log(`${res.data.list.weather[0].main}`);
    //     // console.log(`description: ${res.data.list.weather[0].description}`);
    //     // console.log(`humidity: ${res.data.list.main.humidity}`);
    //     // console.log(`Wind:
    //     //  Speed: ${res.data.list.wind.speed}
    //     //  deg: ${res.data.wind.deg}`);         
    //     // console.log(`Country : ${res.data.list.sys.country}`);
    //     // console.log(`timezone: ${res.data.list.timezone}`);
    // })
    // .catch(err =>{
    //     console.log(`please look again if the city name is correct`);
        
    // })