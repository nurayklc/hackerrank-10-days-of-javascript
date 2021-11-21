const ids = [1,2,3,6,9,8,7,4] 
const nums = [1,2,3,6,9,8,7,4]

let btn5 = document.querySelector("#btn5")

btn5.addEventListener("click", btnClick)

function btnClick(){
    nums.unshift(nums.pop())
    for(let i=0;i<8;i++){
        document.getElementById("btn" + ids[i]).innerHTML = nums[i]
    }
}