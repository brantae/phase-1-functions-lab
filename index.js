// Code your solution in this file!

const hqStreet = 42;
const blocksInFeet = 264;

function distanceFromHqInBlocks(pickup) { 
    if (pickup > hqStreet) {
        return pickup - hqStreet;
    }
    else if (pickup < hqStreet) {
        return hqStreet - pickup;
    }

} 

function distanceFromHqInFeet(pickup) { 
    if (pickup > hqStreet) {
        return (pickup - hqStreet) * blocksInFeet;
    }
    else if (pickup < hqStreet) {
        return (hqStreet - pickup) * blocksInFeet;
    }

} 

function distanceTravelledInFeet(start, destination) { 
    if (destination > start) {
        return (destination - start) * blocksInFeet;
    }
    else if (destination < start) {
        return (start - destination) * blocksInFeet;
    }
}
 

function calculatesFarePrice(start, destination) { 
    // clean up cb in easy to read variable
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    // free if less than 400 test case
    if (distanceInFeet <= 400) {
      return 0;
    // 2 cents if between 400 and 2000 test case  
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return 0.02 * (distanceInFeet - 400);
    // 25 bucks if over 2000 but under 2500 test case  
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
      return 25;
    // over 2500 test case
    } else {
      return "cannot travel that far";
    }
  }