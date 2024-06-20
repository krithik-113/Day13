function data() {
  let selectDiv = document.querySelector(".container");

  for (i = 1; i <= 247; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    selectDiv.append(card);
  }

  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      let country = [],
        flag = [],
        capitals = [],
        regions = [],
        countryCode = [];
      data.map((val) => {
        country.push(val.name.common);
        flag.push(val.flags.svg);
        capitals.push(val.capital);
        regions.push(val.region);
        countryCode.push(val.cca3);
      });
      let cards = document.querySelectorAll(".card");
      for (i = 0; i < 250; i++) {
        let h2 = document.createElement("h2");
        let img = document.createElement("img");
        let pCap = document.createElement("p");
        pCap.innerText = `Captial: ${capitals[i]}`;
        let pReg = document.createElement("p");
        pReg.innerText = `Region: ${regions[i]}`;
        let code = document.createElement("p");
        let button = document.createElement("button");
        button.setAttribute("value", `${country[i]}`);
        button.setAttribute("onclick","clicking(event.target.value)")
        button.innerText = "Click for Weather";
        h2.innerText = country[i];
        code.innerText = `Country Code: ${countryCode[i]}`;
        img.setAttribute("src", `${flag[i]}`);
        cards[i].append(h2);
        cards[i].append(img);
        cards[i].append(pCap);
        cards[i].append(pReg);
        cards[i].append(code);
        cards[i].append(button);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
data();

async function clicking(e) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=51ef6b17c072d286c74540e6648848bf&units=metric`
  )
    .then((response) => response.json())
    .then((result) => {
      if (e == 'South Korea') {
        e= 'korea'
      } else if (e == 'WALLIS AND FUTUNA') {
        e = 'WALLIS';
      }
      alert(`Country:- ${e}
temp:- ${result.main.temp}%
clouds:- ${result.weather[0].description}
wind speed:- ${result.wind.speed}`)
    })
    .catch((err) => console.log(err));
}