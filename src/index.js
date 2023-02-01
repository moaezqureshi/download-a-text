//run "npm start in your terminal" to start app

const { app, BrowserWindow } = require("electron");
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration:true
    }
  })

  win.loadFile('../demo-app/src/msg.html')
}

app.whenReady().then(() => {
  createWindow();
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

function validateForm() {
  var username = document.forms["loginForm"]["username"].value;
  var password = document.forms["loginForm"]["password"].value;
  if (username == "123456") {
    if (password == "0000") {
      //   window.location("msg.html");
      
    } else {
      alert("wrong credentials");
      return false;
    }
  } else {
    alert("wrong credentials");
    return false;
  }
}


const createFile = () => {
    let data = document.querySelector('textarea');
    const blob = new Blob([data], { type: "text/plain" });
    const link = document.createElement("a");
    link.download = "data.txt";
    link.href = URL.createObjectURL(blob);
    link.click;
    return true;
    }


// function saveFile() {
//   //   alert("Entered");
//   let txtarea = document.getElementById("txtarea");
//   if (fs.writeFile("textareaValue.txt",txtarea.value,function (err) {
//         if (err) {
//           alert("Error");
//           console.error(err);
//           return false;
//         }
//       }
//     )
//   ) {
//     alert("Success");
//     return true;
//   }
// }

