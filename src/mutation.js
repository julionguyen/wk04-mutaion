const lapTimes = [2.34, 2.15, 2.93, 2.03, 1.98, 2.1, 2.16, 2.39, 2.42, 2.28];

const bestLapTime = findBestLapTime(lapTimes);

lapTimes.map((lapTime, i) => {
  if (bestLapTime === lapTime) {
    console.log(`Lap ${i + 1}: ${lapTime} - Best lap!`);
  } else {
    console.log(`Lap ${i + 1}: ${lapTime}`);
  }
});
function findBestLapTime(lap) {
    lapCopy = [...lap]
    lapCopy.sort((a,b) => b - a)
    return lapCopy[lap.length-1]
}

const myArray = ['I', 'would', 'like', 'to', 'say']

// 1. Add 'hello' to the end of the array
myArray = [...myArray,'hello']

// 2. Replace the first element in the array with 'Fred'

myArray.map((item, index) => {
    if (index != 1) {
        myArray = [...myArray,item]
    } else {
        myArray = [...myArray, ..."Fred"]
    }
})

// 3. Add 'you' in between 'like', and 'to' and add 'goodbye' at the end.

// 4. Remove 'like' and 'to' from the array (by index)

// 5. Sort the array