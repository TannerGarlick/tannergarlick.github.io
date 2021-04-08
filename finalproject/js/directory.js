const request = "directory.json";
fetch(request)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);
    const businesses = jsonObject["businesses"];

    const cards = document.querySelector(".cards");

    businesses.forEach((business) => {
      let card = document.createElement("section");
      let text = document.createElement("div");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");
      let a = document.createElement("a");
      let pimg = document.createElement("img");

      h3.innerHTML = business.name;
      p.innerHTML = business.phonenumber;
      pimg.setAttribute("src", "images/" + business.imageurl);
      pimg.setAttribute("alt", "Image of " + business.name);
      a.setAttribute("href", business.weblink);
      a.setAttribute("target", "_blank");
      a.innerHTML = business.name + " Website";

      card.append(pimg);
      card.appendChild(h3);
      card.appendChild(p);
      card.appendChild(a);
      card.appendChild(text);
      cards.append(card);
    });
  });
