console.log('bobbyhadz.com');

// ✅ Using getElementById
const el1 = document.getElementById('box');
console.log(el1); // 👉️ div#box

if (el1 !== null) {
  // 👇️ this runs
  console.log('The element exists in the DOM');
} else {
  console.log('The element does NOT exist in the DOM');
}
