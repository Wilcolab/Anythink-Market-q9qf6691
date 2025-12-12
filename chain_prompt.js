function toKebabCase(input) {
    if (!input || /^[^a-zA-Z0-9]+$/.test(input)) {
        throw new Error("Input must be a non-empty string with valid characters.");
    }

    const numberWords = {
        '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four',
        '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine',
        '10': 'ten', '11': 'eleven', '12': 'twelve', '13': 'thirteen',
        '14': 'fourteen', '15': 'fifteen', '16': 'sixteen', '17': 'seventeen',
        '18': 'eighteen', '19': 'nineteen', '20': 'twenty'
    };

    const words = input
        .toLowerCase()
        .replace(/[\s_.]+/g, '-') // Replace spaces, underscores, and periods with hyphens
        .replace(/[^\w-]+/g, '') // Remove special characters
        .split('-')
        .map(word => {
            return word.replace(/\d+/g, (match) => {
                return numberWords[match] || match; // Convert numbers to words
            });
        });

    return words.join('-');
}

// Example usage:
// console.log(toKebabCase("Hello World! 17")); // Output: "hello-world-seventeen"