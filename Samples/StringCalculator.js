export default class StringCalculator{

    /**
     * 
     * @param {string} expr 
     */
    add(expr){
        var refWrapper = {text: expr};
        var delimiters = StringCalculator.ParseDelimiters(refWrapper);
        expr = refWrapper.text;
        var parsedNumbers = StringCalculator.ParseNumbers(expr, delimiters);

        StringCalculator.FailOnNegatives(parsedNumbers);
        return parsedNumbers.length > 0 
            ? parsedNumbers.reduce((a, b) => a + b)
            : 0;  
    };

    /**
     * 
     * @param {string} expr 
     * @param {string[]} delimiters 
     * @returns {number[]}
     */
    static ParseNumbers(expr, delimiters){
        return expr.split(delimiters).map(Number);
    }
    
    /**
     * 
     * @param {number[]} numbers 
     */
    static FailOnNegatives(numbers){
        var negatives = numbers.filter(n => n < 0);
        if (negatives.length > 0){
            throw new Error("negatives not allowed: " + negatives.join(", "));
        }
    }

    /**
    * @param {string} text The string
    * @returns {string}
    */
    static ParseDelimiters(wrapper){
        var text = wrapper.text;
        if (!text.startsWith("//") || text.length <= 2){
            return /[\n,]+/;
        }
        var delimiter = text[2];
        wrapper.text = text.split("\n")[1];
        return delimiter;
    }
};