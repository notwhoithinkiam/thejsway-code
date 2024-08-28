/*
Government forms
*/

const governmentForms = [
  {
    name: "Plutocracy",
    definition: "Rule by the weathly",
  },
  {
    name: "Oligarchy",
    definition: "Rule by a small number of people",
  },
  {
    name: "Kleptocracy",
    definition: "Rule by the thieves",
  },
  {
    name: "Theocracy",
    definition: "Rule by a religious elite",
  },
  {
    name: "Democracy",
    definition: "Rule by the people",
  },
  {
    name: "Autocracy",
    definition: "Rule by a single person",
  },
];

// TODO: compute the formsEndingWithCy array
let formsEndingWithCy = governmentForms.filter(cyName => (cyName.name[cyName.name.length - 2] + cyName.name[cyName.name.length - 1]) === "cy")
console.log(formsEndingWithCy);
