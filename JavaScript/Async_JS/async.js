//JSON.parse(tekstas)
//JSON

// const request = new XMLHttpRequest();

// request.addEventListener("readystatechange", () => {
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(request.responseText);
//   }
// });

// request.open("GET", "async2.json");
// request.send();

fetch("async2.json")
  .then((a) => a.json())
  .then((a) => {
    console.log(a);
  });

/////// paruostukas

const getData = async (url) => {
  const response = await fetch(url);
  const duomenys = await response.json();
  if (response.status === 200) {
    return duomenys;
  } else {
    throw "Iviko klaida";
  }
};

getData("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
  console.log(response);
});
