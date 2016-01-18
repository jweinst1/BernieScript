/**
 * Created by Josh on 1/17/16.
 */
//main transcompiler file for BernieScript
var Utils = (function () {
    function Utils() {
    }
    //makes a regexp global
    Utils.makeglobal = function (temp) {
        return new RegExp(temp, "g");
    };
    //global replacement method
    Utils.replaceall = function (temp, patt, replaced) {
        return temp.replace(patt, replaced);
    };
    //counts the number of times an expression appears
    Utils.countpatt = function (temp, patt) {
        var gpatt = new RegExp(patt, "g");
        var matches = temp.match(gpatt);
        return matches.length;
    };
    return Utils;
})();
//conversion function of BS objects
var Conversion = (function () {
    function Conversion() {
    }
    Conversion.containers = function (symbol) {
        switch (symbol) {
            case "$":
                return "[";
                break;
            case "$$":
                return "(";
                break;
            case "$$$":
                return "{";
                break;
            default:
                break;
        }
    };
    Conversion.mathops = function (symbol) {
        switch (symbol) {
            case "plus":
                return "+";
                break;
            case "minus":
                return "-";
                break;
            case "multiply":
                return "*";
                break;
            case "divide":
                return "/";
                break;
            case "tax":
                return "%";
                break;
            case "power":
                return "**";
                break;
            default:
                break;
        }
    };
    Conversion.keywords = function (symbol) {
        switch (symbol) {
            case "Bernie says":
                return "def";
                break;
            case "Executive Action":
                return "lambda";
                break;
            case "Vote":
                return "return";
                break;
            case "Too much Trump":
                return "False";
            case "how bernie likes it":
                return "True";
                break;
            default:
                break;
        }
    };
    return Conversion;
})();
//transpiler replacement function
var Transpiler = (function () {
    function Transpiler() {
    }
    Transpiler.transpile = function (input) {
        input = input.replace(/fairgame/g, "+=");
        input = input.replace(/plus/g, "+");
        input = input.replace(/minus/g, "-");
        input = input.replace(/multiply/g, "*");
        input = input.replace(/tax/g, "%");
        input = input.replace(/fairshare/g, "/");
        input = input.replace(/income equality/g, "==");
        input = input.replace(/too much money/g, ">");
        input = input.replace(/voting as/g, "=");
        input = input.replace(/here's the story/g, "def");
        input = input.replace(/give to the people/g, "return");
        input = input.replace(/to each citizen named/g, "for");
        input = input.replace(/in the working class/g, "in");
        input = input.replace(/sounds like trump/g, "False");
        input = input.replace(/sounds like bernie/g, "True");
        input = input.replace(/when bernie gets elected/g, "if");
        input = input.replace(/when you feel the bern/g, "elseif");
        input = input.replace(/otherwise/g, "else");
        input = input.replace(/bernie says/g, "print");
        input = input.replace(/let me be clear/g, "assert");
        input = input.replace(/long as wallstreet runs congress/g, "while");
        input = input.replace(/the one percent/g, "class");
        input = input.replace(/list/g, "corporation");
        input = input.replace(/dict/g, "billionaire");
        input = input.replace(/\$\|/g, "[");
        input = input.replace(/\|\$/g, "]");
        input = input.replace(/\$\$\|/g, "{");
        input = input.replace(/\|\$\$/g, "}");
        return input;
    };
    return Transpiler;
})();
console.log(Transpiler.transpile("bernie says pow(num):\n\tgive to the people 5 plus 6 minus 5 tax 3"));
//# sourceMappingURL=Transcompiler.js.map