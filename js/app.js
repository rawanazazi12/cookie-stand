'use srtict';

let salmon = document.getElementById('salmon');

// Seattle
let seattle={
  min:23,
  max:65,
  avg:6.3,
  customer:[],
  cookies:[],
  total:0,
  workingHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  updatingTheCookies:function(){
    for(let i=0;i<this.workingHours.length;i++){
      let cookies=Math.floor(this.customer[i]*this.avg);
      console.log(cookies);
      this.cookies.push(cookies);
      this.total=this.total+this.cookies[i];
    }
  },
  
  updatingTheCustomers: function(){
    let customer=0;
    for(let i=0;i<this.workingHours.length;i++){
      customer=Math.floor(Math.random() * (this.max-this.min))+this.min;
      console.log(customer);
      this.customer.push(customer);
    }
    console.log(this.customer);
  },



  render :function(){
    let h1Element=document.createElement('h1');
    salmon.appendChild(h1Element);
    h1Element.textContent='Seattle';
    let ulElement=document.createElement('ul');
    salmon.appendChild(ulElement);
    for(let i=0;i<this.workingHours.length;i++){
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${this.workingHours[i]}:${this.cookies[i]}cookies`;

    }
    let totalLi=document.createElement('li');
    ulElement.appendChild(totalLi);
    totalLi.textContent=`Total: ${this.total}cookies`;
  }

};
seattle.updatingTheCustomers();
seattle.updatingTheCookies();
seattle.render();

// Tokyo

let Tokyo={
  min:3,
  max:24,
  avg:1.2,
  customer:[],
  cookies:[],
  total:0,
  workingHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  updatingTheCookies:function(){
    for(let i=0;i<this.workingHours.length;i++){
      let cookies=Math.floor(this.customer[i]*this.avg);
      console.log(cookies);
      this.cookies.push(cookies);
      this.total=this.total+this.cookies[i];

    }
  },
  updatingTheCustomers: function(){
    let customer=0;
    for(let i=0;i<this.workingHours.length;i++){
      customer=Math.floor(Math.random() * (this.max-this.min))+this.min;
      console.log(customer);
      this.customer.push(customer);
    }
    console.log(this.customer);
  },

  render:function(){
    let h1Element=document.createElement('h1');
    salmon.appendChild(h1Element);
    h1Element.textContent='Tokyo';
    let ulElement=document.createElement('ul');
    salmon.appendChild(ulElement);
    for(let i=0;i<this.workingHours.length;i++){
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${this.workingHours[i]}:${this.cookies[i]}cookies`;

    }
    let totalLi=document.createElement('li');
    ulElement.appendChild(totalLi);
    totalLi.textContent=`Total: ${this.total}cookies`;
  }
};
Tokyo.updatingTheCustomers();
Tokyo.updatingTheCookies();
Tokyo.render();

// Dubai
let Dubai={
  min:11,
  max:38,
  avg:3.7,
  customer:[],
  cookies:[],
  total:0,
  workingHours:['6am','7am','8am','9am','10a1am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  updatingTheCookies:function(){
    for(let i=0;i<this.workingHours.length;i++){
      let cookies=Math.floor(this.customer[i]*this.avg);
      console.log(cookies);
      this.cookies.push(cookies);
      this.total=this.total+this.cookies[i];

    }
  },
  updatingTheCustomers: function(){
    let customer=0;
    for(let i=0;i<this.workingHours.length;i++){
      customer=Math.floor(Math.random() * (this.max-this.min))+this.min;
      console.log(customer);
      this.customer.push(customer);
    }
    console.log(this.customer);
  },


  render:function(){
    let h1Element=document.createElement('h1');
    salmon.appendChild(h1Element);
    h1Element.textContent='Dubai';
    let ulElement=document.createElement('ul');
    salmon.appendChild(ulElement);
    for(let i=0;i<this.workingHours.length;i++){
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${this.workingHours[i]}:${this.cookies[i]}cookies`;

    }
    let totalLi=document.createElement('li');
    ulElement.appendChild(totalLi);
    totalLi.textContent=`Total: ${this.total}cookies`;
  },
};
Dubai.updatingTheCustomers();
Dubai.updatingTheCookies();
Dubai.render();


// Paris

let Paris={
  min:20,
  max:38,
  avg:2.3,
  customer:[],
  cookies:[],
  total:0,
  workingHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  updatingTheCookies:function(){
    for(let i=0;i<this.workingHours.length;i++){
      let cookies=Math.floor(this.customer[i]*this.avg);
      console.log(cookies);
      this.cookies.push(cookies);
      this.total=this.total+this.cookies[i];

    }
  },
  updatingTheCustomers: function(){
    let customer=0;
    for(let i=0;i<this.workingHours.length;i++){
      customer=Math.floor(Math.random() * (this.max-this.min))+this.min;
      console.log(customer);
      this.customer.push(customer);
    }
    console.log(this.customer);
  },


  render:function(){
    let h1Element=document.createElement('h1');
    salmon.appendChild(h1Element);
    h1Element.textContent='Paris';
    let ulElement=document.createElement('ul');
    salmon.appendChild(ulElement);
    for(let i=0;i<this.workingHours.length;i++){
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${this.workingHours[i]}:${this.cookies[i]}cookies`;

    }
    let totalLi=document.createElement('li');
    ulElement.appendChild(totalLi);
    totalLi.textContent=`Total: ${this.total}cookies`;
  },
};
Paris.updatingTheCustomers();
Paris.updatingTheCookies();
Paris.render();

// Lima
let Lima={
  min:2,
  max:16,
  avg:4.6,
  customer:[],
  cookies:[],
  total:0,
  workingHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  updatingTheCookies:function(){
    for(let i=0;i<this.workingHours.length;i++){
      let cookies=Math.floor(this.customer[i]*this.avg);
      console.log(cookies);
      this.cookies.push(cookies);
      this.total=this.total+this.cookies[i];

    }
  },
  updatingTheCustomers: function(){
    let customer=0;
    for(let i=0;i<this.workingHours.length;i++){
      customer=Math.floor(Math.random() * (this.max-this.min))+this.min;
      console.log(customer);
      this.customer.push(customer);
    }
    console.log(this.customer);
  },


  render:function(){
    let h1Element=document.createElement('h1');
    salmon.appendChild(h1Element);
    h1Element.textContent='Lima';
    let ulElement=document.createElement('ul');
    salmon.appendChild(ulElement);
    for(let i=0;i<this.workingHours.length;i++){
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${this.workingHours[i]}:${this.cookies[i]}cookies`;

    }
    let totalLi=document.createElement('li');
    ulElement.appendChild(totalLi);
    totalLi.textContent=`Total: ${this.total}cookies`;
  },
};
Lima.updatingTheCustomers();
Lima.updatingTheCookies();
Lima.render();
