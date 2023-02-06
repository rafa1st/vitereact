var a, b, rest;
[a, b] = [1, 2];

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(rest);

({ a, b } = { a: 1, b: 2 });
console.log(a);
console.log(b);

({ a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4, e: 5 });

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

console.log(...people[0].family.mother);

