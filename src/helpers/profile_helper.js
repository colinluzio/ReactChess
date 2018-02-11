export const getCountry = function(countryLink) {
    let _pos         = countryLink.lastIndexOf('/');
    let _countryCode = countryLink.substring(_pos + 1);
    let img          = _countryCode.toLowerCase();
    return img;
}

export const getDate  = function(timestamp){
    console.log(timestamp);
    let date  = new Date();
    date.setTime(timestamp*1000);
    let day   = date.getDate();
    let month = date.getMonth() + 1;
    let year  = date.getFullYear();
    let formattedDate = day+'/'+month+'/'+year;

    return formattedDate;
}
