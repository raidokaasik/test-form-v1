import 'little-state-machine'
import { IStore } from './features/form/Form'

declare module 'little-state-machine' {
  interface GlobalState extends IStore {}
}
