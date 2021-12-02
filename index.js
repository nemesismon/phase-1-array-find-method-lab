function superbowlWin(array) {
    let foundWin = array.find(function(element) {
        return element.result === 'W';
    })
    if (foundWin) {
        console.log(foundWin.year);
        return foundWin.year;
    }
    else {
        return foundWin;
    }
}