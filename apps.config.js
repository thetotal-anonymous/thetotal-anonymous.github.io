import displayPartner from "./components/apps/partner";
import displayChat from './components/apps/chat';
import displayVsCode from "./components/apps/vscode";
import { displayTerminal } from "./components/apps/terminal";
import { displaySettings } from "./components/apps/settings";
import { displayChrome } from "./components/apps/chrome";
import { displayTrash } from "./components/apps/trash";
import { displayGedit } from "./components/apps/gedit";
import { displayAboutKamin } from "./components/apps/kamin";
import { displayTerminalCalc } from "./components/apps/calc";

const apps = [
  {
    id: "about-Kamin",
    title: "About Kamin",
    icon: "./images/logos/KaminGregor.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayAboutKamin,
  },
  {
    id: "chrome",
    title: "Google Chrome",
    icon: "./themes/Gregor/apps/chrome.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayChrome,
  },
  {
    id: "calc",
    title: "Calc",
    icon: "./themes/Gregor/apps/calc.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayTerminalCalc,
  },
  {
    id: "vscode",
    title: "Visual Studio Code",
    icon: "./themes/Gregor/apps/vscode.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayVsCode,
  },
  {
    id: "chatfi",
    title: "Chat Fi",
    icon: "./themes/Gregor/apps/chat.jpeg",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayChat,
  },
  {
    id: "partner",
    title: "Partner",
    icon: "./themes/Gregor/apps/partner.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayPartner,
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: "./themes/Gregor/apps/bash.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayTerminal,
  },

  {
    id: "settings",
    title: "Settings",
    icon: "./themes/Gregor/apps/gnome-control-center.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displaySettings,
  },
  {
    id: "gedit",
    title: "Contact Me",
    icon: "./themes/Gregor/apps/gedit.png",
    disabled: false,
    favourite: false,
    desktop_shortcut: true,
    screen: displayGedit,
  },
  {
    id: "trash",
    title: "Trash",
    icon: "./themes/Gregor/system/user-trash-full.png",
    disabled: false,
    favourite: false,
    desktop_shortcut: false,
    screen: displayTrash,
  },
];

export default apps;
