/**
 * Converts a given string to camel case.
 * 
 * Camel case is a style of writing where the first letter of each word is capitalized except for the first word.
 * For example, "hello world" becomes "helloWorld".
 *
 * @param {string} str - The input string to be converted to camel case.
 * @throws {Error} Will throw an error if the input string is empty or does not contain any alphanumeric characters.
 * @returns {string} The camel case version of the input string.
 */
function toCamelCase(str) {
    // Check for empty string
    if (str === "") {
        throw new Error("Input string cannot be empty");
    }

    // Remove word separators to validate input
    const noSeparators = str.replace(/[\s\-_]/g, "");

    // Check if any alphanumeric characters exist after removing separators
    if (!/[a-zA-Z0-9]/.test(noSeparators)) {
        throw new Error("Input string must contain at least one alphanumeric character");
    }

    // Split by spaces, hyphens, and underscores, filter out empty strings
    const words = str.split(/[\s\-_]+/).filter((word) => word.length > 0);

    // Convert to camel case
    return words
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");
}


/**
 * Converts a given string to dot case.
 * 
 * Dot case is a style of writing where words are separated by dots and all letters are in lowercase.
 * For example, "hello world" becomes "hello.world".
 *
 * @param {string} str - The input string to be converted to dot case.
 * @throws {Error} Will throw an error if the input string is empty or does not contain any alphanumeric characters.
 * @returns {string} The dot case version of the input string.
 */
function toDotCase(str) {
    // Check for empty string
    if (str === "") {
        throw new Error("Input string cannot be empty");
    }

    // Remove word separators to validate input
    const noSeparators = str.replace(/[\s\-_]/g, "");

    // Check if any alphanumeric characters exist after removing separators
    if (!/[a-zA-Z0-9]/.test(noSeparators)) {
        throw new Error("Input string must contain at least one alphanumeric character");
    }

    // Split by spaces, hyphens, and underscores, filter out empty strings
    const words = str.split(/[\s\-_]+/).filter((word) => word.length > 0);

    // Convert to dot case
    return words.map(word => word.toLowerCase()).join(".");
}

