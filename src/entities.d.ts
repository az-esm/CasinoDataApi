export declare namespace entities {

    /**
     * Game data types
     */

    interface Image {
        readonly path: string;      // location in CDN
        readonly xz: number;        // width in px
        readonly yz: number;        // hight in px
    }

    interface Game {
        readonly id: number;        // sbtech game launch id
        readonly name: string;      // display name (html-encode to display)
        provider?: string;          // provider name (html-encode to display)
        thumbs?: Image[];           // list of thumbnails available for display
        background?: Image;         // background image
        populatiry?: number;        // "played today X times"

        priority?: number;          // display priority
        hasDemo?: boolean;          // demo mode supported
        isNew?: boolean;            // display 'new'
        isHot?: boolean;            // display 'hot'
        jackpotId?: string;         // contributing jackpot id
    }

    // a game tag/category
    interface GameTag {
        readonly id: number;        // category/tag id
        readonly name: string;      // display title (html-encode to display)
    }

    // info for extended game display
    interface GameEx {
        readonly id: number;        // sbtech game launch id

        description?: string;       // game description (html-encode to display)
        screenshots?: Image[];
        gameTags?: GameTag[];       // list of game tags/categories associated with this game
        since?: Date;               // launch date

        minBet?: number;            // min bet (player currency)
        maxBet?: number;            // maxBet (player currency)

        features?: any[];           // list of features and their values
                                    // features["thrill"] = {0|1|2|3|4}
                                    // features["risk"] = {0|1|2|3|4}
                                    // features["volatility"] = {0|1|2|3|4}
    }

    /**
     * Jackpot data types
     */

    interface JackpotLevel {
        readonly name: string;      // jackpot level display name (html-encode to display)
        value: number;              // level current value
    }

    interface Jackpot {
        readonly id: string;        // jackpot id
        readonly name: string;      // jackpot display name (html-encode to display)
        readonly cur: string;       // currency display symbol (html-encode to display)
        levels: JackpotLevel[];     // list of JP levels
    }

    /**
     * Casino widgets data types
     */

    // types of data to get: xor for 
    const enum InfoFlags {
        none = 0,
        categories = 1 << 1,        // group games in categories
        minigame = 1 << 2,          // get mini-games
        mobile = 1 << 3,            // get mobile games
        desktop = 1 << 4,           // get desktop games
        jackpot = 1 << 5,           // get jackpots
        all = 0xffff
    }

    // Response for a widget / lobby-category
    interface GameList {

        readonly id: number;        // matches requested widget id
        readonly infoFlags: number; // matches requested InfoFlags xor
        name?: string;              // display title (html-encode to display)
        cdn?: string;               // root path for resources

        categories?: Array<{        // list of game categories, each with a list of games
            cat: GameTag;
            games: Game[];
        }>;
        jackpots?: Jackpot[];       // list of jackpots matching the list of games
    }

}

/**********************************************************************
* API
* /

// get a list of game tags/categories
function getGameTags(): GameTag[];

// get a list of games for a tab/widget and a set of categories
//  tabId: casino tab ID
//  widgetId: widget ID
//  infoFlags: xor of InfoFlags
//  tags: array of requested tag IDs. Ommit for all.
function getGameList(tabId: number, widgetId: number, infoFlags?: number, tags?: number[]): GameList;

// get a list of extended game information
//  gameIds: array of requested game IDs.
function getGameExList(gameIds: number[]): GameEx[];

//**********************************************************************/

