    //   ******** clear comparision ******
    console.log(2 > 1);
    console.log(2 <= 1);
    console.log(2 == 1);
    console.log(2 != 1);
    
    
    // ***********comparision with conversion******
    
    console.log("2" > 1);
    console.log("02"> 1);
    
    // ********camparision  not actual it create problems****
    
    console.log(null > 0);
    console.log(null ==0 );
    console.log(null >= 0);
    
    console.log(undefined == 0);
    console.log(undefined > 0);
    console.log(undefined >= 0);
    
    // === this check with datatype not by conversion
     console.log("2" === 2);  // =>false