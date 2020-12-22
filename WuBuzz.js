class WuBuzz {
    wuChant(value){
        let wuString = '';
        let wuThis = '';

        for (let i = 1; i <= value; i++) {
            if( (i % 5 == 0) && (i % 3 == 0) ) {
                wuThis = 'WuTangForever';
            }
            else if(i % 5 == 0) {
                wuThis = 'Tang';
            }
            else if(i % 3 == 0) {
                wuThis = 'Wu';
            }
            else {
                wuThis = i;
            }

            wuString += `${wuThis}\n`;
            // console.log(wuThis);
            
        }

        return wuString;
    }
}


module.exports = WuBuzz;