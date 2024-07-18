import React, {useRef, useEffect, useState} from 'react';
import './Map.css'
import Hex, {coordinates} from "./hex";

interface Grid {
    x: number;
    y: number;
    xOffset: number;
    yOffset: number;
    isDragging: boolean;

    scaleFactor: number;
    mouseX: number;
    mouseY: number;
}

interface HexCoordinatesMap {
    [id: string]: Array<coordinates>;
}

const hexCoordinates: HexCoordinatesMap = {};

function Map() {
    const HEX_ANGLE = 2 * Math.PI / 6;
    const ref = useRef<HTMLCanvasElement>(null);
    const _RADIUS = 40; // Math.round(window.innerWidth / 40 );
    const _ROW_COUNT = 31;
    const _COLUMN_COUNT = 27;

    const [grid, setGrid] = useState<Grid>({
        x: -50,
        y: -50,
        xOffset: 0,
        yOffset: 0,
        isDragging: false,
        scaleFactor: 1,
        mouseX: 0,
        mouseY: 0,
    })

    useEffect(() => {
            if (ref.current) {
                const context = ref.current.getContext('2d');
                if (context) {
                    context.beginPath();
                    context.rect(0, 0, window.innerWidth, window.innerHeight);
                    context.fillStyle = "white";
                    context.fill();
                    context.closePath();
                    drawHexGrid(grid, context);
                }
            }
        },
        [grid])

    return (
        <canvas
            id="canvas"
            width={window.innerWidth}
            height={window.innerHeight}
            ref={ref}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
        >
        </canvas>
    );

    function verifyInBounds(x: number) {
        return x > -50 * grid.scaleFactor ? -50 * grid.scaleFactor : x;
    }

    function handleMouseDown(e: React.MouseEvent<HTMLCanvasElement>) {
        setGrid({
            ...grid,
            xOffset: e.clientX - grid.x,
            yOffset: e.clientY - grid.y,
            isDragging: true,
        });
    }

    function handleMouseUp() {
        setGrid({...grid, isDragging: false});
    }

    function handleMouseMove(e: React.MouseEvent<HTMLCanvasElement>) {

        if (grid.isDragging) {
            const x = verifyInBounds(e.clientX - grid.xOffset);
            const y = verifyInBounds(e.clientY - grid.yOffset);
            setGrid({...grid, x, y, mouseX: e.clientX, mouseY: e.clientY});
        } else {
            setGrid({...grid, mouseX: e.clientX, mouseY: e.clientY});
        }
    }

    function drawHexGrid(grid: Grid, context: CanvasRenderingContext2D) {
        const radius = _RADIUS * grid.scaleFactor;
        let y = radius + grid.y;
        for (let i = 0; i < _ROW_COUNT; ++i) {
            y += 2 * radius * Math.sin(HEX_ANGLE);
            drawHexRow(radius, y, grid, i, context);
        }
    }

    function drawHexRow(radius: number, startingY: number, grid: Grid, rowNumber: number, context: CanvasRenderingContext2D) {
        let x = radius + grid.x;
        let y = startingY;
        for (let i = 0; i < _COLUMN_COUNT; ++i) {
            x += radius * (1 + Math.cos(HEX_ANGLE));
            y = i % 2 === 0
                ? y - radius * Math.sin(HEX_ANGLE)
                : y + radius * Math.sin(HEX_ANGLE);
            const hex = new Hex(x, y, radius, `${rowNumber}_${i}`);
            hexCoordinates[hex.id] = hex.coordinates;
            hex.draw(context, grid.mouseX, grid.mouseY);
        }
    }

}

export default Map;