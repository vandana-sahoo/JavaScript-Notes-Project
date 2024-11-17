//merging two array of data fetched from separate APIs into a single List.

const team1 = ["vanna","anna","tannu","saddha","allu","puvi","vinnu"];
const team2 = ["nikku","jenny","anni","attu","devu","shivu","kittu"];

const wholeteam = [...team1,...team2];
console.log(wholeteam);