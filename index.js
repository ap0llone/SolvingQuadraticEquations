function discre(a,b,c) {
    let d = Math.pow(b,2) - 4 * a * c;
    let x1 = (-b + Math.sqrt(d)) / 2 * a;
    let x2 = (-b - Math.sqrt(d)) / 2 * a;
    if(d < 0){
        return 'There is no solution';
    }
    else if(d == 0){
        let x = (-b / 2 * a);
        return `x = ${x}`; 
    }
    else{
        return `x1 = ${x1}  x2 = ${x2}`;
    }
}
