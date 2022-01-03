let now = new Date().toLocaleDateString();
console.log(now);
let date = now.split(/\./);
console.log(date);
date.forEach(element => console.log(element))