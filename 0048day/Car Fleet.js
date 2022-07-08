/* 
현재 위치를 나타내는 position 배열과 각 차들의 시속을 나타내는 speed배열과 목표지점인 target이 인풋값으로 들어온다.

각 차들이 target지점에 같은 시점에 도달하면 한 무리(fleet)을 형성했다고 한다.
또한 만약 target까지 가는 지점 이전에 서로 fleet을 형성하면, 속도가 빠른차가 느린차에게 맞춰줘서 fleet을 유지한다.

총 몇 개의 fleet이 형성되는 지 정수값으로 반환한다.

Example 1:

Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3
Explanation:
The cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12.
The car starting at 0 does not catch up to any other car, so it is a fleet by itself.
The cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.
Note that no other cars meet these fleets before the destination, so the answer is 3.


*/



var carFleet = function(target, position, speed) {
    let len = position.length;
    let map = new Map(), 
    res = 0, 
    lastTime = -1;

    for(let i = 0; i < len; i++){
        map.set(position[i], speed[i]);
    }
    
    //배열의 첫 번째 차가 target에 가장 가까운 차가 되게 position기준 내림차순 정렬
    const sortedPos = [...map.keys()].sort((a, b) => b - a);
    
    for(let i = 0; i < len; i++){
        let time = (target - sortedPos[i]) / map.get(sortedPos[i]);
        //남은 거리를 속력으로 나눈 값을 time에 할당
        
        // case 1: i번째 차량이 더 앞선 position의 차량이 target에 도착하는 시간보다 더 빠르거나 똑같이 target에 도달한다면, 이들은 merge될 것이다.
        // case 2: i번째 차량이 더 앞선 position의 차량이 target에 도착하는 시간보다 더 느리면 merge될 수 없다.
        if(time > lastTime){ 
            res++;
            lastTime = time;
        }
    }
    
    return res;
};