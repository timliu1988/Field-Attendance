// ====== 出勤打卡（Firebase 版）設定檔 ======
// 只需要改這個檔案。firebase 留 null 時會進入「示範模式」（資料只存在本機，方便先試用）。

window.APP_CONFIG = {
  backend: "firebase",

  // Excel 大總表標題前綴，例如公司或部門名稱
  companyName: "我的團隊",

  // 約定上下班時間（「批次登記」會用這組時間）
  standardIn: "08:30",
  standardOut: "17:30",

  // 出勤時數＝下班－上班－與午休重疊的時間；不在 dailyHours～maxDailyHours 之間會標紅
  lunchStart: "12:30",
  lunchEnd: "13:30",
  dailyHours: 8,
  maxDailyHours: 8.5,

  // 半天假：可以請半天的假別，以及上午班／下午班的時間
  //   請「上午」假 → 自動帶入下午班時間；請「下午」假 → 自動帶入上午班時間
  //   半天的時數範圍為全天的一半（4:00–4:15）
  halfDayTypes: ["休假", "事假", "病假", "特休", "公假", "天災假"],
  amShift: ["08:30", "12:30"],
  pmShift: ["13:30", "17:30"],

  // 示範模式（firebase 為 null）時登入畫面顯示的名單，依序填入同仁名字，例如：
  // demoNames: ["王小明", "陳美玲", "林志豪"],
  // 留空會顯示範例名字。正式版（填了 firebase 之後）的名單改由 App 內「名單裡沒有我？」加入。
  demoNames: ["Bill Fang", "Charlene Lu", "Jay Hsu", "Tim Liu", "Bonnie Kuo", "Jerry Wang", "Penny Wu"],

  // 到 Firebase Console → 專案設定 → 你的應用程式 → 複製 firebaseConfig 貼在這裡
  firebase: null
  // firebase: {
  //   apiKey: "AIza...",
  //   authDomain: "your-project.firebaseapp.com",
  //   projectId: "your-project",
  //   storageBucket: "your-project.appspot.com",
  //   messagingSenderId: "1234567890",
  //   appId: "1:1234567890:web:abcdef"
  // }
};
