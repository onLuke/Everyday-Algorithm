
function benchmark(callback1, callback2, times){

    let start1 = Date.now();

    for(let i=0; i<times; i++){
        callback1
    }

    let duration1 = Date.now()-start1;


    let start2 = Date.now();

    for(let i=0; i<times; i++){
        callback2
    }

    let duration2 = Date.now()-start2;


    if(duration1<duration2){
        console.log(`첫번째 함수가 ${duration2-duration1} ms 만큼 더 빠릅니다.`); 
        return;
    }else if(duration1>duration2){
        console.log(`두번째 함수가 ${duration1-duration2} ms 만큼 더 빠릅니다.`)
        return; 
    }else benchmark(callback1,callback2,times)
}


export{benchmark};