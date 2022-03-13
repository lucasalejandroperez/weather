export const getUserLocation = async(): Promise<[number, number]> => {

    return new Promise( (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                resolve([ coords.longitude, coords.latitude])
            },
            ( err ) => {
                console.log('Unable to obtain geolocalization: ', err);
                reject();
            }
        )
    })
}