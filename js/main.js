// DOM elements ooops
const glTitle = document.getElementById("gl-title");
const glDescriptions = document.getElementById("gl-descriptions");
const nextBtn = document.getElementById("next");

// functions
const randomize = max => Math.floor(Math.random() * max);

const reset = () => {
  glTitle.innerHTML = "";
  glDescriptions.innerHTML = "";
};

console.log(ooops[randomize(ooops.length)]);

const displayRandomPractice = () => {
  reset();
  const gloss = randomize(ooops.length);
  glTitle.innerHTML = `${ooops[gloss].title}<br> <span id="number">#${gloss}</span>`;
  glDescriptions.innerHTML = `${ooops[gloss].description}`;
  // ooops.splice(gloss, 1);
};
displayRandomPractice();
nextBtn.addEventListener("click", displayRandomPractice);
