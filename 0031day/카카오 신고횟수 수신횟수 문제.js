/* 
카카오 신고메일 수신 횟수 문제

id_list <= id_list에 유저가 신고한 대상이 정지되었을 때 알림 메일을 받는다. 순서대로 메일을 받는 횟수를 반환해야함 ["muzi", "frodo", "apeach", "neo"]
report <= 누가 누구를 신고했는 지 쉼표로 구분한 문자열 원소로 이뤄진 배열 ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
k <= 정지되는 신고 횟수 2

*/


function solution(id_list, report, k) {
    var answer = [];
    
    let setReport = [...new Set(report)].map(el => el.split(" "));
    
    let ban = new Map(),
        id = new Map();
    


    
    setReport.forEach(el =>{
        ban.set(el[1], ban.get(el[1]) + 1 || 1)
    })
    

    
    for(let li of ban){
        if(li[1] < k) ban.delete(li[0]);
       
    }
    
    
    for(let el of setReport){
        if(ban.has(el[1])) id.set(el[0], id.get(el[0]) + 1 || 1);
    }

    
    for(let i of id_list){
        answer.push(id.get(i) || 0)
    }
    
    
    return answer;
}


console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2))