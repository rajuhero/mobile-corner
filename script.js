const MobileApi = ()=>{
const   URL = ' https://openapi.programming-hero.com/api/phones?search=iphone'
fetch(URL)
.then(res => res.json())
.then(data => showData(data.data))

}


const showData = mobileDta =>{
    for(const mobile of mobileDta){
        console.log(mobile)



    }


    


}



MobileApi();

