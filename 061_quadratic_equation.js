// Roots of a quadratic equation

const quadraticEqnRoots = (coefficientOfA, coefficientOfB, coefficientOfC) => {
  let root, root1, root2, realPart, imaginaryPart;
  let discriminant = ((coefficientOfB * coefficientOfB) - (4 * coefficientOfA * coefficientOfC));
  if (discriminant > 0) {
    root1 = (-coefficientOfB + Math.sqrt(discriminant)) / 2 * coefficientOfA;
    root2 = (-coefficientOfB - Math.sqrt(discriminant)) / 2 * coefficientOfA;
    return [root1, root2];
  } else if (discriminant === 0) {
    root = -coefficientOfB / 2 * coefficientOfA;
    return root;
  } else {
    realPart = (-coefficientOfB) / 2 * coefficientOfA;
    imaginaryPart = Math.sqrt(-discriminant) / 2 * coefficientOfA;
    root1 = realPart + "+" + imaginaryPart + "i";
    root2 = realPart + "-" + imaginaryPart + "i";
    return [root1, root2];
  }
}

console.log(quadraticEqnRoots(1, -5, 1));