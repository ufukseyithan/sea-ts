export const utf8: {
    /**
     * Returns the Unicode code point(s) of characters in the given string.
     * @param str The string containing UTF-8 characters.
     * @param i The starting character position (1-based index, default is 1).
     * @param j The ending character position (1-based index, default is the same as i).
     * @param byte_pos Optional byte position for faster lookup.
     * @returns The Unicode code point(s) for the specified characters.
     * @noSelf
     */
    codepoint(str: string, i?: number, j?: number, byte_pos?: number): number | undefined;

    /**
     * Encodes a Unicode code point into its corresponding UTF-8 sequence.
     * @param unicode The Unicode code point to encode.
     * @returns The UTF-8 encoded sequence as a string.
     * @throws Will throw an error if the Unicode code point is greater than U+10FFFF.
     * @noSelf
     */
    encode(unicode: number): string;

    /**
     * Decodes a string from its UTF-8 hexadecimal representation (e.g., x68x65x6Cx6Cx6F)
     * back to the original string.
     * @param hex The hexadecimal UTF-8 encoded string prefixed with "x" (e.g., x68x65x6Cx6Cx6F).
     * @returns The decoded string.
     * @noSelf
     */
    decode(hex: string): string;

    /**
     * Converts a string into its UTF-8 encoded form.
     * @param str The string to convert.
     * @returns The UTF-8 encoded string prefixed with "UTF-8:".
     * @noSelf
     */
    convert(str: string): string;
};

export function register(): void;
