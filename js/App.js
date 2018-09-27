const twelveOne =
    'https://api.open.fec.gov/v1/candidates/?has_raised_funds=true&election_year=2012&office=P&page=1&sort=name&per_page=100&api_key=5b4BDawDYA6q0JIqASIr6vlas4xEQvZCQlu78SQj';

const twelveTwo =
  'https://api.open.fec.gov/v1/candidates/?has_raised_funds=true&election_year=2012&office=P&page=2&sort=name&per_page=100&api_key=5b4BDawDYA6q0JIqASIr6vlas4xEQvZCQlu78SQj';


const candidates2012 = [];

// fetch(twelveOne)
//   .then(blob => blob.json())
//   .then(data => candidates2012.push(...data));

function sortCandidates(api, array) {
  fetch(api)
    .then(blob => blob.json())
    .then(data => array.push(...data.results));
}

function showCandidates(array) {
  array.sort((a, b) => a.name - b.name);
  array.forEach((elem) => {
    console.log(`Candidate ID: ${elem.candidate_id} Name: ${elem.name} Party: ${elem.party_full}`);
  });
}

sortCandidates(twelveOne, candidates2012);
sortCandidates(twelveTwo, candidates2012);
// for use on event listener or onload event
showCandidates(candidates2012);

/* TODO: Loop over 2012 with a .foreach or .map and maybe using a filter each  using candidates2012["#"].results

note we can display individual results
candidates2012['0'].results['0'].name = 'ADESHINA, YINKA ABOSEDE'
look at example code:
https://codepen.io/jeffcruizer/pen/wPgQpV
*/
