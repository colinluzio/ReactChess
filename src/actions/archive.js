import axios from 'axios';

const ROOT_URL = 'https://api.chess.com/';

export const FETCH_ARCHIVE = 'FETCH_ARCHIVE';

export function fetchArchive(user){
    const url = ROOT_URL+'pub/player/'+user+'/games/archives'
    const request = axios.get(url);

    return(dispatch) => {
        request.then(({data}) => {
            var archives = {archives:[]};
            var archiveMonths = data.archives.slice(0,10);

            archiveMonths.map(function(value,index){
                    const request =  axios.get(value);
                        request.then(({data}) => {
                            archives.archives.push(data);

                            if(index == 9){
                                dispatch({type: 'FETCH_ARCHIVE',payload: archives});
                            }
                        });

            });
        });
    }

    // return(dispatch) => {
    //         request.then(({data}) => {
    //             dispatch({type: 'FETCH_ARCHIVE',payload: data})
    //         }).catch((err) => {
    //             //reattempt to fetchUserGames
    //             return(dispatch) => {
    //                     request.then(({data}) => {
    //                         dispatch({type: 'FETCH_',payload: data})
    //                     });
    //             };
    //         })
    // };

}
