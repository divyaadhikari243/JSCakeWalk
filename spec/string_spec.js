describe("CHAPTER 2 --> STRING & STRING OPERATIONS", function() {

    /*Code for String Operations*/

    /*String Decleration (Literal)*/
    it("Declare a variable test_string and assign it a value 'Hello World' ", function() {
        expect(test_string).toEqual('Hello World');
    });
    it("Declare a variable my_name and assign it a value 'Roger' ", function() {
        expect(my_name).toEqual('Roger');
    });

    /**
     * Methods associated with the strings
     */
    it("Use function(charAt(1)) on my_name variable and store it in result_1 variable", function() {
        expect(result_1).toEqual(my_name.charAt(1));
    });
    it("Use function(charCodeAt(1)) on my_name variable and store it in result_2 variable", function() {
        expect(result_2).toEqual(my_name.charCodeAt(1));
    });
    it("Use function(concat(test_string)) on my_name variable and store it in result_3 variable", function() {
        expect(result_3).toEqual(my_name.concat(test_string));
    });
    it("Use function(charCodeAt(1)) on my_name variable and store it in result_4 variable", function() {
        expect(result_4).toEqual(my_name.charCodeAt(1));
    });
    it("Use function(indexOf('o')) on my_name variable and store it in result_5 variable", function() {
        expect(result_5).toEqual(my_name.indexOf("o"));
    });
    it("Use function(lastIndexOf('o')) on my_name variable and store it in result_6 variable", function() {
        expect(result_7).toEqual(my_name.lastIndexOf("o"));
    });
    it("Use function(length) on my_name variable and store it in result_8 variable", function() {
        expect(result_8).toEqual(my_name.lrngth);
    });
});