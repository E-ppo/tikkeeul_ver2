import { atom } from 'recoil';
import { JsxElement } from 'typescript';
import { MainTikkeeul, AddTikkeeul } from '../components/tikkeeul';

interface IComponentState {
  componentState?: JsxElement;
}

// export const ComponentStateAtom = atom({
//   key: 'ComponentStateAtom',
//   default: typeof AddTikkeeul,
// });
