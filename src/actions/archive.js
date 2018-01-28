import axios from 'axios';

const ROOT_URL = 'https://api.chess.com/';
let promiseCount = 0;
let archives = {archives:[]};

export const FETCH_ARCHIVE = 'FETCH_ARCHIVE';

export function fetchArchive(user){
    const url = ROOT_URL+'pub/player/'+user+'/games/archives'
    const request = axios.get(url);

    return(dispatch) => {
        request.then(({data}) => {

            var archiveMonths = data.archives.reverse().slice(0,12);
            let interval = 1000;

            archiveMonths.map(function(value,index){
                    const request =  axios.get(value);
                        request.then(({data}) => {
                            //reset interval to 1000
                            archives.archives.push(data);
                            promiseCount += 1;
                            if(promiseCount == 12 || promiseCount == archiveMonths.length){
                                dispatch({type: 'FETCH_ARCHIVE',payload: archives});
                            }
                        }).catch(function(e){
                            interval += 500;
                            setTimeout(function(){
                                const request =  axios.get(value);
                                    request.then(({data}) => {
                                        archives.archives.push(data);
                                        promiseCount += 1;
                                        console.log(promiseCount);
                                        if(promiseCount == 12 || promiseCount == archiveMonths.length){
                                            console.log(archives);
                                                dispatch({type: 'FETCH_ARCHIVE',payload: archives});
                                        }
                                    }).catch(function(e){

                                        console.log('got here');

                                });
                            },interval);

                    });

            });
        });
    }
    function testThis(){

    }
    function handleRejection(time, value){



    }
}
