// class WuBuzz {
//     wuChant(value){
//         return null;
//     }
// }


// module.exports = WuBuzz;

// let number = [1,2,[3,'Wu'],4,[5,'Tang'],[6,'Wu'],7,8,[9,'Wu'],[10,'Tang'],11,[12,'Wu'],13,14,[15,'WuTang Forever']];

for (let i=1 ; i <=15; i++){
    if(i % 3 ===0 && i % 5 ===0){

        console.log ("Wu Tang Forever");
    }
    
    else if(i % 3 ===0) {

        console.log("Wu");
    }
    else if (i % 5 === 0){
        console.log("Tang");

    }
    else {
        console.log(i);
    }
    
}


