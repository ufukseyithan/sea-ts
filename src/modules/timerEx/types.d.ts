/**
 * Creates a timer that executes a function at specified intervals.
 *
 * @param ms - The interval in milliseconds between each function execution.
 * @param func - The function to execute or the name of a function to call as a string.
 * @param count - The number of times to execute the function. If 0, it repeats indefinitely. Defaults to 1.
 * @param args - Additional arguments to pass to the function.
 * @returns The unique ID of the created timer.
 * @noSelf
 */
declare function timerEx(
    ms: number,
    func: ((...args: any[]) => any) | string,
    count?: number,
    ...args: any[]
): number;

/**
 * Frees a previously created timer and cleans up associated data.
 *
 * @param id - The ID of the timer to free.
 * @returns True if the timer was successfully freed, false otherwise.
 * @noSelf
 */
declare function freeTimerEx(id: number): boolean;
