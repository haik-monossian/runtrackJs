function jourFerie(date) {
    const joursFeries = ["2022-01-01", "2022-05-01", "2022-05-08", "2022-07-14", "2022-08-15", "2022-11-01", "2022-11-11", "2022-12-25"];
    if (joursFeries.includes(date)) {
        console.log(`le ${date} est un jour férié`);
    } else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log(`le ${date} est un week-end`);
    } else {
        console.log(`le ${date} est un jour travaillé`);
    }
}

jourFerie("2022-01-01");
jourFerie("2022-01-02");
jourFerie("2022-01-03");