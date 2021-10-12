'use strict';

// Returns an array of integers representing the position of each regex match.
var matchPositions = function matchPositions(string, regexes) {
  return regexes.map(function (regex) {
    return string.search(regex);
  }).filter(function (i) {
    return i >= 0;
  });
};

// Returns a lowercase string with some common punctation removed / replaced
// by whitespace.
var clean = function clean(s) {
  return s.trim().replace(/['’]/g, '').replace(/[.,"/#!$%^&*;:{}=\-_`~()]/g, ' ').toLowerCase();
};

// Determines how closely a query matches either an option's name/synonyms.
// Returns an integer ranging from 0 (no match) to 100 (exact name match).
var calculateWeight = function calculateWeight(rawName, query) {
  var rawSynonyms = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

  var regexes = clean(query).split(/\s+/).map(function (word) {
    return new RegExp('\\b' + word, 'i');
  });
  var name = clean(rawName);

  console.log(rawSynonyms);
  var synonyms = rawSynonyms.map(function (s) {
    return clean(s);
  });

  var nameMatchPositions = matchPositions(name, regexes);
  var synonymMatchPositions = synonyms.map(function (synonym) {
    return matchPositions(synonym, regexes);
  })
  // Flatten the array, but don't use flat() - breaks on Edge.
  .reduce(function (acc, val) {
    return acc.concat(val);
  }, []);

  // Require either all parts of a name to be matched, or all parts of a synonym
  var allNameMatches = nameMatchPositions.length === regexes.length;
  var allSynonymMatches = synonymMatchPositions.length >= regexes.length;
  if (!allNameMatches && !allSynonymMatches) return 0;

  // Case insensitive exact matches:
  var nameIsExactMatch = query === name.toLowerCase();
  var synonymIsExactMatch = synonyms.some(function (s) {
    return query === s.toLowerCase();
  });

  // Case insensitive 'starts with':
  var nameStartsWithQuery = nameMatchPositions.includes(0);
  var synonymStartsWithQuery = synonymMatchPositions.includes(0);
  var wordInNameStartsWithQuery = nameMatchPositions.length > 0;
  var wordInSynonymStartsWithQuery = synonymMatchPositions.length > 0;

  if (nameIsExactMatch) return 100;
  if (synonymIsExactMatch) return 75;
  if (nameStartsWithQuery) return 60;
  if (synonymStartsWithQuery) return 50;
  if (wordInNameStartsWithQuery) return 25;
  if (wordInSynonymStartsWithQuery) return 10;

  return 0;
};

var byWeightThenAlphabetically = function byWeightThenAlphabetically(a, b) {
  if (a.weight > b.weight) return -1;
  if (a.weight < b.weight) return 1;
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;

  return 0;
};

function sort(query, options) {
  // Calculate a weight for each option and multiply by any boost supplied.
  //
  // The boost amount is a float and can be as large as the user wants. It is
  // meant to be 'tweakable' per option and should be fine-tuned based on user
  // research.
  //
  // For example a boost of 1.5 maked low matches (synonymStartsWithQuery and
  // wordInNameStartsWithQuery) bump up the list a lot, but would not position
  // them above an exact name match.
  options.forEach(function (o) {
    o.weight = calculateWeight(o.name, query, o.synonyms) * (o.boost || 1);
  });

  return options.filter(function (o) {
    return o.weight > 0;
  }).sort(byWeightThenAlphabetically).map(function (o) {
    return o.name;
  });
}
