const Lexicon = require('./lexicon');

const Division = {
    processDivision : function(number) {
        const lexicon = Object.create(Lexicon);
        let isDivisible = false;

        const divisionResult = lexicon.defaultValue().map(arrItem => {
            if(number % arrItem[0] == 0) {
                isDivisible = true;
                return arrItem[1];
            }
            return "";
        });
        return isDivisible ? divisionResult.join('') : number;
    }
};

export default Division;
