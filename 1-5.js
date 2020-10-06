const oneAway = (str1, str2) => {
  const diff = str2.length - str1.length;
  if (diff >= 2 || diff <= -2) return false;

  let swaps = 0;
  let failed = false;
  for (let i = 0; i < str2.length; i++) {
    if (diff === 0 && str2[i] !== str1[i]) {
      swaps++;
    }
    if (diff > 0 && str2[i] !== str1[i] && str2[i] !== str1[i-1]) {
      failed = true;
    }
    if (diff < 0 && str2[i] !== str1[i] && str2[i] !== str1[i+1]) {
      failed = true;
    }
  }

  return swaps > 1 || failed ? false : true;
};

console.log(oneAway('pale', 'ple'), true)
console.log(oneAway('pales', 'pale'), true)
console.log(oneAway('pale', 'bale'), true)
console.log(oneAway('pale', 'bake'), false)
console.log(oneAway('honey', 'hnoey'), false)
console.log(oneAway('cake', 'ake'), true)
console.log(oneAway('cake', 'akes'), false)
