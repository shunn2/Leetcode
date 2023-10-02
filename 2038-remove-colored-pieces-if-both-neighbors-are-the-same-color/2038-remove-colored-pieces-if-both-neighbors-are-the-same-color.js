/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    let alice = 0;
    let bob = 0;
    let temp = 1;
    for(let i = 1; i<colors.length; i++){
        let prev = colors[i-1];
        let cur = colors[i];
        if(prev === cur){
            temp += 1;
        }else{
            if(temp >= 3){
                if(prev === 'A'){
                    alice += temp - 2;
                }else{
                    bob += temp - 2;
                }
            }
            temp = 1;
        }
        
        if(i === colors.length - 1){
            if(temp >= 3){
                if(cur === 'A'){
                    alice += temp - 2;
                }else{
                    bob += temp - 2;
                }
            }
        }
    }

    return alice > bob;
};