import displayPartner from "./components/apps/partner";
import displayChat from './components/apps/chat';
import displayVsCode from "./components/apps/vscode";
import { displayTerminal } from "./components/apps/terminal";
import { displaySettings } from "./components/apps/settings";
import { displayChrome } from "./components/apps/chrome";
import { displayTrash } from "./components/apps/trash";
import { displayGedit } from "./components/apps/gedit";
import { displayAboutValerii } from "./components/apps/valerii";
import { displayTerminalCalc } from "./components/apps/calc";

const apps = [
  {
    id: "about-Valerii",
    title: "About Valerii",
    icon: "./images/logos/me.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayAboutValerii,
  },
  {
    id: "chrome",
    title: "Google Chrome",
    icon: "./themes/system/apps/chrome.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayChrome,
  },
  {
    id: "calc",
    title: "Calc",
    icon: "./themes/system/apps/calc.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayTerminalCalc,
  },
  {
    id: "vscode",
    title: "Visual Studio Code",
    icon: "./themes/system/apps/vscode.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayVsCode,
  },
  {
    id: "chatfi",
    title: "Chat Fi",
    icon: "./themes/system/apps/chat.jpeg",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayChat,
  },
  {
    id: "partner",
    title: "Partner",
    icon: "./themes/system/apps/partner.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayPartner,
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: "./themes/system/apps/bash.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayTerminal,
  },

  {
    id: "settings",
    title: "Settings",
    icon: "./themes/system/apps/gnome-control-center.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displaySettings,
  },
  {
    id: "gedit",
    title: "Contact Me",
    icon: "./themes/system/apps/gedit.png",
    disabled: false,
    favourite: false,
    desktop_shortcut: true,
    screen: displayGedit,
  },
  {
    id: "trash",
    title: "Trash",
    icon: "./themes/system/system/user-trash-full.png",
    disabled: false,
    favourite: false,
    desktop_shortcut: false,
    screen: displayTrash,
  },
];

export default apps;
