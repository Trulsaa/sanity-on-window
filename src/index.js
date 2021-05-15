require("es6-promise/auto");
const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "63w449ay",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-03-25", // use a UTC date string
});

window.sanityClient = client;

client.fetch('*[_type == "frukt"] {name, color}').then((frukt) => {
  const ul = document.createElement("ul");
  for (let f of frukt) {
    const li = document.createElement("li");
    li.innerText = f.name;
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
});
