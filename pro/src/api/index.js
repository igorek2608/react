export const getRepos = () =>
  fetch("https://api.github.com/users/Archakov06/repos").then((response) => response.json());