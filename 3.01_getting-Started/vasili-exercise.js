function checkMoney( price = 3.79 , paid = 50) {
    let b ;
    let bIs ;
    let bResult;
    let c;
    let cIs;
    let cResult;
    let d
    let dIs
    let dResul
    let e;
    let eIs;
    let eResult;
    let f;
    let fIs;
    let fResult;
    let g;
    let gIs;
    let gResult;
    let j;
    let jIs;
    let jResult;
    let k;
    let kIs;
    let kResult;

    cashBack =  paid - price;
    console.log(`Price : ${price}`);
    console.log(`paid amount : ${paid}`);
    console.log(`cahnge : ${cashBack}`);
    console.log("");   
    
    // check for 20
    var a = cashBack % 20;
    var aIs =( cashBack - a); 
    aIs = parseFloat(aIs.toFixed(2))
    console.log(aIs);
    var aResult= aIs / 20 ;   // how many 20 
    console.log(` we give back ${aResult} x 20€`); // how many 20

    // check for 10
    if (a > 10) {
         b = a % 10 ;
         bIs = a - b;
         bIs = parseFloat(bIs.toFixed(2))
         console.log(bIs);
         bResult = bIs / 10; // how many 10 
        console.log(` we give back ${bResult} x 10€`)  // how many 10
    } 
    if (b > 5){
        c = b % 5;
        cIs = b - c;
        cIs = parseFloat(cIs.toFixed(2))
        console.log(cIs);
        cResult = cIs / 5; // how many 5
        console.log(` we give back ${cResult} x 5€`)  // how many 5  
    } 
    if ( c > 2) {
        d = c % 2 ;
        dIs = c - d;
        dIs = parseFloat(dIs.toFixed(2))
        console.log(dIs);
        dResult = dIs / 2; // how many 2
        console.log(` we give back ${dResult} x 2€`)  // how many 2
    } 
    if ( d => 1 ){
        e = d % 1;
        eIs = d - e;
        eIs = parseFloat(eIs.toFixed(2))
        console.log(eIs);
        eResult = eIs / 1; // how many 1
        console.log(` we give back ${eResult} x 1€`)  // how many 1
    } 
    if ( e > 0.50) {
        f = e % 0.50 ;
        fIs = e - f;
        fIs = parseFloat(fIs.toFixed(2))
        console.log(fIs);
        fResult = fIs / 0.50; // how many 2
        console.log(` we give back ${fResult} x 0.50€`)  // how many 0.50
    } 
    if ( f > 0.20){
        g = f % 0.20;
        gIs = f - g;
        gIs = parseFloat(gIs.toFixed(2))
        console.log(gIs);
        gResult = gIs / 0.20; // how many 1
        console.log(` we give back ${gResult} x 0.20€`)  // how many 0.20
    }
    if ( g > 0.10){
        j = g % 0.10;
        jIs = g - j;
        jIs = parseFloat(jIs.toFixed(2))
        console.log(jIs);
        jResult = jIs / 0.10; // how many 1
        console.log(` we give back ${jResult} x 0.10€`)  // how many 0.10
    }
    if (j > 0.05) {
        k = j % 0.05;
        kIs = j- k;
        kIs = parseFloat(kIs.toFixed(2))
        console.log(kIs);
        kResult = kIs / 0.05; // how many 1
        console.log(` we give back ${kResult} x 0.05€`)  // how many 0.05
    }
    if (k > 0.02) {
        l = k % 0.02;
        lIs = k- l;
        lIs = parseFloat(lIs.toFixed(2))
        console.log(lIs);
        lResult = lIs / 0.02; // how many 1
        console.log(` we give back ${lResult} x 0.05€`)  // how many 0.05
    }
    console.log("===============================================================");
    
}
checkMoney(8.75, 47.63);
checkMoney(3.79, 50);
checkMoney(13.75, 40);
checkMoney(1.74, 5);
checkMoney(10.75, 5);
checkMoney(33, 50);
checkMoney(33.12, 44);
checkMoney(22.13, 44);