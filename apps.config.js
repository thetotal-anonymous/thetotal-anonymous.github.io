import displayPartner from "./components/apps/partner";
import displayChat from './components/apps/chat';
import displayVsCode from "./components/apps/vscode";
import { displayTerminal } from "./components/apps/terminal";
import { displaySettings } from "./components/apps/settings";
import { displayChrome } from "./components/apps/chrome";
import { displayTrash } from "./components/apps/trash";
import { displayGedit } from "./components/apps/gedit";
import { displayAboutRechard } from "./components/apps/rechard";
import { displayTerminalCalc } from "./components/apps/calc";

const apps = [
  {
    id: "about-Rechard",
    title: "About Rechard",
    icon: "./images/logos/RechardChandler.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayAboutRechard,
  },
  {
    id: "chrome",
    title: "Google Chrome",
    icon: "./themes/Chandler/apps/chrome.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayChrome,
  },
  {
    id: "calc",
    title: "Calc",
    icon: "./themes/Chandler/apps/calc.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayTerminalCalc,
  },
  {
    id: "vscode",
    title: "Visual Studio Code",
    icon: "./themes/Chandler/apps/vscode.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayVsCode,
  },
  {
    id: "chatfi",
    title: "Chat Fi",
    icon: "./themes/Chandler/apps/chat.jpeg",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayChat,
  },
  {
    id: "partner",
    title: "Partner",
    icon: "./themes/Chandler/apps/partner.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayPartner,
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: "./themes/Chandler/apps/bash.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayTerminal,
  },

  {
    id: "settings",
    title: "Settings",
    icon: "./themes/Chandler/apps/gnome-control-center.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displaySettings,
  },
  {
    id: "gedit",
    title: "Contact Me",
    icon: "./themes/Chandler/apps/gedit.png",
    disabled: false,
    favourite: false,
    desktop_shortcut: true,
    screen: displayGedit,
  },
  {
    id: "trash",
    title: "Trash",
    icon: "./themes/Chandler/system/user-trash-full.png",
    disabled: false,
    favourite: false,
    desktop_shortcut: false,
    screen: displayTrash,
  },
];

export default apps;
