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
const list1 = document.querySelector('.list--1');
const list2 = document.querySelector('.list--2');


// fetch and push data from api
function getCandidates(api, array) {
  fetch(api)
    .then(blob => blob.json())
    .then(data => array.push(...data.results));
}

// Sorts the Candidate Info by name
function sortCandidates(a, b) {
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
  array.sort(sortCandidates);
  array.forEach((elem) => {
    const li = document.createElement('li');
    li.className = 'list__item';
    li.innerHTML = `<i>Candidate ID:</i> ${elem.candidate_id} <i>Name:</i> ${elem.name} <i>Party:</i> ${elem.party}`;
    if (array === candidates2012) {
      list2012.appendChild(li);
    } else if (array === candidates2016) {
      list2016.appendChild(li);
    }
  });
}

// Hides Button and shows selected list
function listButtonControl(list) {
  if (list === list1) {
    btn2012.disabled = true;
    list1.className = 'show';
  } else {
    btn2016.disabled = true;
    list2.className = 'show';
  }
}

getCandidates(twelveOne, candidates2012);
getCandidates(twelveTwo, candidates2012);
getCandidates(sixteenOne, candidates2016);
getCandidates(sixteenTwo, candidates2016);


btn2012.addEventListener('click', () => {
  showCandidates(candidates2012);
  listButtonControl(list1);
});

btn2016.addEventListener('click', () => {
  showCandidates(candidates2016);
  listButtonControl(list2);
});

