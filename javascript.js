let a=document.getElementById('hour')
let c=document.getElementById('minute')
let d=document.getElementById('sec')
let day=document.getElementById('btn')
let time = () =>{
    const dat = new Date()
    let h = dat.getHours();
    let m = dat.getMinutes();
    let s = dat.getSeconds();
    let day1 = dat.getDay
   // let b = console.log(h,m,s);

   a.innerHTML = (h);
   c.innerHTML = (m);
   d.innerHTML = (s);
   
   }



 let b =setInterval(time, 1000)

 
 

// console.log(b)




