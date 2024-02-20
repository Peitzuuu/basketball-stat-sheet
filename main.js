let players = [
  { name: '櫻木花道', pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: '流川楓', pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: '赤木剛憲', pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: '宮城良田', pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: '三井壽', pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
]

const dataPanel = document.querySelector('#data-panel')

// write your code here
function displayPlayerList(players) {
  let htmlContent = ''
  //跑players裡每一個物件
  players.forEach((player) => {
    htmlContent += `<tr>`
    //跑player裡每一個key的值
    for (let key in player) {
      //名字分開迭代
      if (key === "name") {
        htmlContent += `<td>${player[key]}</td>`
      } else {
        //重複的加減號一起迴圈
        htmlContent += `
          <td>
            <span>${player[key]}</span>
            <i class="fa fa-plus-circle up"></i>
            <i class="fa fa-minus-circle down"></i>
          </td>
        `
      }
    }
    htmlContent += `</tr>`
  })
  return htmlContent
}

dataPanel.innerHTML = displayPlayerList(players)

dataPanel.addEventListener('click', function (event) {
  let target = event.target
  const scoreBox = target.parentElement.firstElementChild
  let score = Number(scoreBox.innerText)
  if (target.matches('.fa-plus-circle')) {
    score += 1
  } else if (target.matches('.fa-minus-circle') && score > 0) {
    score -= 1
  }
  scoreBox.innerText = score
})