
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace MicrobitLive {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "@4pip"
     * @param t describe parameter here, eg: "@peterheldens"
     */
    //% block
    export function Pauline(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    //% block
    export function Microbit101(): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function Peter(value: number, s: string): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
}
