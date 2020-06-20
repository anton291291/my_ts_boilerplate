import { PlayerActions } from './index';
import {
    PlayerActions,
    AxisActions,
    CellsActions,
    GreetingFormActions
} from './index';

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type Actions<T> = ReturnType<InferValueTypes<T>>;

type PlayerActionsType = Actions<typeof PlayerActions>;

type AxisActionsType = Actions<typeof AxisActions>;

type CellsActionsType = Actions<typeof CellsActions>;

type GreetingFormActionsType = Actions<typeof GreetingFormActions>;

export type ActionTypes =
    | PlayerActionsType
    | AxisActionsType
    | CellsActionsType
    | GreetingFormActionsType;
