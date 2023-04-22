



  

  





const MobileApi = ()=>{

const   URL = 'https://openapi.programming-hero.com/api/phones?search=samsung'
fetch(URL)
.then(res => res.json())
.then(data => showData(data.data))

}


const showData = mobileDta =>{

    const parentDiv = document.getElementById("parent-dive");
    
    for(const mobile of mobileDta){
     
       

        const  newDom = document.createElement("div");
       newDom.classList.add('card');

        newDom.innerHTML =`
        <div class=" card card-compact w-70 ml-10 bg-base-100 shadow-xl flex">
            <figure><img src="${mobile.image}" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="${mobile.data}">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        
        
        `
        parentDiv.appendChild(newDom);
        console.log(mobile.image)

    }
       


    


}



MobileApi();


//  start login page

 const loginBtn= document.getElementById('login').addEventListener('click',function(){
  console.log('hi');
 const loginEmwil = document.getElementById('email');
const newEmeil = loginEmwil.value;

 const loginpassword= document.getElementById('Password');
 const newLoginPass = loginpassword.value;
 if(newEmeil === "rajuahmed@gamil.com" & newLoginPass ==="321"){
  window.location.href="api.html";

 }
 else{

  alert('salami nita hole email password thik vabe lekhte hobe')
 }




 });


