const finishTheLib = () => {
  const nounOne = document.getElementById('noun-1');
  const noun = nounOne.value;
  const nounOnePlace = document.getElementById('noun-place-1');
  nounOnePlace.textContent = noun;
  const nounThreePlace = document.getElementById('noun-place-3');
  nounThreePlace.textContent = noun;
  const nounFourPlace = document.getElementById('noun-place-4');
  nounFourPlace.textContent = noun;

  const nounTwo = document.getElementById('noun-2');
  const nouns = nounTwo.value;
  const nounTwoPlace = document.getElementById('noun-place-2');
  nounTwoPlace.textContent = nouns;

  const verbOne = document.getElementById('verb-1');
  const verb = verbOne.value;
  const verbOnePlace = document.getElementById('verb-place-1');
  verbOnePlace.textContent = verb;
  
  const verbTwo = document.getElementById('verb-2');
  const verbs = verbTwo.value;
  const verbTwoPlace = document.getElementById('verb-place-2');
  verbTwoPlace.textContent = verbs;

  const adjOne = document.getElementById('adjective-1');
  const adj = adjOne.value;
  const adjOnePlace = document.getElementById('adjective-place-1');
  adjOnePlace.textContent = adj;

  const adjTwo = document.getElementById('adjective-2');
  const adjs = adjTwo.value;
  const adjTwoPlace = document.getElementById('adjective-place-2');
  adjTwoPlace.textContent = adjs;

  document.getElementById('hidden').style.cssText = 'visibility:visible';
}