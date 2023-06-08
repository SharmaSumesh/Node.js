// What is extesnion .json
const a = {
    name:"sumesh",
    last:"Sharma",
    id:12
}
console.log(a.name);
const b = JSON.stringify(a);
console.log(b);
const c = JSON.parse(b);
console.log(c);