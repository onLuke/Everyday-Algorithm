/* 출석 체크 */

function Dictionary(items = {}){
    this.items = items;
};

Dictionary.prototype.has = function(key){
    return key in this.items;
};

Dictionary.prototype.set = function(key, value){
    this.items[key] = value;
};

 
/* user code */
function answer(class_1, class_2) {
    let result = [];
  
    // 코드 구현 시작 영역
    
    let dictionary = new Dictionary();

    for(let i = 0; i<class_2.length; i++){
        dictionary.set(class_2[i], true);
    }

    for(let i = 0; i<class_1.length; i++){
        if(dictionary.has(class_1[i])){
            result.push(class_1[i]);
        }
    }
    // 코드 구현 종료 영역
  
    return result;
  }
  
  /* main code */
  let input = [
    // TC: 1
    [
      ["Kali", "Oliver", "Naomi"],
      ["Oliver", "Naomi", "Maya"],
    ],
  
    // TC: 2
    [
      ["Roxy", "Olga", "Kara", "Nana"],
      ["Oliver", "Roxy", "Kara", "Nana", "Maya"],
    ],
  
    // TC: 3
    [
      ["Roxy", "Ravi", "Nana", "Rei", "Karis", "Mana", "Naomi"],
      ["Olga", "Nana", "Rei", "Naomi", "Kali", "Ravi", "Kara"],
    ],
  ];
  
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i][0], input[i][1]));
  }
  