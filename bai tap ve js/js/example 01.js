(function(){
    var hotel = {
        name: 'Park',
        roomRate: 240,
        disconnect: 15,
        offerPrice: function () {
            var offerRate = this.roomRate * ((100 - this.disconnect) / 100);
            return offerRate;
        }
    };

    var hotelName, roomRate, specialEate;

    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialEate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
    speciaRate.textContent = '$' + hotel.offerPrice();

    var expiryMsg;
    var today;
    var elEnds;

    function offerExpires(today) {
        var weekProm, day, date, month, year, dayNames, monthNames;
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        mothNames = ['January', 'February', 'March', 'April', 'May', 'June', 'july', 'August', 'September', 'October', 'Noveber', 'December'];

        day = dayNames[weekPromToday.getDay()];
        date = weekPromToday.getDate();
        month = monthNames[weekPromToday.getMonth()];
        year = weekFromToday.getFullYear();

        expiryMsg = 'Offer expires next';
        expiryMsg += day + '<br />(' + date + '' + month + '' + year + ')';
        return expiryMsg;
    }

    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);
}());