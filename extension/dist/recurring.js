!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=36)}({36:function(t,e,n){"use strict";function o(t){t({method:"get",baseURL:"https://review-api.udacity.com/api/v1",url:"me/submissions/assigned.json"}).then(function(t){if(0===t.data.length)return chrome.storage.local.set({currentSubmission:null}),void chrome.browserAction.setBadgeText({text:""});var e=t.data[0];chrome.storage.local.set({currentSubmission:e}),chrome.browserAction.setBadgeText({text:String(t.data.length)})})}function r(t){var e=new Date;t({method:"get",baseURL:"https://review-api.udacity.com/api/v1",url:"/me/submissions/completed.json?start_date="+new Date(e.getFullYear(),e.getMonth(),1).toISOString().slice(0,10)}).then(function(t){var e=0;t.data.forEach(function(t){e+=t.price}),chrome.storage.local.set({monthlyIncome:e})})}function i(t){t({method:"get",baseURL:"https://localhost:8000/api/v1",url:"/assign/status/"}).then(function(e){var n=e.data.assignRunnerActive,o=e.data.assigningProjects;chrome.storage.local.set({assignRunnerActive:n}),t({method:"get",baseURL:"https://review-api.udacity.com/api/v1",url:"/me/submission_requests.json"}).then(function(e){if(0===e.data.length)return void chrome.storage.local.get("certs",function(t){if("certs"in t){var e=t.certs;e.forEach(function(t){t.assigning=!1,t.wait=0,o.forEach(function(e){e.project_id===t.project_id&&(t.assigning=!0)})}),chrome.storage.local.set({certs:e})}});t({method:"get",baseURL:"https://review-api.udacity.com/api/v1",url:"/submission_requests/"+e.data[0].id+"/waits.json"}).then(function(t){var e=t.data;chrome.storage.local.get("certs",function(t){if("certs"in t){var n=t.certs;n.forEach(function(t){t.assigning=!1,t.wait=0,o.forEach(function(e){e.project_id===t.project_id&&(t.assigning=!0)})}),e.forEach(function(t){n.filter(function(e){return e.project_id===t.project_id})[0].wait=t.position}),chrome.storage.local.set({certs:n})}})})})})}Object.defineProperty(e,"__esModule",{value:!0}),e.getCurrentSubmission=o,e.getMonthlyIncome=r,e.getAssignmentDashboard=i}});