import dayjs from "dayjs";
/* ...existing code... */

// add Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, push, onChildAdded, remove } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const psInput = document.getElementById("psInput");
const linkInput = document.getElementById("linkInput");
const restrictCheckbox = document.getElementById("restrictCheckbox");
const requiredAccess = document.getElementById("requiredAccess");
const userRole = document.getElementById("userRole");
const secretConfirm = document.getElementById("secretConfirm");
const secretSpinner = document.getElementById("secretSpinner");
const saveJoinBtn = document.getElementById("saveJoinBtn");
const clearViewBtn = document.getElementById("clearViewBtn");
const secretAnimated = document.getElementById("secretAnimated");
const secretRevealInput = document.getElementById("secretRevealInput");

const chatLog = document.getElementById("chatLog");
const chatMessage = document.getElementById("chatMessage");
const publishBtn = document.getElementById("publishBtn");
const chatDesc = document.getElementById("chatDesc");
const serverLog = document.getElementById("serverLog");

const firebaseConfig = {
  apiKey: "AIzaSyDZH2ypbhTVTZe6M1rmw77JFxYtiZ4B_rw",
  authDomain: "chinashop-37641.firebaseapp.com",
  databaseURL: "https://chinashop-37641-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chinashop-37641",
  storageBucket: "chinashop-37641.firebasestorage.app",
  