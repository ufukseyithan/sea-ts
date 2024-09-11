export const colorChar = "\u00A9";

export function color(r: number, g: number, b: number): string;
export function color(rgb: string): string;
export function color(valueOrValues: number | string, value2?: number, value3?: number): string {
    const repeat = (value: number | string) => value.toString().repeat(3).slice(0, 3);

    if (typeof valueOrValues === "string") {
        return `${colorChar}${valueOrValues}`;
    } else {
        const [r, g, b] = [valueOrValues, value2!, value3!];
        return `${colorChar}${repeat(r)}${repeat(g)}${repeat(b)}`;
    }
}
