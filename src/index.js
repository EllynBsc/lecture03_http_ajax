console.log("Hello from src/index.js!");

// FIRST PART OF THE LECTURE: <!-- Button exercise recap on DOM & EVENTS -->
// When the user click on the button, we should change the text to 'good morning' and disable the button to be cliked.

// const btn = document.getElementById("click-me")
// console.log(btn)

// btn.addEventListener('click', (event) => {
//     // console.log(event);
//     // console.log(event.currentTarget);
//      event.currentTarget.innerText = "Good morning!"
//     event.currentTarget.classList.add('disabled red');

// });




// SECOND PART OF THE LECTURE: HTTP & AJAX
  // 1.EXAMPLE WITH A GET AJAX REQUEST


  // FIRST STEP : making sure you get a response from the api and console log the data by trying it with an example and your API Key.
    fetch(`http://www.omdbapi.com/?s=harry potter&apikey=d4b9c62c`)
    .then(response =>response.json())
    .then((data) => {
      console.log(data);
      console.log(data.Search);
    })

  // SECOND STEP: start playing with the data you're getting and think of what you want to do with it ? append it to the DOM ?
    fetch(`http://www.omdbapi.com/?s=harry potter&apikey=d4b9c62c`)
      .then(response =>response.json())
      .then((data) => {
        const arrayMovies = data.Search
        arrayMovies.forEach((movie) => {
          // console.log(movie);
          const title = movie.Title;
          const imgUrl = movie.Poster;
          // console.log(title);
          // console.log(imgUrl);
        });
      });

    // THIRD step: Append the data that we're getting back from the API to the DOM.
    const result = document.querySelector('.results');

    fetch(`http://www.omdbapi.com/?s=harry potter&apikey=d4b9c62c`)
      .then(response =>response.json())
      .then((data) => {
        const arrayMovies = data.Search
        arrayMovies.forEach((movie) => {
        const title = movie.Title;
        const imgUrl = movie.Poster;
        result.insertAdjacentHTML('beforeend',`<li><p>${title}</p>
          <img src="${imgUrl}" alt="">
          </li>`)
        });
      });


      // FOURTH step: BIND my ajax call to an event and make the input dynamic(not only harry potter)
      // I want to be able to type a movie title submit my query and get back the poster and titles corresponding to my query in my webpage.
      // formHTMLElement.addEventListener('submit', callbackFunctionAPi)
      const result = document.querySelector('.results');
      const form = document.querySelector('#search-form');

      console.log(form); //make sure to grab the form html element, always console.log!

      form.addEventListener('submit', (event) => {
        const userInput = document.getElementById('input-user') //getting the input of the user
        event.preventDefault(); // to prevent the default behaviour of a form (refresh)
        result.innerHTML = ''; // starting up with an empty ul results before we launch the api function call
        fetch(`https://www.omdbapi.com/?s=${userInput.value}&apikey=d4b9c62c`)
          .then(response =>response.json())
          .then((data) => {
            const arrayMovies = data.Search
            arrayMovies.forEach((movie) => {
            const title = movie.Title;
            const imgUrl = movie.Poster;
            result.insertAdjacentHTML('beforeend',`<li><p>${title}</p>
              <img src="${imgUrl}" alt="">
              </li>`)
            });
          });
      })




// 3. POST AJAX REQUEST WITH ALGOLIA API
// you need to pass a second argument in the fetch method  which is an object containing the type of method verb action "post" and the information you're sending.
// fetch(url, {method: 'POST', body: JSON.stringify{query: inputUser}})

// const searchAlgoliaPlaces = (event) => {
//   fetch("https://places-dsn.algolia.net/1/places/query", {
//     method: "POST",
//     body: JSON.stringify({ query: event.currentTarget.value })
//   })
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data.hits); // Look at local_names.default
//     });
// };

// const input = document.querySelector("#search");
// input.addEventListener("keyup", searchAlgoliaPlaces);
