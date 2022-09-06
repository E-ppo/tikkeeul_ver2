import { atom } from 'recoil';
import { JsxElement } from 'typescript';
import { MainTikkeeul, AddTikkeeul } from '../components/tikkeeul';

interface IComponentState {}

export const ComponentStateAtom = atom<JsxElement>({
  key: 'ComponentStateAtom',
  default: typeAddTikkeeul,
});
