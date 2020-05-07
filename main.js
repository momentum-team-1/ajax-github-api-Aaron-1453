let dataSection = document.querySelector("#github-data");
let nameHeader = document.querySelector("#name-header");

fetch("https://api.github.com/users/aaron-1453")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log("h2", response);
    const h2El = document.createElement("h2");
    h2El.innerText = response.name;
    dataSection.appendChild(h2El);
    return response;
  })

  //   .then(function () {
  //     const about = document.createElement("h3");
  //     about.innerText = "About Me";
  //     return dataSection.appendChild(about);
  //   })

  .then(function (response) {
    const basics = document.createElement("div");
    basics.className = "basics";
    basics.innerText = "The Basics";
    dataSection.appendChild(basics);
    console.log("h3", response);
    const h3El = document.createElement("h3");
    h3El.className = ".biostyle";
    h3El.innerText = response.bio;
    dataSection.appendChild(h3El);
    const url = document.createElement("div");
    url.className = "linkname";
    url.innerText = "GitHub URL: " + response.url;
    // dataSection.appendChild(url);
    // const avatar = document.createElement(AvatarElement)
    // url.
    return response;
  });

//   .then(function (response) {
//     const avatar = document.createElement("avatar");
//     avatar.innerText = data.avatar_url;
//     dataSection.appendChild(avatar);
//     return response;
//   });

//   .then((reposURL) => fetch(reposURL))
//   .then((response) => response.json())
//   .then(function (reposData) {
//     const repoList = document.createElement("ul");
//     repoList.classList.add(
//       "list",
//       "pl0",
//       "ml0",
//       "center",
//       "mw6",
//       "ba",
//       "b--light-silver",
//       "br3"
//     );
//     dataSection.appendChild(repoList);
//     for (let repo of reposData) {
//       const listItem = document.createElement("li");
//       listItem.textConent = repo.full_name;
//       listItem.classList.add("ph3", "pv2", "bb", "b--light-silver");
//       repoList.appendChild(listItem);
//     }
//   });
