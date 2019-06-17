let P1 = {
  x: 1,
  y: 6
};
let P2 = {
  x: 2,
  y: 7
};
let P3 = {
  x: 5,
  y: 9
};
const distanceBetweenPoints = (p1, p2) => {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
};
const checkTriangle = (p1, p2, p3) => {
  distance1 = distanceBetweenPoints(p1, p2);
  distance2 = distanceBetweenPoints(p2, p3);
  distance3 = distanceBetweenPoints(p1, p3);
  if (
    distance1 + distance2 > distance3 ||
    distance1 + distance3 > distance2 ||
    distance3 + distance2 > distance1
  ) {
    console.log("it is a triangle");
  } else {
    console.log("not a triangle");
  }
};
checkTriangle(P1, P2, P3);
