export type CounterAction =
  | { type: 'incrementBy'; payload: { value: number } }
  | { type: 'reset' }

export const doReset = (): CounterAction => {
  return { type: 'reset' }
}

export const doIncrementBy = (value: number): CounterAction => {
  return { type: 'incrementBy', payload: { value } }
}
