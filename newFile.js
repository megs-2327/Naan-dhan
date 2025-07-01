const { search } = require("./main");

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
};
