export function init(argc : number) {

    console.log("\n\x1b[42m:: running index.ts ::\x1b[0m\n");
    if (!(argc == 3)) {
        console.log("Incorrect usage, please call with:\n $ flux [filename].fx\nExiting Process, Goodbye!\n");
        process.exit(0);
    }

}