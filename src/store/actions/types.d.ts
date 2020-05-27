import { PlayerActions } from './index';
import {
    PlayerActions,
    AxisActions,
    CellsActions,
    GreetingFormActions,
    IntervalIDAction
} from './index';

type PlayerActionsType =
    | ReturnType<typeof PlayerActions['setIsPlay']>
    | ReturnType<typeof PlayerActions['setIsStop']>
    | ReturnType<typeof PlayerActions['setGen']>
    | ReturnType<typeof PlayerActions['setRandomIndex']>
    | ReturnType<typeof PlayerActions['setSpeed']>;

type AxisActionsType =
    | ReturnType<typeof AxisActions['setXaxis']>
    | ReturnType<typeof AxisActions['setYaxis']>;

type CellsActionsType =
    | ReturnType<typeof CellsActions['randomCells']>
    | ReturnType<typeof CellsActions['simulateLife']>;

type GreetingFormActionsType = ReturnType<
    typeof GreetingFormActions['setName']
>;

type IntervalIDActionType = ReturnType<
    typeof IntervalIDAction['setIntervalID']
>;

export type ActionTypes =
    | PlayerActionsType
    | AxisActionsType
    | CellsActionsType
    | GreetingFormActionsType
    | IntervalIDActionType;
