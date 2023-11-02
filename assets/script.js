var seatchBtn = document.getElementsByClassName('.navbar');
var MinnesotaBtn = document.getElementsByClassName('.text-bg-dark');
var mondayBtn = document.getElementsByClassName('.monday');
var tuesdayBtn = document.getElementsByClassName('.tuesday');
var wednesdayBtn = document.getElementsByClassName('.wednesday');
var thursdayBtn = document.getElementsByClassName('.thursday');
var fridayBtn = document.getElementsByClassName('.friday');

var APIKey = `b969ba9ea8ffc35d20158e36d7f112db`
var API = `https://api.openweathermap.org/data/2.5/forecast?q=${'minneapolis'}&appid=${APIKey}` 
var fetchBtn = document.getElementsByClassName(".btn")
var currentDate = document.getElementsByClassName(".date");



fetch(API).then(function(res){
    return res.json()
}).then(function(res){
    console.log(res.city)
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].name);
        // target each row monday to friday
        var todayDate = document.createElement('h3')
        // one for date 
        todayDate.textContent = res[i].city.date
        // one for temp
        issueTemp.textContent = res[i].city.temp
        // one for wind 
        issueWind.textContent = res[i].city.wind
        // one for humidity
        issueHumidity.textContent = res[i].city.wind

      }
    
})

//fetchBtn.addEventListener('click', res.city);
function handleSearchSubmit(event) {
    event.preventDefault();
    
    var searchInputVal = document.querySelector('#navebar').value;
    if (!searchInputVal) {
        
      return;
    }else {
        alert('please enter a city')
    }
  
    var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;
  
    location.assign(queryString);
  }
  
  searchFormEl.addEventListener('submit', handleSearchSubmit);


