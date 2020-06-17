import { PlayerActions } from './index';
import {
    PlayerActions,
    AxisActions,
    CellsActions,
    GreetingFormActions
} from './index';

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type Actions<T> = ReturnType<InferValueTypes<T>>;

export type ActionTypes = Actions<
    | typeof PlayerActions
    | typeof AxisActions
    | typeof CellsActions
    | typeof GreetingFormActions
>;
