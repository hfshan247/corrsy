import {useSelector, TypedUseSelectorHook} from 'react-redux';

export interface RootState {
  routing: SubjectState;
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
