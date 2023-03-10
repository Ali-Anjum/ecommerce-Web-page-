let pro= document.getElementById("pro-container");
let basket=JSON.parse(localStorage.getItem("data")) || [

];
    



let generateshop =() => {
    return(pro.innerHTML =shopitemsData.map((x)=>{
        let{id,desc,price,Image,}=x;
        let search =basket.find(x =>x.id === id) || [];
            return`
            <div id= product-Id-${id} class= "pro">
                <img src=${Image} alt="navy blue shirt">
                <div class="des">
                    <span> stitchy</span>
                    <h5> ${desc} </h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>    
                    <h4 >${price}</h4>
                </div class  ="buttons">
                <a> <i onclick="decrement(${id})" class="fa-solid fa-minus minus"></i></a>
                <div id="${id}" class="quantity">${search.item === undefined? 0: search.item}</div>
                <a> <i onclick="increment(${id})" class="fas fa-plus cart"></i></a>
                </div> `;
    }).join(""));
};
generateshop();
let increment =(id)=> {
    let selecteditem = id;
    let search=basket.find(x =>x.id === selecteditem.id);
    if(search === undefined){
    basket.push({
        id:selecteditem.id,
        item:1,
    });
    } else{
        search.item+=1;
    }
localStorage.setItem("data",JSON.stringify(basket));



update(selecteditem.id);
};

let decrement =(id)=> {
    let selecteditem =id;
    let search=basket.find(x =>x.id === selecteditem.id);

    if(search.item === 0)return;
    else if(search.item === 0)return;

    else{
        search.item-=1;
    }

update(selecteditem.id);
basket=basket.filter((x) => x.item !== 0)

localStorage.setItem("data",JSON.stringify(basket));

};

let update = (id)=>{
    let search=basket.find(x =>x.id === id);

document.getElementById(id).innerHTML=search.item;
calculation();
};
let calculation =() => {
    console.log("fgfdg");
    let carticon= document.getElementById("cartamount");
    carticon.innerHTML=basket.map((x)=>x.item).reduce ((x,y) => x + y ,0);

};
calculation();


document.querySelector("#pro-container")
    .addEventListener('click',()=>{
    console.log("dfs");
})




