// Array Cardio Day 1
// Practice with filter, map, sort, and reduce

// --------------------
// DATA
// --------------------
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// --------------------
// 1. Filter inventors born in the 1500s
// --------------------
const inventors1500s = inventors.filter(
  inventor => inventor.year >= 1500 && inventor.year < 1600
);

console.table(inventors1500s);

// --------------------
// 2. Map inventors to full names
// --------------------
const inventorNames = inventors.map(
  inventor => `${inventor.first} ${inventor.last}`
);

console.table(inventorNames);

// --------------------
// 3. Sort inventors by birth year (oldest → youngest)
// --------------------
const inventorsByBirth = [...inventors].sort(
  (a, b) => a.year - b.year
);

console.table(inventorsByBirth);

// --------------------
// 4. Total years lived by all inventors
// --------------------
const totalYearsLived = inventors.reduce(
  (total, inventor) => total + (inventor.passed - inventor.year),
  0
);

console.log(totalYearsLived);

// --------------------
// 5. Sort inventors by years lived
// --------------------
const inventorsByLongevity = [...inventors].sort(
  (a, b) =>
    (a.passed - a.year) - (b.passed - b.year)
);

console.table(inventorsByLongevity);

// --------------------
// 6. Sort people alphabetically by last name
// --------------------
const peopleSortedByLastName = [...people].sort((personA, personB) => {
  const [lastA] = personA.split(", ");
  const [lastB] = personB.split(", ");
  return lastA.localeCompare(lastB);
});

console.table(peopleSortedByLastName);

// --------------------
// 7. Count instances of each transportation method
// --------------------
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const transportCount = data.reduce((count, item) => {
  count[item] = (count[item] || 0) + 1;
  return count;
}, {});

console.log(transportCount);


// --------------------
// 8. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// --------------------
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// run this on wikipedia dev tools console
// const category = Array.from(document.querySelectorAll(".mw-category a"));
// const de = category
//   .map((links) => {
//     return links.textContent;
//   })
//   .filter((name) => {
//     return name.includes("de");
//   });
// console.table(de);