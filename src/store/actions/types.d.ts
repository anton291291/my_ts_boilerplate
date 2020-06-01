import { PlayerActions } from './index';
import {
    PlayerActions,
    AxisActions,
    CellsActions,
    GreetingFormActions,
    IntervalIDAction
} from './index';

type id = typeof PlayerActions['setGen'];

type PlayerActionsType =
    | ReturnType<typeof PlayerActions['setIsPlay']>
    | ReturnType<typeof PlayerActions['setIsStop']>
    | ReturnType<typeof PlayerActions['setReset']>
    | ReturnType<typeof PlayerActions['setGen']>
    | ReturnType<typeof PlayerActions['setRandomIndex']>
    | ReturnType<typeof PlayerActions['setSpeed']>
    | ReturnType<typeof PlayerActions['getName']>;

type AxisActionsType =
    | ReturnType<typeof AxisActions['increaseXaxis']>
    | ReturnType<typeof AxisActions['decreaseXaxis']>
    | ReturnType<typeof AxisActions['increaseYaxis']>
    | ReturnType<typeof AxisActions['decreaseYaxis']>;

type CellsActionsType =
    | ReturnType<typeof CellsActions['randomCells']>
    | ReturnType<typeof CellsActions['clickCell']>
    | ReturnType<typeof CellsActions['simulateLife']>;

type GreetingFormActionsType = ReturnType<
    typeof GreetingFormActions['setStart']
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
