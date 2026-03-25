const { contextBridge, ipcRenderer } = require('electron');
const { marked } = require('marked');

contextBridge.exposeInMainWorld('api', {
    saveFile: (content) => ipcRenderer.invoke('save-file', content),
    onTriggerSave: (callback) => ipcRenderer.on('trigger-save', callback),
    parseMarkdown: (text) => marked.parse(text)
});