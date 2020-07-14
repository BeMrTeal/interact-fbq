const Lexicon = require('./lexicon');

const MatchStar = {
    findStar : function(string) {
        return string.replace(new RegExp(0,'g'), '*');
    }
};

export default MatchStar;