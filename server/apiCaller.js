const axios = require('axios');

const getRecipies = (ingredients, search, successCb, failCb) => {
  let url = `http://www.recipepuppy.com/api/?i=${ingredients}&p=4`;
  if (search) {
    url += `&q=${search}`;
  }
  axios.get(url)
    .then(successCb)
    .catch(failCb);
};

module.exports = getRecipies;
