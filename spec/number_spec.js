describe("CHAPTER 2 --> NUMBERS & NUMERIC OPERATIONS BASICS", function() {

    /**
     * Code for numeric operations
     */

    /*ADDITION*/
    it("Declare a variable \"sum\" and add two numbers and assign the result to \"sum\"", function() {
        expect(sum).toEqual(jasmine.any(Number));
    });

    /*SUBSTRATION*/
    it("Declare \"sub\" and substract two numbers to it like 4-5 and assign the result to \"sub\"", function() {
        expect(sub).toEqual(jasmine.any(Number));
    });

    /*MULTIPLICATION*/
    it("Declare a variable \"mul\" and multiply two numbers to it like 4*5 and assign the result to \"mul\"", function() {
        expect(mul).toEqual(jasmine.any(Number));
    });

    /*DIVISION*/
    it("Declare \"div\" and divide two numbers like 4/5 and assign the result to \"div\"", function() {
        expect(div).toEqual(jasmine.any(Number));
    });
});
describe("CHAPTER 2.1 --> NUMERIC METHODS", function() {

    /**
     * Code deals with the Numeric Methods
     */

    it("Call the Function(toExponential()) on number 25 assighned to variable numOps", function() {
        expect(numOps.toExponential()).toEqual("2.5e+1");
    });
    it("Call the Function(toFixed()) on number 25 assighned to variable numOps", function() {
        expect(numOps.toFixed()).toEqual("25");
    });
    it("Call the Function(toLocaleString()) on number 200000320323232 assighned to variable numOps1", function() {
        expect(numOps1.toLocaleString()).toEqual("200,000,320,323,232");
    });
    it("Call the Function(toString()) on number 25 assighned to variable numOps", function() {
        expect(numOps.toString()).toEqual("25");
    });
    it("Call the Function(valueOf()) on number 25 assighned to variable numOps", function() {
        expect(numOps.valueOf()).toEqual(200000320323232);
    });
    it("Call the Function(toPrecision()) on number 200000320323232 assighned to variable numOps", function() {
        expect(numOps.valueOf()).toEqual("200000320323232");
    });
    it("parseInt(NumString) to change String to Integer and store it in IntDec, declare variable NumString and assign it '23'", function() {
        expect(IntDec).toEqual(jasmine.any(Number));
        expect(IntDec).toEqual(23);
    });
    it("parseFloat(NumString) to change String to Integer and store it in FloatDec, declare variable NumString1 and assign it '23.003'", function() {
        expect(FloatDec).toEqual(jasmine.any(Number));
        expect(FloatDec).toEqual(23.003);
    });
});
