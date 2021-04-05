const requestURL = "../finalproject/directory.json";
fetch(requestURL)
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
      let h2 = document.createElement("h2");
      let p = document.createElement("p");
      let p2 = document.createElement("p");
      let pimg = document.createElement("img");

      h2.innerHTML = business.name;
      p.innerHTML = business.phonenumber;
      p2.innerHTML = business.weblink;
      pimg.setAttribute("src", "images/" + business.imageurl);
      pimg.setAttribute("alt", "Image of " + business.name);

      card.append(pimg);
      text.append(h2);
      text.append(p);
      text.append(p2);
      card.append(text);
      cards.append(card);
    });
  });
