const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("Hello");

// Interpolated
console.log("Hello I am a %s string", "💩");

// Styled
console.log("%c I am some great text", "font-size: 30px; background: red; text-shadow: 5px 5px 0 blue");

// warning!
console.warn("OH Hooo");
// Error :|
console.error("Shit!");
// Info
console.log("Crocodiles eat 3-4 people per year");

// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is Wrong!");
// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} year old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Mohammad");
console.count("Mohammad");
console.count("Hosam");
console.count("Hosam");
console.count("Mohammad");
console.count("Hosam");
console.count("Hosam");
console.count("Hosam");
console.count("Hosam");
console.count("Hosam");
console.count("Mohammad");
console.count("Mohammad");
console.count("Mohammad");

// timing
console.time("Fetching Data");
fetch("https://api.github.com/users/hosamation")
  .then(data => data.json())
  .then(data => {
    console.timeEnd("Fetching Data");
    console.log(data);
});

// Table
console.table(dogs);