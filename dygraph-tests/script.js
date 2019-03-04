function lastNDaysISO(n, relativeToDate) {
    let today = relativeToDate? relativeToDate: new Date();
    const dates = [];
    while(n--) {
        dates.push(new Date(today.getFullYear(), today.getMonth(), today.getDate()-n).toISOString());
    }
    return dates;

}

function lastNDaysSimpleDateStr(n, relativeToDate) {
    let today = relativeToDate? relativeToDate: new Date();
    const dates = [];
    while(n--) {
        let currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()-n);
        let paddedMonthStr = (currentDate.getMonth() < 9) ? `0${currentDate.getMonth() + 1}` : `${currentDate.getMonth() + 1}`;
        let paddedDateStr = (currentDate.getDate() < 10) ? `0${currentDate.getDate()}` : `${currentDate.getDate()}`;
        dates.push(`${currentDate.getFullYear()}${paddedMonthStr}${paddedDateStr}`);
    }
    return dates;
}
