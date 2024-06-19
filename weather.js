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
        capitals = [],
        regions = [],
        countryCode = [];
      data.map((val) => {
        country.push(val.name.common);
        flag.push(val.flags.svg);
        capitals.push(val.capital);
        regions.push(val.region);
        countryCode.push(val.cca3);
        // console.log(val)
      });
      let cards = document.querySelectorAll(".card");
      for (i = 0; i < 100; i++) {
        let h2 = document.createElement("h2");
        let img = document.createElement("img");
        let pCap = document.createElement("p");
        pCap.innerText = `Captial: ${capitals[i]}`;
        let pReg = document.createElement("p");
        pReg.innerText = `Region: ${regions[i]}`;
        let code = document.createElement("p");
        let button = document.createElement("button");
        button.setAttribute("value", `${countryCode[i]}`);
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

function clicking(e) {
  alert(e)
}



