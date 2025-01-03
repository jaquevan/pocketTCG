//Interface for the pokemon card object made by Artemios Kayas
// Has everything we need to display a card and its information
export interface PokemonCard {
    id: string;
    name: string;
    supertype: string;
    subtypes?: string[];
    level?: string;
    hp?: string;
    types?: string[];
    evolvesFrom?: string;
    images?: {
        small: string;
        large: string;
    };
}
