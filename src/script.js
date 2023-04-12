function updateTime() {
    //jhb
    let jhb = document.querySelector("#jhb");
    if (jhb) {
    let jhbDate = jhb.querySelector(".date");
    let jhbTime = jhb.querySelector(".time");
    let jhbTime2 = moment().tz("Africa/Johannesburg");

    jhbDate.innerHTML= jhbTime2.format("MMMM Do YYYY");
    jhbTime.innerHTML= jhbTime2.format("hh:mm:ss [<small>]A[</small>]");//fix the hTML
    }

    //ldn
    let ldn = document.querySelector("#ldn");
    if (ldn) {
    let ldnDate = ldn.querySelector(".date");
    let ldnTime = ldn.querySelector(".time");
    let ldnTime2 = moment().tz("Europe/London");

    ldnDate.innerHTML= ldnTime2.format("MMMM Do YYYY");
    ldnTime.innerHTML= ldnTime2.format("hh:mm:ss [<small>]A[</small>]"); //fic HTML
    }
};

updateTime();
setInterval(updateTime, 1000)

function updateCity(event) {
    let cityTZ = event.target.value;
    let cityName = cityTZ.replace("_", " ").split("/")[1];
    let cityTime = moment(). tz(cityTZ);
    let city = document.querySelector("#cities")
    city.innerHTML = `<div class="place" id="jhb">
        <div>
            <h2>${cityName}</h2> 
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        
        <div class="time">${cityTime.format("hh:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>`
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity)