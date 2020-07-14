const Division = require('./division');
const MatchChar = require('./match_char');
const MatchStar = require('./match_star');

const FBQ = {
    compute : function(number) {
        const division = Object.create(Division);
        const matchChar = Object.create(MatchChar);
        const matchStar = Object.create(MatchStar);
        const dividedNumber = division.processDivision(number);

        if(dividedNumber == number) {
            return number;
        }
        
        let numberTable = [];
        numberTable.push(dividedNumber);
        number.split('').map(char => {
            numberTable.push(matchChar.processMatchChar(char));
            if(char === "0") {
                let tempNumArr = matchStar.findStar(numberTable.join('').concat("0"));
                numberTable = [];
                numberTable.push(tempNumArr);
            }
        });
        return numberTable.join('');
    }
};

export default FBQ;