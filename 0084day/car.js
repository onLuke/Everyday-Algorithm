/* 
[문제 설명]

김제로는 자동차 딜러가 되었습니다. 김제로는 A개의 자동차를 매물로 가지고 있고, 각 자동차 P는 성능 X와 가격 Y를 가지고 있습니다.

또한 김제로에게는 B명의 고객이 자동차 구매요청을 했고, 각 고객 Q는 성능 X이상의 자동차와 Y이하의 가격을 가진 자동차를 구매하겠다고 했습니다.

각 고객은 최대 1대의 자동차를 구매할 수 있고, 각각의 자동차들은 한 명의 고객에게만 인도될 수 있습니다. 여기서 김제로가 자동차를 고객에게 가능한 한 최대로 판매한다면, 몇 대의 자동차를 판매할 수 있는지 알고 싶습니다.

자동차의 성능 및 가격 리스트와 고객이 원하는 자동차의 성능 및 가격 리스트가 주어졌을 때, 김제로가 최대로 판매할 수 있는 자동차의 대수를 구해주세요.

[제한 사항]

- 자동차 리스트와 고객 리스트의 길이는 1 이상 1000이하입니다.

- 자동차 리스트의 성능과 가격 값은 1 이상 1,000,000,000 이하입니다.

- 고객 리스트의 성능과 가격 값은 1 이상 1,000,000,000 이하입니다.

[입력 형식]

- "cars" 배열과 "clients" 배열이 주어집니다.

[출력 형식]

- 김제로가 최대로 판매할 수 있는 자동차의 수를 정수로 반환해주세요.
*/

function solution(cars, clients) {
  const x = 0
  const y = 1

  clients = clients.sort((a, b) => a[y] - b[y])
  cars = cars.sort((a, b) => a[x] - b[x])

  let sells = cars.reduce((total, car) => {
      for (let i = 0; i < clients.length; i++){
          const client = clients[i]
          if (client[y] >= car[y] && client[x] < car[x]) {
              clients.splice(i, 1)
              return total + 1
          }    
      }
      return total
  }, 0)

  return sells
}
