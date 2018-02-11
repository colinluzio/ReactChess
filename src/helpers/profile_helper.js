export const getCountry = function(countryLink) {
    let _pos         = countryLink.lastIndexOf('/');
    let _countryCode = countryLink.substring(_pos + 1);
    let img          = _countryCode.toLowerCase();
    return img;
}
