document
  .getElementById("subscribe")
  .addEventListener("click", function (event) {
    console.log("click!");
    event.preventDefault();
    let url =
      "https://api.unsplash.com/search/photos?query=sneakers&client_id=0Chp-nN0gH-5Sd4DybMhbXde-X6oOVvHRjDO0iCzvW0";
    fetch(url)
      .then(function (response) {
        if (response.status != 200) {
          return {
            text: "Error calling the unsplash service: " + response.statusText,
          };
        }
        return response.json();
      })
      .then(function (json) {
        for (let i = 0; i < json.results.length; i++) {
          let img = document.createElement("img");
          img.src = json.results[i].urls.small;
          document.getElementById("insertPicture").appendChild(img);
        }
            let imageURL = json.results[0].urls.small;
            let img = document.createElement("img");
            img.setAttribute("src", imageURL);
            document.body.appendChild(img);
        console.log(imageURL);
        console.log(json);
      })
    //   .then(data => {
    //     for (let i = 0; i < 10; i++) {
    //     // data.forEach(results => {
    //         var imageURL = json[i].urls.regular;
    //         console.log(imageURL);
    //       const markup = '<img src=' + json[i].urls.full + '>';
    //       document
    //         .querySelector("insertPicture")
    //         .insertAdjacentHTML("beforeend", markup);
    //     }
    //     });
    //   });
  });
//   document.getElementById("results").innerHTML;
