//載入 uuid 套件
// import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
//console.log(uuidv4()); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

let data = [
  {
    "id": 1,
    "name": "綠島自由行套裝行程",
    "imgUrl": "./images/travel_1.png",
    "location": "台北",
    "description": "嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。",
    "rate": 8.6,
    "group": 8,
    "price": 1280,
    "isTimeLimit": false
  },
  {
    "id": 2,
    "name": "清境高空觀景步道二日遊",
    "imgUrl": "./images/travel_2.png",
    "location": "台北",
    "description": "清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",
    "rate": 8.2,
    "group": 12,
    "price": 2580,
    "isTimeLimit": false
  },
  {
    "id": 3,
    "name": "南庄度假村露營車二日遊",
    "imgUrl": "./images/travel_3.png",
    "location": "台中",
    "description": "南庄雲水豪華露營車，快來擁有最愜意的露營體驗吧！<br>一泊一食，輕鬆享受露營車樂趣。<br>獨立衛浴與私人戶外露臺。<br>入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。",
    "rate": 9.2,
    "group": 2,
    "price": 2480,
    "isTimeLimit": false
  },
  // {
  //   "id": 4,
  //   "name": "山林悠遊雙人套票",
  //   "imgUrl": "./images/travel_4.png",
  //   "location": "台中",
  //   "description": "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。<br>（含雙龍瀑布入場券 x2）",
  //   "rate": 9.3,
  //   "group": 7,
  //   "price": 880,
  //   "isTimeLimit": true
  // },
  // {
  //   "id": 5,
  //   "name": "漁樂碼頭釣魚體驗套票",
  //   "imgUrl": "./images/travel_5.png",
  //   "location": "台中",
  //   "description": "台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！",
  //   "rate": 8.2,
  //   "group": 5,
  //   "price": 1280,
  //   "isTimeLimit": false
  // },
  // {
  //   "id": 6,
  //   "name": "熊森公園親子二日遊套票",
  //   "imgUrl": "./images/travel_6.png",
  //   "location": "高雄",
  //   "description": "來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！",
  //   "rate": 8.6,
  //   "group": 3,
  //   "price": 2480,
  //   "isTimeLimit": false
  // },
];
//取得目前 id的最大值(暫存id值)
let tempId = 0;

//套票卡片區塊
const ticketCardArea = document.querySelector('#ticketCardArea');

// 新增旅遊套票功能
const ticketName = document.querySelector("#ticketName");
const ticketImgUrl = document.querySelector("#ticketImgUrl");
const ticketLocation = document.querySelector("#ticketLocation");
const ticketPrice = document.querySelector("#ticketPrice");
const ticketNum = document.querySelector("#ticketNum");
const ticketRate = document.querySelector("#ticketRate");
const ticketDescription = document.querySelector("#ticketDescription");
const btnAddTicket = document.querySelector("#btnAddTicket");

//下拉選單-地區搜尋
const locationSearch = document.querySelector("#locationSearch");
//本次搜尋共幾筆資料
const countsSearchResult = document.querySelector("#countsSearchResult");

//查無資料區塊
const cantFindArea = document.querySelector(".cantFind-area");

// 初始化
function init(){
  renderData(data);
}
init();

//渲染 卡片資料到網頁上
function renderData(data){
  let str = "";
  if(data.length == 0){
    cantFindArea.style.display = "block";  //查無資料區塊-顯示
  }else{
    cantFindArea.style.display = "none";   //查無資料區塊-隱藏
    data.forEach((item, index) => {
      //設定 tempId 做為新增資料使用
      if(item.id > tempId){
        tempId = item.id;
      }
      //設定販售組數資訊
      let group = "";
      if(item.isTimeLimit){
        group = `限時搶購`;
      }else {
        group = `剩下最後 ${item.group} 組`;
      }
      //組HTML字串
      str += `<li class="ticket-card">
      <div class="ticket-card-img mb-5">
        <a href="#">
          <img src=${item.imgUrl} alt="photo-travel">                
        </a>
        <div class="ticket-card-location fs-m px-5 py-2">${item.location}</div>
        <div class="ticket-card-rank px-2 py-1">${item.rate}</div>
      </div>
      <div class="ticket-card-content d-flex flex-column justify-content-between px-5">
        <div>
          <h2 class="fs-l fw-medium text-primary mb-4">${item.name}</h2>
          <p class="mb-8 text-gray-dark">
            ${item.description}
          </p>
        </div>
        <div class="d-flex justify-content-between align-items-center text-primary mb-4">
          <p class="fw-medium">
            <span class="material-icons-outlined mr-1">
              error
            </span>
            ${group}
          </p>
          <div class="d-flex align-items-center">
            <span class="fw-medium mr-1">TWD</span>
            <span class="fs-xl fw-medium">$${item.price.toLocaleString('en-US')}</span>
          </div>
        </div>
      </div>
    </li>`;
    })
  }
  ticketCardArea.innerHTML = str;
  countsSearchResult.textContent = `本次搜尋共 ${data.length} 筆資料`;
}

//監聽 新增套票按鈕
btnAddTicket.addEventListener('click',(e) =>{
  let arrInputs = [  //存放表單DOM變數
    ticketName,
    ticketImgUrl,
    ticketLocation,
    ticketPrice,
    ticketNum,
    ticketRate,
    ticketDescription
  ]
  //檢查欄位
  let chkMsg = chkFormValue(arrInputs);
  if(chkMsg != "") { //若有驗證不過的訊息，alert提醒
    alert(chkMsg);
  } else {
    let obj = {}; //宣告一個物件，用來存放新增的套票內容
    obj.id = ++tempId;
    obj.name = ticketName.value;
    obj.imgUrl = ticketImgUrl.value;
    obj.location = ticketLocation.value;
    obj.description = ticketDescription.value;
    obj.rate = ticketRate.value;
    obj.group = ticketNum.value;
    obj.price = separator(ticketPrice.value); //數字三位一撇(如 1,000)
    obj.isTimeLimit = false;
    data.push(obj);
    renderData(data);
  }
})

//監聽 下拉選單-地區搜尋
locationSearch.addEventListener('change', (e)=>{
  // console.log(e.target.value);
  if(e.target.value == "全部地區") {
    init();
  } else {
    let filterData = data.filter((item, index) =>{
      return item.location == e.target.value;
    })
    renderData(filterData);
  }
})

//檢查、驗證新增套票的input欄位是否符合要求
function chkFormValue(arrInputs, chkMsg){
  let str = "";
  arrInputs.forEach((item, index)=>{
    if(item.value == "") {
      str += `欄位【${item.name}】不可空白，請填寫。\n`;
    } else {
      if(item.name == "套票星級" && !(parseInt(item.value)>0 && parseInt(item.value)<=10)) {
        str += `【套票星級】請輸入數值:1~10\n`;
      } else if(item.name == "套票組數" && parseInt(item.value) <=0 ) {
        str += `【套票組數】請輸入大於0數值\n`;
      } else if(item.name == "套票金額" && parseInt(item.value) <=0) {
        str += `【套票金額】請輸入大於0數值\n`;
      } else if(item.name == "套票描述" && parseInt(item.value.length) > 80) {
        str += `【套票描述】的字數不可以超過80個字，請重新確認。\n`;
      }
    }
  })
  return str;
}

//數字 三位一撇
function separator(numb) {
  var str = numb.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return str.join(".");
}