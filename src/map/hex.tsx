import {defaultStyles, HexContent, TerrainType} from "./lacals";

export interface coordinates {
    x: number,
    y: number,
}

class Hex {
    static ANGLE = 2 * Math.PI / 6;
    static ICON_PATH = 'src/assets/svg/'
    id: string;

    coordinates: Array<coordinates>;
    private x: number;
    private y: number;
    private radius: number;

    constructor(x: number, y: number, radius: number, id: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.id = id; // done
        this.coordinates = new Array<coordinates>();
        for (let i = 0; i < 6; ++i) {
            let vertexX = this.x + this.radius * Math.cos(Hex.ANGLE * ((i + 4) % 6));
            let vertexY = this.y + this.radius * Math.sin(Hex.ANGLE * ((i + 4) % 6));
            this.coordinates.push({x: vertexX, y: vertexY});
        }
    }

    circleVertex(vertex: number, ctx: CanvasRenderingContext2D) {
        if (vertex > 5 || vertex < 0) {
            throw new Error("vertex must be an integer 0 - 5");
        }
        ctx.beginPath();
        ctx.arc(this.coordinates[vertex].x, this.coordinates[vertex].y, 5, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
    }

    draw(ctx: CanvasRenderingContext2D, mouseX: number, mouseY: number) {
        ctx.beginPath();
        this.coordinates.forEach((vertex: coordinates) => {
            ctx.lineTo(vertex.x, vertex.y);
        })
        ctx.closePath();

        let isActive = false;
        for (let i = 0, j = this.coordinates.length - 1; i < this.coordinates.length; j = i++) {
            const xi = this.coordinates[i].x, yi = this.coordinates[i].y;
            const xj = this.coordinates[j].x, yj = this.coordinates[j].y;

            const intersect = ((yi > mouseY) !== (yj > mouseY)) &&
                (mouseX < (xj - xi) * (mouseY - yi) / (yj - yi) + xi);

            if (intersect) isActive = !isActive;
        }

        if (!HexContent[this.id]) {
            throw new Error(`id ${this.id} has no entry`);
        }

        let backgroundColor: string = "#EEEEEE";
        if (isActive) {
            ctx.fillStyle = 'pink';
        } else {
            switch (HexContent[this.id].terrain) {
                case TerrainType.WATER: {
                    backgroundColor = "#236fbb";
                    break;
                }
                case TerrainType.MEADOW: {
                    backgroundColor = "green";
                    break;
                }
                case TerrainType.MOUNTAIN: {
                    backgroundColor = defaultStyles[TerrainType.MOUNTAIN].color;

                    break;
                }
                case TerrainType.FOREST: {
                    backgroundColor = "#025e1e";
                    break;
                }
                case TerrainType.WOOD: {
                    backgroundColor = "#1d9142";
                    break;
                }
                case TerrainType.HILLS: {
                    backgroundColor = "#52795e";
                    break;
                }
                case TerrainType.FARM: {
                    backgroundColor = "#5d4432";
                    break;
                }
                case TerrainType.HEATH: {
                    backgroundColor = "#967f64";
                    break;
                }
                case TerrainType.BEACH: {
                    backgroundColor = "#face6e";
                    break;
                }
                case TerrainType.SWAMP: {
                    backgroundColor = "#769f00";
                    break;
                }
                case TerrainType.MARSH: {
                    backgroundColor = "#9ab733";
                    break;
                }
            }
            ctx.fillStyle = "#EEEEEE";
        }

        ctx.fillStyle = backgroundColor;

        ctx.fill();
        ctx.stroke();


        // new Canvas


        // ctx.drawImage(Hex.ICON_PATH + "mountain_range.svg", this.x, this.y);
        // ctx.drawImage(icon.src, this.x, this.y);

        this.addLabel(ctx);

    }

    private addLabel(ctx: CanvasRenderingContext2D) {
        ctx.font = `${this.radius / 4}px Arial`;
        ctx.textBaseline = "bottom";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(this.id, this.x, this.y + this.radius * 0.8);
    }
}

export default Hex;