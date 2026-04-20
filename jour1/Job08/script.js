function sommeNombrePremier(a, b) {
    function estPremier(n) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    let somme = 0;
    if (estPremier(a) && estPremier(b)) {
        somme = a + b;
        return somme;
    }
    else {
        return false
    }
}

console.log(sommeNombrePremier(10, 20));
console.log(sommeNombrePremier(11, 20));
console.log(sommeNombrePremier(11, 19));

