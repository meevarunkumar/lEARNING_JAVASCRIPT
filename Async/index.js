function getWeather() {
  return new Promise((resolve, reject) => {
    resolve("sunny");
  });
}

function getWeatherIcon(weather) {
  return new Promise((resolve, reject) => {
    switch (weather) {
      case "sunny":
        resolve("dhoop h mt nikal");
        break;
      case "cloudy":
        resolve("bahar jake ghum bhsdk");
        default : reject("lagta h baraf parne wali hai")
    }
  });
}

function onSuccess(data) {
  console.log(" bhosdkie " + data);
}
function onError(data) {
  console.log(" Error " + data);
}

getWeather()
.then(getWeatherIcon).then(onSuccess,onError)
