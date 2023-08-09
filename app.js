const { app, BrowserWindow } = require('electron')
const fs = require('node:fs')
const childProcess = require('child_process')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  win.loadFile('./installerViews/installer.html')

  // var discordAppPath = path.join(process.env.LOCALAPPDATA, 'Discord/')

  // let discordAppRegex = /app-([0-9]+(\.[0-9]+)+)/i;
  // let AppDataContent = fs.readdirSync(discordAppPath)

  // for (let i = 0; i <= AppDataContent.length; i++) {
  //   var name = AppDataContent[i]
  //   if (discordAppRegex.test(name)) {
  //       discordAppPath = path.join(discordAppPath, name)
  //       break
  //   }
  // }

  // discordAppPath = path.join(discordAppPath, 'modules/')

  // let discordAppCoreRegex = /discord_desktop_core-\d/i;
  // let ModulesContent = fs.readdirSync(discordAppPath)

  // for (let i = 0; i <= ModulesContent.length; i++) {
  //   var name = ModulesContent[i]
    
  //   if (discordAppCoreRegex.test(name)) {
  //       discordAppPath = path.join(discordAppPath, name)
  //       break
  //   }
  // }

  // discordAppPath = path.join(discordAppPath, 'discord_desktop_core/')

  // fs.copyFileSync(path.join(__dirname, 'Patches', 'mainScreen.js'), )
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})