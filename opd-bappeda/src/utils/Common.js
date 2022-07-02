export const domainAPI = 'http://adminmesuji.embuncode.com/api';
export const instansiID = 2

export const formatDate = (dateVal) => {
    var monthNames = ["Januari", "Februari", "Maret", "Aprril", "Mei", "Juni",
        "Juli", "Augustus", "September", "Oktober", "November", "Desember"
    ];
    
    var date = new Date(dateVal);
    var getDay = date.getDate();
    var getMonth = date.getMonth();
    var getYear = date.getFullYear();
    var hour = addZero(date.getHours());
    var minute = addZero(date.getMinutes());
    var second = addZero(date.getSeconds());
    return getDay + ' ' + monthNames[getMonth] + ' ' + getYear + ' ' + hour + ":" + minute + ":" + second;
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
