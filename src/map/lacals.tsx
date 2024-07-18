export enum TerrainType {
    "WATER",
    "FOREST",
    "WOOD",
    "MOUNTAIN",
    "HILLS",
    "MEADOW",
    "FARM",
    "HEATH",
    "SETTLEMENT",
    "SPECIAL",
    "SWAMP",
    "MARSH",
    "BEACH",
}

export interface hexContent {
    [id: string]: {
        terrain: TerrainType,
        styleOverrides: {
            color: string | null,
            icon: string | null
        }
    }
}

export const defaultStyles = {
    [TerrainType.MOUNTAIN]: {
        icon: 'mountain_range.svg',
        color: "#807b7b",
    }
}

export const HexContent: hexContent = {
    "0_0": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_1": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_2": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_3": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_4": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_5": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_6": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_7": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_8": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_9": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_10": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_11": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_12": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_13": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_14": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_15": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_16": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_17": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_18": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_19": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_20": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_21": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_22": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_23": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_24": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_25": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "0_26": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_0": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_1": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_2": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_3": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_4": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_5": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_6": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_7": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_8": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_9": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_10": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_11": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_12": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_13": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_14": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_15": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_16": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_17": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_18": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_19": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_20": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_21": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_22": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_23": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_24": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_25": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "1_26": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_0": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_1": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_2": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_3": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_4": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_5": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_6": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_7": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_8": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_9": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_10": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_11": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_12": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_13": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_14": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_15": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_16": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_17": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_18": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_19": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_20": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_21": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_22": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_23": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_24": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_25": {
        terrain: TerrainType.HEATH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "2_26": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_0": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_1": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_2": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_3": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_4": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_5": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_6": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_7": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_8": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_9": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_10": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_11": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_12": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_13": {
        terrain: TerrainType.SETTLEMENT,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_14": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_15": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_16": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_17": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_18": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_19": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_20": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_21": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_22": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_23": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_24": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_25": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "3_26": {
        terrain: TerrainType.HEATH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_0": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_1": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_2": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_3": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_4": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_5": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_6": {
        terrain: TerrainType.SPECIAL,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_7": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_8": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_9": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_10": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_11": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_12": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_13": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_14": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_15": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_16": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_17": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_18": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_19": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_20": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_21": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_22": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_23": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_24": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_25": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "4_26": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_0": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_1": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_2": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_3": {
        terrain: TerrainType.SETTLEMENT,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_4": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_5": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_6": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_7": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_8": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_9": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_10": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_11": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_12": {
        terrain: TerrainType.SETTLEMENT,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_13": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_14": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_15": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_16": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_17": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_18": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_19": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_20": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_21": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_22": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_23": {
        terrain: TerrainType.HEATH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_24": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_25": {
        terrain: TerrainType.HEATH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "5_26": {
        terrain: TerrainType.HEATH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_0": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_1": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_2": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_3": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_4": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_5": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_6": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_7": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_8": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_9": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_10": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_11": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_12": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_13": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_14": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_15": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_16": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_17": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_18": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_19": {
        terrain: TerrainType.HEATH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_20": {
        terrain: TerrainType.HEATH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_21": {
        terrain: TerrainType.HEATH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_22": {
        terrain: TerrainType.HEATH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_23": {
        terrain: TerrainType.HEATH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_24": {
        terrain: TerrainType.HEATH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_25": {
        terrain: TerrainType.HEATH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "6_26": {
        terrain: TerrainType.HEATH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_0": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_1": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_2": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_3": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_4": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_5": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_6": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_7": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_8": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_9": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_10": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_11": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_12": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_13": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_14": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_15": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_16": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_17": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_18": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_19": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_20": {
        terrain: TerrainType.HEATH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_21": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_22": {
        terrain: TerrainType.HEATH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_23": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_24": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_25": {
        terrain: TerrainType.HEATH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "7_26": {
        terrain: TerrainType.HEATH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_0": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_1": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_2": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_3": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_4": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_5": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_6": {
        terrain: TerrainType.SPECIAL,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_7": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_8": {
        terrain: TerrainType.SETTLEMENT,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_9": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_10": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_11": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_12": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_13": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_14": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_15": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_16": {
        terrain: TerrainType.SPECIAL,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_17": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_18": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_19": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_20": {
        terrain: TerrainType.SPECIAL,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_21": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_22": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_23": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_24": {
        terrain: TerrainType.HEATH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_25": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "8_26": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_0": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_1": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_2": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_3": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_4": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_5": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_6": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_7": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_8": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_9": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_10": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_11": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_12": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_13": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_14": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_15": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_16": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_17": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_18": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_19": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_20": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_21": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_22": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_23": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_24": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_25": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "9_26": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_0": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_1": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_2": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_3": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_4": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_5": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_6": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_7": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_8": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_9": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_10": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_11": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_12": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_13": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_14": {
        terrain: TerrainType.SPECIAL,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_15": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_16": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_17": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_18": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_19": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_20": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_21": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_22": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_23": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_24": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_25": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "10_26": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_0": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_1": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_2": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_3": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_4": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_5": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_6": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_7": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_8": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_9": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_10": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_11": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_12": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_13": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_14": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_15": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_16": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_17": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_18": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_19": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_20": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_21": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_22": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_23": {
        terrain: TerrainType.SETTLEMENT,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_24": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_25": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "11_26": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_0": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_1": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_2": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_3": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_4": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_5": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_6": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_7": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_8": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_9": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_10": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_11": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_12": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_13": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_14": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_15": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_16": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_17": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_18": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_19": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_20": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_21": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_22": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_23": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_24": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_25": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "12_26": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_0": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_1": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_2": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_3": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_4": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_5": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_6": {
        terrain: TerrainType.SETTLEMENT,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_7": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_8": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_9": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_10": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_11": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_12": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_13": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_14": {
        terrain: TerrainType.SPECIAL,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_15": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_16": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_17": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_18": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_19": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_20": {
        terrain: TerrainType.SPECIAL,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_21": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_22": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_23": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_24": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_25": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "13_26": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_0": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_1": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_2": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_3": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_4": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_5": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_6": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_7": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_8": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_9": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_10": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_11": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_12": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_13": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_14": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_15": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_16": {
        terrain: TerrainType.SETTLEMENT,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_17": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_18": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_19": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_20": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_21": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_22": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_23": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_24": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_25": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "14_26": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_0": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_1": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_2": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_3": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_4": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_5": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_6": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_7": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_8": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_9": {
        terrain: TerrainType.SPECIAL,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_10": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_11": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_12": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_13": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_14": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_15": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_16": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_17": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_18": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_19": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_20": {
        terrain: TerrainType.SPECIAL,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_21": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_22": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_23": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_24": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_25": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "15_26": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_0": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_1": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_2": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_3": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_4": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_5": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_6": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_7": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_8": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_9": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_10": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_11": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_12": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_13": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_14": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_15": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_16": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_17": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_18": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_19": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_20": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_21": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_22": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_23": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_24": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_25": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "16_26": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_0": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_1": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_2": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_3": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_4": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_5": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_6": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_7": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_8": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_9": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_10": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_11": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_12": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_13": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_14": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_15": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_16": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_17": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_18": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_19": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_20": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_21": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_22": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_23": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_24": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_25": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "17_26": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_0": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_1": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_2": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_3": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_4": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_5": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_6": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_7": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_8": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_9": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_10": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_11": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_12": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_13": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_14": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_15": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_16": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_17": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_18": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_19": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_20": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_21": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_22": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_23": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_24": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_25": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "18_26": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_0": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_1": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_2": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_3": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_4": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_5": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_6": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_7": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_8": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_9": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_10": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_11": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_12": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_13": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_14": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_15": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_16": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_17": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_18": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_19": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_20": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_21": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_22": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_23": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_24": {
        terrain: TerrainType.SETTLEMENT,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_25": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "19_26": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_0": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_1": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_2": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_3": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_4": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_5": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_6": {
        terrain: TerrainType.SETTLEMENT,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_7": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_8": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_9": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_10": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_11": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_12": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_13": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_14": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_15": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_16": {
        terrain: TerrainType.SETTLEMENT,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_17": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_18": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_19": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_20": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_21": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_22": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_23": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_24": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_25": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "20_26": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_0": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_1": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_2": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_3": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_4": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_5": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_6": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_7": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_8": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_9": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_10": {
        terrain: TerrainType.SETTLEMENT,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_11": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_12": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_13": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_14": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_15": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_16": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_17": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_18": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_19": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_20": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_21": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_22": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_23": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_24": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_25": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "21_26": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_0": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_1": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_2": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_3": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_4": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_5": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_6": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_7": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_8": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_9": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_10": {
        terrain: TerrainType.FARM,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_11": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_12": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_13": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_14": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_15": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_16": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_17": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_18": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_19": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_20": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_21": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_22": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_23": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_24": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_25": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "22_26": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_0": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_1": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_2": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_3": {
        terrain: TerrainType.SPECIAL,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_4": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_5": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_6": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_7": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_8": {
        terrain: TerrainType.SPECIAL,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_9": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_10": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_11": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_12": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_13": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_14": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_15": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_16": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_17": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_18": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_19": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_20": {
        terrain: TerrainType.SPECIAL,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_21": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_22": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_23": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_24": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_25": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "23_26": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_0": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_1": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_2": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_3": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_4": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_5": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_6": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_7": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_8": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_9": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_10": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_11": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_12": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_13": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_14": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_15": {
        terrain: TerrainType.SPECIAL,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_16": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_17": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_18": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_19": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_20": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_21": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_22": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_23": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_24": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_25": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "24_26": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_0": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_1": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_2": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_3": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_4": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_5": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_6": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_7": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_8": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_9": {
        terrain: TerrainType.SPECIAL,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_10": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_11": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_12": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_13": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_14": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_15": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_16": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_17": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_18": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_19": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_20": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_21": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_22": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_23": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_24": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_25": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "25_26": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_0": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_1": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_2": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_3": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_4": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_5": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_6": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_7": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_8": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_9": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_10": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_11": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_12": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_13": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_14": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_15": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_16": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_17": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_18": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_19": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_20": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_21": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_22": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_23": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_24": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_25": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "26_26": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_0": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_1": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_2": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_3": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_4": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_5": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_6": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_7": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_8": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_9": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_10": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_11": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_12": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_13": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_14": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_15": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_16": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_17": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_18": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_19": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_20": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_21": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_22": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_23": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_24": {
        terrain: TerrainType.SETTLEMENT,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_25": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "27_26": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_0": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_1": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_2": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_3": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_4": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_5": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_6": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_7": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_8": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_9": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_10": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_11": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_12": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_13": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_14": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_15": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_16": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_17": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_18": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_19": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_20": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_21": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_22": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_23": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_24": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_25": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "28_26": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_0": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_1": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_2": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_3": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_4": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_5": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_6": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_7": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_8": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_9": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_10": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_11": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_12": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_13": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_14": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_15": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_16": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_17": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_18": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_19": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_20": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_21": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_22": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_23": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_24": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_25": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "29_26": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_0": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_1": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_2": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_3": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_4": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_5": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_6": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_7": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_8": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_9": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_10": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_11": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_12": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_13": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_14": {
        terrain: TerrainType.SWAMP,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_15": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_16": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_17": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_18": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_19": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_20": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_21": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_22": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_23": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_24": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_25": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "30_26": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_0": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_1": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_2": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_3": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_4": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_5": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_6": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_7": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_8": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_9": {
        terrain: TerrainType.MOUNTAIN,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_10": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_11": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_12": {
        terrain: TerrainType.HILLS,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_13": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_14": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_15": {
        terrain: TerrainType.MARSH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_16": {
        terrain: TerrainType.MEADOW,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_17": {
        terrain: TerrainType.WOOD,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_18": {
        terrain: TerrainType.FOREST,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_19": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_20": {
        terrain: TerrainType.BEACH,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_21": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_22": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_23": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_24": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_25": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    },
    "31_26": {
        terrain: TerrainType.WATER,
        styleOverrides: {
            color: null,
            icon: null
        }
    }
};