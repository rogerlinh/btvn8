const APIKEY = "b7fa1a0c70371df20cd5d9b7076adfe8";
const BASE_URL_WEATHER_ICON = "http://openweathermap.org/img/wn/";
const IMAGE_SIZE = "@4x.png";
let form = document.querySelector("#input");
form.onsubmit = (e) => {
  e.preventDefault();
  let city = form.city.value;
  getData(city);
};

let getData = async (a) => {
  try {
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=${APIKEY}`
    );

    if (response.data.weather[0].main.toLowerCase() == "mist") {
      document.getElementById("picWeather").src = `${
        BASE_URL_WEATHER_ICON + "50d" + IMAGE_SIZE
      }`;
      document.getElementById("condition").innerHTML = "Trời nhiều sương mù";
    } else if (response.data.weather[0].main.toLowerCase() == "rain") {
      document.getElementById("picWeather").src = `${
        BASE_URL_WEATHER_ICON + "09d" + IMAGE_SIZE
      }`;
      document.getElementById("condition").innerHTML = "Trời mưa mưa";
    } else if (response.data.weather[0].main.toLowerCase() == "clear") {
      document.getElementById("picWeather").src = `${
        BASE_URL_WEATHER_ICON + "01d" + IMAGE_SIZE
      }`;
      document.getElementById("condition").innerHTML = "Trời trong mây thoáng";
    } else if (response.data.weather[0].main.toLowerCase() == "clouds") {
      document.getElementById("picWeather").src = `${
        BASE_URL_WEATHER_ICON + "03d" + IMAGE_SIZE
      }`;
      document.getElementById("condition").innerHTML = "Trời có mây";
    } else {
      document.getElementById("picWeather").src = `${
        BASE_URL_WEATHER_ICON + "50d" + IMAGE_SIZE
      }`;
      document.getElementById("condition").innerHTML = "Trời ơi!!!";
    }

    document.getElementById("place").innerHTML = form.city.value;
    let t = response.data.main.temp - 273;
    document.getElementById("temp").innerHTML =
      "Nhiệt độ: " + Math.ceil(t) + "o".sup() + "C";

      form.city.value = ""
  } catch (err) {
    console.log(err);
    alert("Bạn nhập sai cmnr");
  }
};
