/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    skill.sort((a,b) => a-b);
    const length = skill.length;
    
    if(length % 2 === 1){
        return -1;
    }
    
    const value = (skill[length-1] + skill[0]);
    
    let result = skill[length-1] * skill[0];
    
    for(let i = 1; i < length /2; i++){
        if(skill[i] + skill[length-1-i] !== value){
            return -1;
        }
        result += skill[i] * skill[length-1-i];
    }
    
    return result;
};