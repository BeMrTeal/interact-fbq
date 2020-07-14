const Lexicon = require('./lexicon');

const MatchChar = {
    processMatchChar : function(number) {
        const lexicon = Object.create(Lexicon);
        let foundChar = "";

        number.split('').forEach(char => {
            lexicon.defaultValue().forEach(arrItem => {
                if(char == arrItem[0]) {
                    foundChar = foundChar.concat('', arrItem[1]);
                }
            });
        });
        return foundChar;
    }
};

export default MatchChar;