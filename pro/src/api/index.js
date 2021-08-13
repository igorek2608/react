export const getRepos = () =>
  fetch("https://api.github.com/users/Archakov06/repos").then((response) => response.json());


  export const getReposPage = (currentPage, perPage) =>
  fetch(`https://api.github.com/users/Archakov06/repos&per_page=${perPage}&page=${currentPage}`).then((response) => response.json());