function data() {
  let selectDiv = document.querySelector(".container");

  for (i = 1; i <= 97; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    selectDiv.append(card);
  }

  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      let country = [],
        flag = [],
        capital = [],
        regions = [],
        countryCode = [];
      data.map((val) => {
        country.push(val.name.common);
        flag.push(val.flags.svg);
        capital.push(val.capital);
        regions.push(val.region);

        countryCode.push(val.cca3);
      });
      let cards = document.querySelectorAll(".card");
      for (i = 0; i < 100; i++) {
        let h2 = document.createElement("h2");
        let img = document.createElement("img");
        let pCap = document.createElement("p");
        pCap.innerText = `Captial: ${capital[i]}`;
        let pReg = document.createElement("p");
        pReg.innerText = `Captial: ${regions[i]}`;
        let code = document.createElement("p");
        let button = document.createElement("button");
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
    }).catch ((err) => {
        console.log(err)
    }).finally(() => {
        let buttons = document.querySelectorAll("button")
        
    })
}
data();

async function weather() {
    try {
        const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}'
    }
}
