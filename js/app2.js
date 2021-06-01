// 'use srtict';
// let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// let shops = [];
// function Shop(location, min, max, avg) {
//   this.location = location;
//   this.minCustomers = min;
//   this.maxCustomers = max;
//   this.avgCookies = avg;
//   this.customers = [];
//   this.cookies = [];
//   this.total = 0;
//   shops.push(this);

// }
// Shop.prototype.getCustomers = function () {
//   let customers = 0;
//   for (let i = 0; i < workingHours.length; i++) {
//     customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//     console.log(customers);
//     this.customers.push(customers);
//   }
//   console.log(this.customers);
// };
// Shop.prototype.updatingTheCookies = function () {
//   for (let i = 0; i < workingHours.length; i++) {
//     let cookies = Math.floor(this.customers[i] * this.avgCookies);
//     console.log(cookies);
//     this.cookies.push(cookies);
//     this.total = this.total + this.cookies[i];
//   }

// };


// let theParent = document.getElementById('container');
// let table = document.createElement('table');
// theParent.appendChild(table);

// function makingheaderRow() {
//   let headerRow = document.createElement('tr');
//   table.appendChild(headerRow);
//   let thName = document.createElement('th');
//   headerRow.appendChild(thName);
//   thName.textContent = 'Name';
//   for (let i = 0; i < workingHours.length; i++) {
//     let thHourRow = document.createElement('th');
//     headerRow.appendChild(thHourRow);
//     thHourRow.textContent=workingHours[i];
//   }
//   let thDailyLocationTotal = document.createElement('th');
//   headerRow.appendChild(thDailyLocationTotal);
//   thDailyLocationTotal.textContent='Daily Location Total';
// }

// Shop.prototype.render = function(){
//   let dataRow=document.createComment('tr');
//   table.appendChild(dataRow);
//   let tdLocationName=document.createElement('td');
//   dataRow.appendChild(tdLocationName);
//   tdLocationName.textContent=this.location;
//   for (let i = 0; i < workingHours.length; i++) {
//     let cookiesTd=document.createElement('td');
//     dataRow.appendChild(cookiesTd);
//     cookiesTd.textContent=this.cookies[i];
//   }
//   let totalTd=document.createElement('td');
//   dataRow.appendChild(totalTd);
//   totalTd.textContent=this.total;
// };



// let seattle = new Shop('Seattle', 23, 65, 6.3);
// let tokyo = new Shop('Tokyo', 3, 24, 1.2);
// let dubai = new Shop('Dubai', 11, 38, 3.7);
// let paris = new Shop('Paris', 20, 38, 2.3);
// let lima = new Shop('Lima', 2, 16, 4.6);

// randomNumber();
// seattle.getCustomers();
// seattle.updatingTheCookies();

// tokyo.getCustomers();
// tokyo.updatingTheCookies();

// dubai.getCustomers();
// dubai.updatingTheCookies();

// paris.getCustomers();
// paris.updatingTheCookies();

// lima.getCustomers();
// lima.updatingTheCookies();

// makingheaderRow();
// seattle.render();
