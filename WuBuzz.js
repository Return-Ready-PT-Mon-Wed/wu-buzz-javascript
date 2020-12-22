class WuBuzz {
    wuChant(value){
        for (let i=1; i<=value; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                console.log("WuTangForever");
            }
            else if (i % 3 == 0) {
                console.log("Wu");
            }
            else if (i % 5 == 0) {
                console.log("Tang");
            }
            else {
                console.log(i);
            }
        }
        return;
    }
}


module.exports = WuBuzz;