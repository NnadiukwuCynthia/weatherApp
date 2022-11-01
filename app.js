let inputValue, loader, description, temp, city, imageIcon, resultDiv, degree, searchBtn, backArrow;

inputValue = document.querySelector(".inp");
loader = document.querySelector(".loader_div");
description = document.querySelector(".desc");
temp = document.querySelector(".temp");
city = document.querySelector(".city_details");
imageIcon = document.querySelector(".icon");
resultDiv = document.querySelector(".result_div");
searchBtn =document.querySelector(".searchBtn");
backArrow = document.querySelector(".back")

const getWeather = () => {
    loader.style.display = "block";
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=def0f51d4eec8706e414356472ab519b
    `;
  fetch(api)
    .then((e) => {
      return e.json();
    })
    .then((data) => {
        console.log(data);
          resultDiv.style.display = "block";
      let icon = data.weather[0].icon;
      city.textContent = data.name;
      let temperature = data.main.temp;
      temperature = Math.round(temperature - 273.15)
      temp.textContent = temperature
      let iconSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      imageIcon.src = iconSrc;
      description.textContent = data.weather[0].description;

      
      inputValue.value = " ";
      backArrow.style.display = "block";
      inputValue.style.display = "none";
      searchBtn.style.display = "none";
      loader.style.display ="none";
    });
  };
  
  searchBtn.addEventListener("click", () => { 
    if (inputValue.value == false){
      alert ("please make an input!!!")
    }else{
      getWeather(inputValue.value);
    }
  });
  backArrow.addEventListener("click", ()=>{
    inputValue.value = " ";
  resultDiv.style.display = "none"
  inputValue.style.display = "block";
  searchBtn.style.display = "block";
  backArrow.style.display = "none";
})



