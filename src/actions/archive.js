import axios from 'axios';
import "babel-polyfill";

const ROOT_URL = 'https://api.chess.com/';
let promiseCount = 0;
let archives = {archives:[]};

export const FETCH_ARCHIVE = 'FETCH_ARCHIVE';

export function fetchArchive(user){
    const url = ROOT_URL+'pub/player/'+user+'/games/archives'
    const request = axios.get(url);

    return(dispatch) => {
        request.then(({data}) => {

            let archiveMonths = data.archives.reverse().slice(0,12);
            let interval = 1000;
            let _start = async function(){
                for(let x = 0; x < archiveMonths.length; x++){
                    await fetchMonthData(archiveMonths[x]);
                }
                dispatch({type: 'FETCH_ARCHIVE',payload: archives});
            }
            _start();

        });
    }

    function fetchMonthData(data){
        let action = new Promise(function(resolve,reject){

            const request =  axios.get(data);

            request.then(function(amount){
                archives.archives.push(amount.data);
                resolve(amount.data);
            }).catch(function(err){
                console.log(err);
            });
        });
        return action;

    }
}
