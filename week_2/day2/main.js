async function getApi() {
  await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      for (let i = 0; i < json.length; i++) {
        let div = document.createElement("div");
        div.className = "products";
        console.log(div);

        let theTitle = document.createElement("h4");
        let categ = json[i].category
        theTitle.classList = "title"
        theTitle.textContent = categ;
        // theTitle.appendChild(categ)

        let nameCOntent = document.createElement("p");
        let title = json[i].title;
        nameCOntent.textContent = title;

        let img = document.createElement("img");
        img.src = json[i].image;


        // appends
        div.append(img);
        div.append(theTitle)
        div.append(title);
        document.getElementById("container").appendChild(div);
      }
    });
  console.log("done");
}
console.log("first line");
getApi();
console.log("secound line");
