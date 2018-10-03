const twelveOne =
    'https://api.open.fec.gov/v1/candidates/?has_raised_funds=true&election_year=2012&office=P&page=1&sort=name&per_page=100&api_key=5b4BDawDYA6q0JIqASIr6vlas4xEQvZCQlu78SQj';

const twelveTwo =
  'https://api.open.fec.gov/v1/candidates/?has_raised_funds=true&election_year=2012&office=P&page=2&sort=name&per_page=100&api_key=5b4BDawDYA6q0JIqASIr6vlas4xEQvZCQlu78SQj';

const sixteenOne =
  'https://api.open.fec.gov/v1/candidates/?has_raised_funds=true&election_year=2016&office=P&page=1&sort=name&per_page=100&api_key=5b4BDawDYA6q0JIqASIr6vlas4xEQvZCQlu78SQj';

const sixteenTwo =
  'https://api.open.fec.gov/v1/candidates/?has_raised_funds=true&election_year=2016&office=P&page=2&sort=name&per_page=100&api_key=5b4BDawDYA6q0JIqASIr6vlas4xEQvZCQlu78SQj';


const candidates2012 = [];
const candidates2016 = [];

const list2012 = document.querySelector('.list-2012');
const list2016 = document.querySelector('.list-2016');
const btn2012 = document.querySelector('.btn--2012');
const btn2016 = document.querySelector('.btn--2016');


// fetch(twelveOne)
//   .then(blob => blob.json())
//   .then(data => candidates2012.push(...data));

// fetch and push data from api
function getCandidates(api, array) {
  fetch(api)
    .then(blob => blob.json())
    .then(data => array.push(...data.results));
}

// Sorts the Candidate Info by name
function sortCandidates(a, b) {
  // array.sort((a, b) => a.name - b.name);
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

// Displays the Candidate Info
function showCandidates(array) {
  // sortCandidates(array);
  array.sort(sortCandidates);
  array.forEach((elem) => {
    const li = document.createElement('li');
    li.className = 'list__item';
    li.innerHTML = `Candidate ID: ${elem.candidate_id} Name: ${elem.name} Party: ${elem.party_full}`;
    if (array === candidates2012) {
      list2012.appendChild(li);
    } else if (array === candidates2016) {
      list2016.appendChild(li);
    }
  });
}


getCandidates(twelveOne, candidates2012);
getCandidates(twelveTwo, candidates2012);
getCandidates(sixteenOne, candidates2016);
getCandidates(sixteenTwo, candidates2016);


btn2012.addEventListener('click', () => {
  // sortCandidates(candidates2012);
  showCandidates(candidates2012);
  btn2012.disabled = true;
});

btn2016.addEventListener('click', () => {
  // sortCandidates(candidates2016);
  showCandidates(candidates2016);
  btn2016.disabled = true;
});

// for use on event listener or onload event
// showCandidates(candidates2012);
// showCandidates(candidates2016);

/* TODO: Use an if statement so that */
