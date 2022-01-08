const arapskiUnos = document.getElementById("arapskiUnos");
const rimskiUnos = document.getElementById("rimskiUnos");

arapskiUnos.addEventListener("input",(e)=>{
    rimskiUnos.value = arapskiUrimski(e.target.value);
});
rimskiUnos.addEventListener("input",(e)=>{
    arapskiUnos.value = rimskiUarapski(e.target.value);

});

function arapskiUrimski(brojI){
    let rimski = "";
    const rimskaListaBrojeva = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};
    let x;
    if(brojI > 5000)
        return "Unesi broj izmedju 1 i 5000";
    else{
        for(let translate in rimskaListaBrojeva){
            x = Math.floor(brojI / rimskaListaBrojeva[translate]);
            if(x >= 0){
                for(let i = 0; i < x; i++){
                    rimski += translate;
                }
            }
            brojI = brojI % rimskaListaBrojeva[translate];
        }
    }

    return rimski;
}
function rimskiUarapski(broj1){
    broj1 = broj1.toUpperCase();
    const rimskaListaBrojeva = ["CM","M","CD","D","XC","C","XL","L","IX","X","IV","V","I"];
    const arapskaListaBrojeva = [900,1000,400,500,90,100,40,50,9,10,4,5,1];
    let index =  0, arapski = 0;
    for(let rlb in rimskaListaBrojeva){
        index = broj1.indexOf(rimskaListaBrojeva[rlb]);
        while(index != -1){
            arapski += parseInt(arapskaListaBrojeva[rlb]);
            broj1 = broj1.replace(rimskaListaBrojeva[rlb],"-");
            index = broj1.indexOf(rimskaListaBrojeva[rlb]);
        }
    }
    return arapski;
}

