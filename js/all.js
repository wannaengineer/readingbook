

//register註冊功能串API

//API網址
const apiUrl = "https://todoo.5xcamp.us";

const account = document.querySelector('.signUp-account');
const nickname = document.querySelector('.nickname');
const password = document.querySelector('.signUp-pwd');
const password2 = document.querySelector('.again-pwd');
const send = document.querySelector('.signUp-btn');
console.log(account);

//取出input的值，並將input的值組合成API註冊資料格式
send.addEventListener("click",function(e){
    if(account.value==="" && nickname.value===""){
        alert('請輸入資料');
        return;
    }else if(password.value !== password2.value){
        alert('密碼有誤，請重新確認');
    }
})






//todo資料庫
let data = [];

//整合todoData的資料，讓字串在網頁上顯示 （預設載入）
const list = document.querySelector('.todo-list');

function init(){
    let str = ""; // 設定空字串
    data.forEach(function(item,index){
        //組字串，再將字串用innerHTML插入list
        let content =`<li><input type= "checkbox">
        <span>${item.todo}</span>
        <input type="button" class="delete" value="刪除"></li>`
        str+=content;
    }) 
    list.innerHTML=str;
}
init();

//新增待辦事項
const addBtn = document.querySelector('.add-btn');
const add = document.querySelector('.add');
//console.log(addBtn)

addBtn.addEventListener('click',function(e){
    //console.log(e)
    let todoInfo = {}; //todo的data格式
    todoInfo.todo = add.value;
    data.push(todoInfo);
    add.value ="";
    init();
})




