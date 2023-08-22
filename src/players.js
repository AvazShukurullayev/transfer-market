import { v4 as uuidv4 } from "uuid";

const players = [
  {
    name: "Mbappe",
    age: 25,
    club: "PSJ",
    value: 160,
    id: uuidv4(),
  },
  {
    name: "Messi",
    age: 36,
    club: "Miami FC",
    value: 130,
    id: uuidv4(),
  },
  {
    name: "Ronaldo",
    age: 38,
    club: "Al-nasr",
    value: 200,
    id: uuidv4(),
  },
  {
    name: "Neymar",
    age: 30,
    club: "Al-Huma",
    value: 180,
    id: uuidv4(),
  },
];

export default players;
