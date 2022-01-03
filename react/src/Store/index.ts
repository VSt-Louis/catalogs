import { useState } from "react"

type Listener<T> = (newValue: T) => void

export function createStore<T>(value: T) {
  const listeners: Map<symbol, Listener<T>> = new Map()

  const addListener = (listener: Listener<T>) => {
    const key = Symbol();
    listeners.set(key, listener);
    //return a remove function
    return () => listeners.delete(key);
  }

  // always keep the inner value updated, in the case where we need it outside of a component.
  // that inner value will be used as default value for the useState hook when it's created
  const set = (newValue: T) => {
    value = newValue
    listeners.size && listeners.forEach(l => l(newValue))
  }
  return {
    //hook
    use: () => {
      const [_value, setValue] = useState<T>(value)
      addListener(setValue)
      return _value
    },
    set,
    value,
    get: () => {
      return value
    },
    addListener,
    transform: (f: (prev: T) => T) => {set(f(value))}
  }
}


//ex
type User = string

const userStore = createStore<User | undefined>(undefined)

userStore.value