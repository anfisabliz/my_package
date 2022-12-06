function runArray(maxI) {
  var i = 0;
  for (i; i < maxI; i++) {
    console.log(i);
  }
}

function runFibon(maxI) {
  var i = 0,
      result = 0,
      fibA = 0,
      fibB = 1;
  console.log(fibA + ' ');
  console.log(fibB + ' ');
  for (i; i < maxI; i++) {
    result = fibA + fibB;
    fibA = fibB;
    fibB = result;
    console.log(result + ' ');
  }
}



const args = process.argv.slice(2)
console.log('RunArray:');
runArray(args[0])
console.log('--------------------');
console.log(' ');

console.log('RunFibon:');
runFibon(args[0])
console.log('--------------------');

