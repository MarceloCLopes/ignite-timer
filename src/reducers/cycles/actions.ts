import { Cycle } from './reducer'

export enum ActionType {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARCK_CURRENT_CYCLE_AS_FINISHED = 'MARCK_CURRENT_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionType.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function marckCurrentCycleAsFinishedAction() {
  return {
    type: ActionType.MARCK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionType.INTERRUPT_CURRENT_CYCLE,
  }
}
