/**
 * @param {array} stock
 * @return {int}
 */


/* 

[문제 설명]
제로마트에서 창고정리를 위해 보유하고 있는 재고를 줄을 세워서 순차적으로 정리하려고 합니다.
다만, 저희는 굉장히 게으르기 때문에 stock 배열이 주어지면, 딱 한 번만 일을 하려고 합니다.
이 때, 저희가 할 수 있는 일은 2가지가 있습니다. 첫 번째로는 두 가지 물품의 자리를 서로 바꾸는 일과 두 번째로는 정해진 시작과 끝 자리의 물건을 거꾸로 배치하는 일을 할 수 있습니다.
예를 들어 [1, 2, 5, 4, 3] 라는 배열이 존재할 때, 5와 3의 위치를 바꾸면 순차적으로 정렬이 되고, 또는 5부터 3까지의 위치를 통째로 거꾸로 배치하면 순차적으로 정렬이 됩니다.
이는 [5,4,3]의 배열을 [3,4,5]로 거꾸로 배치하여 원래의 자리에 넣는 것과 일맥상통합니다.
이와 같은 2가지 업무를 할 수 있을 때, 주어진 재고배열을 가지고 한 번의 업무로 오름차순으로 배치할 수 있으면 1 배치할 수 없다면 0으로 반환해주세요.

[제한 사항]
- 재고 배열의 길이는 2 이상 100000이하입니다.
- 각 재고 원소의 크기는 0 이상 100000 이하입니다.
- 모든 재고 원소는 재고 배열에 유일하게 존재합니다.

[입력 형식]
- stock이라는 재고 배열이 주어집니다.
[출력 형식]
- 재고 배열을 정해진 1번의 작업만으로 오름차순으로 배열할 수 있는지 여부를 반환해주세요.


*/
function solution(stock) {
    let downMarks = countDownMarks(stock);
    console.log(downMarks);
    let newArray, newDownMarks, start, end;

    // try swap
    if (downMarks.length == 1 ||
        downMarks.length == 2) {

        newArray = stock.slice(0);

        start = downMarks.shift();
        end = (downMarks.length) ? downMarks.shift() + 1 : start + 1;

        swap(newArray, start, end);
        newDownMarks = countDownMarks(newArray);
        if (!newDownMarks.length) {
            return 1;
        }
    }

    // try reverse
    if (downMarks.length > 2 &&
        downMarks.length == downMarks[downMarks.length - 1] - downMarks[0] + 1) {

        start = downMarks.shift();
        end = downMarks.pop() + 1;
        newArray = reverse(stock, start, end);
        newDownMarks = countDownMarks(newArray);
        if (!newDownMarks.length) {
            return 1;
        }
    }

    return 0
}

function swap(array, idx1, idx2) {
    let tmp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = tmp;
}

function reverse(array, idx1, idx2) {
    return array.slice(0, idx1).concat(array.slice(idx1, idx2 + 1).reverse()).concat(array.slice(idx2 + 1));
}

function countDownMarks(array) {
    let downMarks = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i + 1] < array[i]) {
            downMarks.push(i);
        }
    }

    return downMarks;
}

console.log(solution([1,2,3,10,9,8,7]))