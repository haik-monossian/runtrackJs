function isBissextile(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("Année bissextile");
        return true;
    } else {
        console.log("Année normale");
        return false;
    }
}

isBissextile(2020); // Année bissextile
isBissextile(2100); // Année normale
isBissextile(2000); // Année bissextile
