let dataSection = document.querySelector("#github-data");

fetch("https://api.github.com/users/aaron-1453")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const h2El = document.createElement("h2");
    h2El.innerText = data.name;
    dataSection.appendChild(h2El);
    return data.repos_url;
  });
  .then((reposURL) => fetch(reposURL))
  .then((response) => response.json())
  .then(response => response.json())
  .then(function (reposData) {
      console.log(reposData)
  }
