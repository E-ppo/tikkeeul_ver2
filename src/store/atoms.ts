import { atom } from 'recoil';
import { MainTikkeeul, AddTikkeeul } from '../components/tikkeeul';

// export const ComponentStateAtom = atom({
//   key: 'ComponentStateAtom',
//   default: typeof AddTikkeeul,
// });

export const selectedItem = atom({
  key: 'SelectedItem',
  default: {},
});
