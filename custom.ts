
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
     * @param w describe parameter here, eg: "twitter"
     * @param s describe parameter here, eg: "@4pip"
     * @param t describe parameter here, eg: "@peterheldens"
     * @param t describe parameter here, eg: "Whats NExt after 5 Lessons with the Micro:bit?"
     */
    //% block
    export function Pauline(w: string, s: string, e: MyEnum): void {
        // Add code here
    }

    //% block
    export function Peter(w: string, t: string, e: MyEnum): void {
        // Add code here
    }

    //% block
    export function Microbit101(): void {
        // Add code here
    }

    //% block
    export function SessionTitle(l: string): void {
        // Add code here
    }
    
}
