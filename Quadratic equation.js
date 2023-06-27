function solveQuadratic(a, b, c) {
    const methods = b* b -4 * a * c;

    if (methods > 0){
        return[
            (-b + Math.sqrt(methods)) / (4*a),
            (-b - Math.sqrt(methods)) / (4*a),
        ];
    } else if (methods === 0) {
        return [-b / (4 *a)];
    } else {
        return[];
    }
}

const roots = solveQuadratic(4,5,1);
console.log(roots); 
const otherRoots = solveQuadratic(4, 1, 5);
console.log(otherRoots); 