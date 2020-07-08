import { RootState } from '@/store/rootReducer';

export const speedSelector = (state: RootState) => state.grid.speed;
export const isPlaySelector = (state: RootState) => state.grid.isPlay