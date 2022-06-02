const vegetables =
[
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const judgeVegetable = function (vegetables, metric) {
    
  let maxMetric = -1;
  let maxSubmitter = '';

  for (let f = 0; f < vegetables.length; f++)
  {
    if (vegetables[f][metric] > maxMetric)
    {
      maxMetric = vegetables[f][metric];
      maxSubmitter = vegetables[f].submitter;
    }
  }
  return maxSubmitter;
}