const url = "http://localhost:5678/api/works";

// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((works) => {
//     console.log(works);
//   });

fetch(url)
  .then((response) => response.json())
  .then((works) => {
    console.log(works);

    let gallery = document.getElementById("gallery");

    let figure = "";
    for (const work of works) {
      console.log(work.title);
      console.log(work.imageUrl);
      figure += `<figure>
      <img src="${work.imageUrl}" alt="${work.title}" />
      <figcaption>${work.title}</figcaption>
      </figure>`;
    }

    console.log(figure);
    gallery.innerHTML = figure;
  });
