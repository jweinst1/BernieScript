/**
 * Created by Josh on 1/17/16.
 */
//main JS token file for the BernieScript language








//token class for transpiling, has a replacement and pattern value
var token = function(pattern, replacement) {
    this.pattern = pattern;
    this.replacement = replacement;
    this.transpile = function(text) {
        return text.replace(this.pattern, this.replacement);
    }
};

//makes a global pattern for replacing instances of text
function globalpatt(pattern) {
    return new RegExp(pattern, "g");
}