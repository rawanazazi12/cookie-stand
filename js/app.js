'use strict';
let container = document.getElementById('container');
let table = document.createElement('table');
container.appendChild(table);
let workingHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let shops = [];
function Shop(location, min, max, avgCookies) {
  this.Location = location;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.custNumHourly = [];
  this.cookisPerHour = [];
  this.totalCookies = 0;
  shops.push(this);
}
Shop.prototype.randomCust = function () {
  for (let i = 0; i < workingHours.length; i++) {
    this.custNumHourly.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
  }
};
Shop.prototype.cookiesHourly = function () {
  for (let i = 0; i < workingHours.length; i++) {
    this.cookisPerHour.push(Math.floor(this.avgCookies * this.custNumHourly[i]));
    this.totalCookies += this.cookisPerHour[i];
  }
};
function creatingHeaderRow() {
  let firstRow = document.createElement('tr');
  table.appendChild(firstRow);
  let nameCell = document.createElement('th');
  firstRow.appendChild(nameCell);
  nameCell.textContent = ('Name');
  for (let i = 0; i < workingHours.length; i++) {
    let th = document.createElement('th');
    firstRow.appendChild(th);
    th.textContent = workingHours[i];
  }
  let dailyhours = document.createElement('th');
  firstRow.appendChild(dailyhours);
  dailyhours.textContent = ('Daily Location Total');
}

creatingHeaderRow();

Shop.prototype.render = function () {
  let tableData = document.createElement('tr');
  table.appendChild(tableData);
  let LocaName = document.createElement('th');
  tableData.appendChild(LocaName);
  LocaName.textContent = this.Location;
  for (let i = 0; i < workingHours.length; i++) {
    let td = document.createElement('td');
    tableData.appendChild(td);
    td.textContent = this.cookisPerHour[i];
  }
  let totalTd = document.createElement('td');
  tableData.appendChild(totalTd);
  totalTd.textContent = this.totalCookies;
};
Shop.prototype.calc = function () {
  this.randomCust();
  this.cookiesHourly();
};
let seattle = new Shop('Seattle', 23, 65, 6.3);
let tokyo = new Shop('Tokyo', 3, 24, 1.2);
let dubai = new Shop('Dubai', 11, 38, 3.7);
let paris = new Shop('Paris', 20, 38, 2.3);
let lima = new Shop('Lima', 23, 65, 6.3);
seattle.calc();
tokyo.calc();
dubai.calc();
paris.calc();
lima.calc();


function creatingFooterRow() {
  let footerRow = document.createElement('tr');
  table.appendChild(footerRow);
  let firstFooterTh = document.createElement('th');
  footerRow.appendChild(firstFooterTh);
  firstFooterTh.textContent = 'Total';

  let totalOfTotal = 0;
  for (let i = 0; i < workingHours.length; i++) {
    let totalEachHour = 0;
    for (let j = 0; j < shops.length; j++) {
      totalEachHour += shops[j].cookisPerHour[i];
      totalOfTotal += shops[j].cookisPerHour[i];
    }

    let dataTh = document.createElement('th');
    footerRow.appendChild(dataTh);
    dataTh.textContent = totalEachHour;
  }
  let lastTh = document.createElement('th');
  footerRow.appendChild(lastTh);
  lastTh.textContent = totalOfTotal;
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
creatingFooterRow();



// *************************************************************** LAB 06**************************************************
// let container = document.getElementById('container');
// // Seattle
// let seattle={
//   min:23,
//   max:65,
//   avg:6.3,
//   ctomeusr:[],
//   cookies:[],
//   total:0,
//   workingHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   updatingTheCookies:function(){
//     for(let i=0;i<this.workingHours.length;i++){
//       let cookies=Math.floor(this.customer[i]*this.avg);
//       console.log(cookies);
//       this.cookies.push(cookies);
//       this.total=this.total+this.cookies[i];
//     }
//   },
//   updatingTheCustomers: function(){
//     let customer=0;
//     for(let i=0;i<this.workingHours.length;i++){
//       customer=Math.floor(Math.random() * (this.max-this.min))+this.min;
//       console.log(customer);
//       this.customer.push(customer);
//     }
//     console.log(this.customer);
//   },
//   render :function(){
//     let h1Element=document.createElement('h1');
//     salmon.appendChild(h1Element);
//     h1Element.textContent='Seattle';
//     let ulElement=document.createElement('ul');
//     salmon.appendChild(ulElement);
//     for(let i=0;i<this.workingHours.length;i++){
//       let liElement=document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent=`${this.workingHours[i]}:${this.cookies[i]}cookies`;
//     }
//     let totalLi=document.createElement('li');
//     ulElement.appendChild(totalLi);
//     totalLi.textContent=`Total: ${this.total}cookies`;
//   }
// };
// seattle.updatingTheCustomers();
// seattle.updatingTheCookies();
// seattle.render();
// // Tokyo
// let Tokyo={
//   min:3,
//   max:24,
//   avg:1.2,
//   customer:[],
//   cookies:[],
//   total:0,
//   workingHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   updatingTheCookies:function(){
//     for(let i=0;i<this.workingHours.length;i++){
//       let cookies=Math.floor(this.customer[i]*this.avg);
//       console.log(cookies);
//       this.cookies.push(cookies);
//       this.total=this.total+this.cookies[i];
//     }
//   },
//   updatingTheCustomers: function(){
//     let customer=0;
//     for(let i=0;i<this.workingHours.length;i++){
//       customer=Math.floor(Math.random() * (this.max-this.min))+this.min;
//       console.log(customer);
//       this.customer.push(customer);
//     }
//     console.log(this.customer);
//   },
//   render:function(){
//     let h1Element=document.createElement('h1');
//     salmon.appendChild(h1Element);
//     h1Element.textContent='Tokyo';
//     let ulElement=document.createElement('ul');
//     salmon.appendChild(ulElement);
//     for(let i=0;i<this.workingHours.length;i++){
//       let liElement=document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent=`${this.workingHours[i]}:${this.cookies[i]}cookies`;
//     }
//     let totalLi=document.createElement('li');
//     ulElement.appendChild(totalLi);
//     totalLi.textContent=`Total: ${this.total}cookies`;
//   }
// };
// Tokyo.updatingTheCustomers();
// Tokyo.updatingTheCookies();
// Tokyo.render();
// // Dubai
// let Dubai={
//   min:11,
//   max:38,
//   avg:3.7,
//   customer:[],
//   cookies:[],
//   total:0,
//   workingHours:['6am','7am','8am','9am','10a1am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   updatingTheCookies:function(){
//     for(let i=0;i<this.workingHours.length;i++){
//       let cookies=Math.floor(this.customer[i]*this.avg);
//       console.log(cookies);
//       this.cookies.push(cookies);
//       this.total=this.total+this.cookies[i];
//     }
//   },
//   updatingTheCustomers: function(){
//     let customer=0;
//     for(let i=0;i<this.workingHours.length;i++){
//       customer=Math.floor(Math.random() * (this.max-this.min))+this.min;
//       console.log(customer);
//       this.customer.push(customer);
//     }
//     console.log(this.customer);
//   },
//   render:function(){
//     let h1Element=document.createElement('h1');
//     salmon.appendChild(h1Element);
//     h1Element.textContent='Dubai';
//     let ulElement=document.createElement('ul');
//     salmon.appendChild(ulElement);
//     for(let i=0;i<this.workingHours.length;i++){
//       let liElement=document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent=`${this.workingHours[i]}:${this.cookies[i]}cookies`;
//     }
//     let totalLi=document.createElement('li');
//     ulElement.appendChild(totalLi);
//     totalLi.textContent=`Total: ${this.total}cookies`;
//   },
// };
// Dubai.updatingTheCustomers();
// Dubai.updatingTheCookies();
// Dubai.render();
// // Paris
// let Paris={
//   min:20,
//   max:38,
//   avg:2.3,
//   customer:[],
//   cookies:[],
//   total:0,
//   workingHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   updatingTheCookies:function(){
//     for(let i=0;i<this.workingHours.length;i++){
//       let cookies=Math.floor(this.customer[i]*this.avg);
//       console.log(cookies);
//       this.cookies.push(cookies);
//       this.total=this.total+this.cookies[i];
//     }
//   },
//   updatingTheCustomers: function(){
//     let customer=0;
//     for(let i=0;i<this.workingHours.length;i++){
//       customer=Math.floor(Math.random() * (this.max-this.min))+this.min;
//       console.log(customer);
//       this.customer.push(customer);
//     }
//     console.log(this.customer);
//   },
//   render:function(){
//     let h1Element=document.createElement('h1');
//     salmon.appendChild(h1Element);
//     h1Element.textContent='Paris';
//     let ulElement=document.createElement('ul');
//     salmon.appendChild(ulElement);
//     for(let i=0;i<this.workingHours.length;i++){
//       let liElement=document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent=`${this.workingHours[i]}:${this.cookies[i]}cookies`;
//     }
//     let totalLi=document.createElement('li');
//     ulElement.appendChild(totalLi);
//     totalLi.textContent=`Total: ${this.total}cookies`;
//   },
// };
// Paris.updatingTheCustomers();
// Paris.updatingTheCookies();
// Paris.render();
// // Lima
// let Lima={
//   min:2,
//   max:16,
//   avg:4.6,
//   customer:[],
//   cookies:[],
//   total:0,
//   workingHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   updatingTheCookies:function(){
//     for(let i=0;i<this.workingHours.length;i++){
//       let cookies=Math.floor(this.customer[i]*this.avg);
//       console.log(cookies);
//       this.cookies.push(cookies);
//       this.total=this.total+this.cookies[i];
//     }
//   },
//   updatingTheCustomers: function(){
//     let customer=0;
//     for(let i=0;i<this.workingHours.length;i++){
//       customer=Math.floor(Math.random() * (this.max-this.min))+this.min;
//       console.log(customer);
//       this.customer.push(customer);
//     }
//     console.log(this.customer);
//   },
//   render:function(){
//     let h1Element=document.createElement('h1');
//     salmon.appendChild(h1Element);
//     h1Element.textContent='Lima';
//     let ulElement=document.createElement('ul');
//     salmon.appendChild(ulElement);
//     for(let i=0;i<this.workingHours.length;i++){
//       let liElement=document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent=`${this.workingHours[i]}:${this.cookies[i]}cookies`;
//     }
//     let totalLi=document.createElement('li');
//     ulElement.appendChild(totalLi);
//     totalLi.textContent=`Total: ${this.total}cookies`;
//   },
// };
// Lima.updatingTheCustomers();
// Lima.updatingTheCookies();
// Lima.render();