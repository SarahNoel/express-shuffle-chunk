var classmates = ["Alex", "Amber", "Ashley", "Ben", "Bradley", "Brandon", "Charles", "Chip", "Crystal", "Dominic", "Erik", "Ethan", "Jeff", "Johnny", "Keith", "Kierston", "Kyle", "Lance", "Lucy", "Luis", "Patrick", "Pete", "Robert", "Ryan", "Sarah", "Suhayl", "Yusef", "Zoe"];

function shuffle(arr){
  var newArray = [];
  var workA = arr.slice(0);
  arrLength = workA.length;
    for (var i = 0; i < arrLength; i++) {
      var num = Math.floor(Math.random() * workA.length);
      newArray.push(workA.splice(num,1)[0]);
  }
  return newArray;
}

  function chunk(arr, num) {
  newChunk = [];
  i = 0;
  while (i < arr.length) {
    var size = Math.ceil((arr.length - i) / num--);
    newChunk.push(arr.slice(i, i += size));
  }
  return newChunk;
}

module.exports = {
  shuffle: shuffle,
  chunk: chunk
};
