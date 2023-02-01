var a, b, rest;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

({ a, b } = { a: 1, b: 2 });
console.log(a); // 1
console.log(b); // 2

// ES2016 - não implementado em Firefox 47a01
({ a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 });

console.log(a);
console.log(b);
console.log(rest);

var people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for (var {
  name: n,
  family: { father: f },
} of people) {
  console.log("Name: " + n + ", Father: " + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aut doloribus perferendis, quaerat fugit at qui tempora modi ullam tenetur, reiciendis molestiae. Doloremque unde quo dolore, ex expedita numquam repellendus.";
console.log(lorem);