const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const fs = require('fs');

app.on('ready', function () {
    createMainWindow();
    initWindowMenu();
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

//==========================================================================

var win = null;

function createMainWindow() {
    win = new BrowserWindow({
        width: 1000,
        height: 600,
        resizble: true
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    //win.loadURL('file://$(__dirname)/index.html')

    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

//==================================================================================

function initWindowMenu() {
    const menu = Menu.buildFromTemplate([
        {
            label: 'Operations',
            submenu: [
                {
                    label: 'Main Window',
                    accelerator: 'CmdorCtrl+M',
                    click() { showMain(); }
                },
                {
                    label: 'Quit',
                    accelerator: 'CmdorCtrl+Q',
                    role: 'quit'
                }
            ]
        }
    ]);
    Menu.setApplicationMenu(menu);

}

//=====================================================================================

function showMain() {
    if (win === null) {
        createMainWindow();
    }
    else {
        win.focus();
    }
}

//=====================================================================================

exports.openWindow=() =>{
    var win2= new BrowserWindow({
        width: 1000,
        height: 600,
        resizble: true
    })
    win2.loadURL(url.format({
        pathname: path.join(__dirname, 'login.html'),
        protocol: 'file',
        slashes: true
    }));

    
}