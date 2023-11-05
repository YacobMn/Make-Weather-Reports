var seatchBtn = document.getElementsByClassName('.navbar');
var MinnesotaBtn = document.getElementsByClassName('.text-bg-dark');
var mondayBtn = document.getElementsByClassName('.monday');
var tuesdayBtn = document.getElementsByClassName('.tuesday');
var wednesdayBtn = document.getElementsByClassName('.wednesday');
var thursdayBtn = document.getElementsByClassName('.thursday');
var fridayBtn = document.getElementsByClassName('.friday');
var searchFormEl = document.getElementById("searchForm");
var APIKey = `b969ba9ea8ffc35d20158e36d7f112db`
 
var fetchBtn = document.getElementsByClassName(".btn")
var currentDate = document.getElementsByClassName(".date");



//fetchBtn.addEventListener('click', res.city);
function handleSearchSubmit(event) {
    event.preventDefault();
    
    var searchInputVal = document.querySelector('#navebar').value;
    if (!searchInputVal) {
        alert('please enter a city')
      return;
    }
  
    var API = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInputVal}&appid=${APIKey}` 
    var API2 = `https://api.openweathermap.org/data/2.5/weather?q=${searchInputVal}&appid=${APIKey}`
    fetch(API2).then(function(res){
      return res.json()
  }).then(function(res){
      console.log(res)
  })
fetch(API).then(function(res){
    return res.json()
}).then(function(res){
    console.log(res)
    var cards = document.querySelector('.cards')
        cards.innerHTML = ''
    for (var i = 0; i < res.list.length; i+=8) {
        console.log(res.list[i]);
        
        cards.innerHTML += `<div class="col-12 col-md-6 col-lg-2 mb-3 forecast-card tueday" style="max-width: 13rem ;">
        <div class="card-body" style="background-color: #1e1e39;">
          <h5 class="card-title" style="color: white;">${res.list[i].dt_txt}:</h5>
          <p class="card-text" style="color: aliceblue;">Temp:${res.list[i].main.temp}</p>
          <p class="card-text" style="color: aliceblue;">Wind:${res.list[i].wind.speed}</p>
          <p class="card-text" style="color: aliceblue;">Humidity${res.list[i].main.humidity}</p>
        </div>
      </div>`
        // target each row monday to friday
        // var todayDate = document.createElement('h3')
        // // one for date 
        // todayDate.textContent = res.list[i].dt_text
        // // one for temp
        // issueTemp.textContent = res.list[i].main.temp
        // // one for wind 
        // issueWind.textContent = res.list[i].wind.speed
        // // one for humidity
        // issueHumidity.textContent = res.list[i].main.humidity

      }
    
})

  }
  
  searchFormEl.addEventListener('submit', handleSearchSubmit);


