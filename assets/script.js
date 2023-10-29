var APIKey = `b969ba9ea8ffc35d20158e36d7f112db`
var API = `https://api.openweathermap.org/data/2.5/forecast?q=${'minneapolis'}&appid=${APIKey}` 

fetch(API).then(function(res){
    return res.json()
}).then(function(res){
    console.log(res)
})
