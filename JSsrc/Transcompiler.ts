/**
 * Created by Josh on 1/17/16.
 */
//main transcompiler file for BernieScript

class Utils {
    //makes a regexp global
    public static makeglobal(temp:string) {
        return new RegExp(temp, "g");
    }
    //global replacement method
    public static replaceall(temp:string, patt:RegExp, replaced:string) {
        return temp.replace(patt, replaced);
    }
    //counts the number of times an expression appears
    public static countpatt(temp:string, patt:string) {
        var gpatt = new RegExp(patt, "g");
        var matches = temp.match(gpatt);
        return matches.length;
    }

}
//conversion function of BS objects

class Conversion {
    public static containers(symbol:string) {
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
    }

    public static mathops(symbol:string) {
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
    }

    public static keywords(symbol:string) {
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
    }
}

class Transpiler {
    public static transpile(input:string) {
        input = input.replace(/here's the story/g, "def");
        input = input.replace(/give to the people/g, "return");
        input = input.replace(/to each citizen named/g, "for");
        input = input.replace(/in the working class/g, "in");
        input = input.replace(/sounds like trump/g, "False");
        input = input.replace(/sounds like bernie/g, "True");
        input = input.replace(/when berne gets elected/g, "if");
        return input;
    }
}

console.log(Transpiler.transpile("bernie says pow(num):\n\tvote sounds like bernie"));