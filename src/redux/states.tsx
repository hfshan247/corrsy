import {useSelector, TypedUseSelectorHook} from 'react-redux';

export interface RootState {
  routing: UserState;
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
