// Quadrants in which coordinates lie

const checkQuadrants = (xCordinate, yCordinate) => {
  if (xCordinate > 0 && yCordinate > 0) {
    return "First Quadrant";
  } else if (xCordinate < 0 && yCordinate > 0) {
    return "Second Quadrant";
  } else if (xCordinate < 0 && yCordinate < 0) {
    return "Third Quadrant";
  } else if (xCordinate > 0 && yCordinate < 0) {
    return "Fourth Quadrant";
  }
}

console.log(checkQuadrants(3, 2));