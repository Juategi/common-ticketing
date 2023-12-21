class Color {
    private name: string;
    private hexCode: string;

    constructor(name: string, hexCode: string) {
        this.name = name;
        this.hexCode = hexCode;
    }

    getName(): string {
        return this.name;
    }

    getHexCode(): string {
        return this.hexCode;
    }
}

const redColor = new Color("Regfgdd", "#FF0000");
const blueColor = new Color("Blue", "#0000FF");


export { Color, redColor };
