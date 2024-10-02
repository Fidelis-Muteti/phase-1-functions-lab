

function distanceFromHqInBlocks(block) {
    const hqLocation = 42; 
    return Math.abs(block - hqLocation);
  }
  
  console.log(distanceFromHqInBlocks(50));
  console.log(distanceFromHqInBlocks(34));


function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264; 
}
function distanceTravelledInFeet(startBlock, endBlock) {
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    return distanceInBlocks * 264; 
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare for distances over 2000 feet but under 2500 feet
    } else {
        return 'cannot travel that far';
         }
        }    