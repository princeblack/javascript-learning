roundScore = () =>{
    let res = 0;
    for (let i = 0; i < 6; i++) {
        res  = res + Math.ceil(Math.random() * 6)
        
    }
    return res
}

game = () =>{
    let scoreA =0;
    let scoreB =0;
    const final = 100;

    while (scoreA < final || scoreB < final  ) {
        scoreA = scoreA + roundScore();
        scoreB = scoreB + roundScore();
        if (scoreA == final ||scoreB == final  ) {
            break
        }

    }
    console.log('soore A', scoreA);
    console.log('soore B', scoreB);


}

game()

daysSinceLastWorldCup = (dt)=>{
    const today = new Date();
    const then = new Date(dt);
    const days = today - then;
    const ml = 100*60*60*24;
    console.log(days/ml);
    
}

daysSinceLastWorldCup('07/13/2014')