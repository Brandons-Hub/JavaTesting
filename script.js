

function strawberry(){
    let s = document.createElement('p')
    s.textContent = "There is a strawberry";
    s.id = "added";
    document.body.appendChild(s);
    
};



document.getElementById('creatingIceCream').addEventListener('submit',function(event){
    event.preventDefault();
    let checkedFlavors = document.querySelectorAll('input[name="flavor"]:checked');
    let flavorValues = Array.from(checkedFlavors).map(f=>f.value);
    alert(flavorValues.join(', '));
    let erase = document.getElementById("added");
    try{
        erase.remove();
    } catch{

    };
    if (flavorValues.includes('strawberry')){
       strawberry(); 
    };
});

