# Projects

DOM Project
project link : [click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# 1. **ColourChanger**

```javascript
console.log("hitesh");
// query selector for nodeList - forEach
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// declaring events
buttons.forEach(function (button) {
  console.log(button);
  // this was a click event
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    // listing all events
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

# 2. **BMI-Calculator**

```javascript
const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
// a submit-type event
form.addEventListener("submit", function (e) {
  e.preventDefault(); // to terminate all default actions

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```
