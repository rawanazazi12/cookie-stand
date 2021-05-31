'use srtict';
let workingHours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let shops=[];
function Shop(location,min,max,avg){
  this.location=location;
  this.minCustomers=min;
  this.maxCustomers=max;
  this.avgCookies=avg;
  this.customers=[];
  this.cookies=[];
  this.total=0;
  shops.push(this);

}
Shop.prototype.getCustomers = function () {
  let customers=0;
  for(let i=0;i<workingHours.length;i++){
    customers=Math.floor(Math.random() * (this.maxCustomers-this.minCustomers))+this.minCustomers;
    console.log(customers);
    this.customers.push(customers);
  }
  console.log(this.customers);
};
Shop.prototype.updatingTheCookies=function(){
  for(let i=0;i<workingHours.length;i++){
    let cookies=Math.floor(this.customers[i]*this.avgCookies);
    console.log(cookies);
    this.cookies.push(cookies);
    this.total=this.total+this.cookies[i];
  }

};
Shop.prototype.render=function(){

  let h1Element=document.createElement('h1');
  salmon.appendChild(h1Element);
  h1Element.textContent=this.location;
  let ulElement=document.createElement('ul');
  salmon.appendChild(ulElement);
  for(let i=0;i<workingHours.length;i++){
    let liElement=document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent=`${workingHours[i]}:${this.cookies[i]}cookies`;
  }
  let totalLi=document.createElement('li');
  ulElement.appendChild(totalLi);
  totalLi.textContent=`Total: ${this.total}cookies`;


};

let seattle=new Shop ('Seattle',23,65,6.3);
console.log(seattle);

let tokyo=new Shop('Tokyo',3,24,1.2);
console.log(tokyo);


let dubai=new Shop('Dubai',11,38,3.7);
console.log(dubai);

let paris=new Shop('Paris',20,38,2.3);
console.log(paris);

let lima=new Shop('Lima',2,16,4.6);
console.log(lima);
randomNumber();
seattle.getCustomers();
seattle.updatingTheCookies();
seattle.render();

tokyo.getCustomers();
tokyo.updatingTheCookies();
tokyo.render();

dubai.getCustomers();
dubai.updatingTheCookies();
dubai.render();

paris.getCustomers();
paris.updatingTheCookies();
paris.render();

lima.getCustomers();
lima.updatingTheCookies();
lima.render();


let parent=document.getElementById('salmon');
let table=document.createElement('table');
parent.appendChild(table);
let headingRow=document.createElement('hr');
table.appendChild(headingRow);
let headings= ['Name','6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','Daily Location Total'];
for(let i=0;i<headings.length;i++){
  let thElement=document.createElement('th');
  headingRow.appendChild(thElement);
  thElement.textContent=headings[i];
  
}
let footerRow=document.createElement('hr');
table.appendChild(footerRow);
let footer= [];
for(let i=0;i<headings.length;i++){
let thEl=document.createElement('th');
footerRow.appendChild(thEl);
thEl.textContent=footer[i];

}


Shop.prototype.newRender=function(){

    let shopsRow=document.createElement('tr');
    table.appendChild(shopsRow);
    let td1=document.createElement('td');
    shopsRow.appendChild(td1);
    td1.textContent=this.location;

  
    for (let i = 0; i < workingHours.length; i++) {
      let td2=document.createElement('td');
      td1.appendChild(td2);
     td2.textContent=`${this.cookies[i]}`;
    }
    let totalTd=document.createElement('td');
    table.appendChild(totalTd);
     totalTd.textContent=` ${this.total}`;

  };

  

console.log(table);
seattle.newRender();
tokyo.newRender();
dubai.newRender();
paris.newRender();
lima.newRender();