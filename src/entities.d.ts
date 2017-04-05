export declare namespace entities {

    /**
     * Game data types
     */

    // Media: icon/screenshot/background
    interface Media {
        readonly path: string;      // location in CDN
        readonly xz: number;        // width in px
        readonly yz: number;        // hight in px
    }

    // game tag/category
    interface GameTag {
        readonly id: number;        // category/tag id
        readonly name: string;      // display title (html-encode to display)
    }

    // game properties
    interface GameProps {
        hasDemo?: boolean;          // demo mode supported
        isMini?: boolean;           // used as a mini-game (flash/html5)
        isMobile?: boolean;         // mobile supported (html5)
        isDesktop?: boolean;        // desktop supported (flash/html5)
    }

    interface Game {
        readonly id: number;        // sbtech game launch id
        readonly name: string;      // display name (html-encode to display)
        props: GameProps;           // game properties
        tags?: GameTag[];           // list of game tags/categories associated with this game

        thumbs?: Media[];           // list of thumbnails available for display
        background?: Media;         // background image
        provider?: string;          // provider name (html-encode to display)
        populatiry?: number;        // "played today X times"
        priority?: number;          // display priority
        isNew?: boolean;            // display 'new'
        isHot?: boolean;            // display 'hot'
        jackpotId?: string;         // contributing jackpot id
    }


    // info for extended game display
    interface GameEx {
        readonly id: number;        // sbtech game launch id

        description?: string;       // game description (html-encode to display)
        screenshots?: Media[];
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

    // Response for a widget / lobby-category
    interface GameSet {

        readonly setId: string;     // matches requested game-set id
        cdn?: string;               // root path for resources
        games?: Game[];
        jackpots?: Jackpot[];       // list of jackpots matching the list of games
    }

}

/**********************************************************************
* API
* /

// get a set of games for a tab/widget 
//  setId: the game-set id requested 
function getGameSet(setId: string): GameSet;

// get a list of extended game information
//  gameIds: array of requested game IDs.
function getGameEx(gameIds: number[]): GameEx[];

//**********************************************************************/

