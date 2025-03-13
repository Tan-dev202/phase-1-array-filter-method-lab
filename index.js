function findMatching(drivers, name){
    return drivers.filter(driverName => {
       return driverName.toLowerCase() === name.toLowerCase()
    });
}

function fuzzyMatch(drivers, initialName) {
    let nameLength = initialName.length;
    return drivers.filter(driverName => {
        return driverName.slice(0, nameLength) === initialName;
    });
}

function matchName(drivers, name) {
    return drivers.filter(driver => {
        return driver.name.toLowerCase() === name.toLowerCase();
    });
}