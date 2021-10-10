const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((coments) => {
    console.log(coments.map((com) => com.id));
  });
// fetch(URL, {
//     method: "POST",
//     headers: {
//     "Content-Type": "application/json"
// },
//  body: JSON.stringify({
//      title: 'New Post'
//   }).then((response) => {
//     return response.json();
//   })
// async function doStuff() {
//   const response = await fetch(URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       title: "New Post",
//     }),
//   });
//   const post = await response.json();
//   console.log(post);
// }
// doStuff();
