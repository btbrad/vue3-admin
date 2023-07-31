export const setItem = (key: string, value: unknown) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value as string)
}

export const getItem = (key: string) => {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(value as string)
  } catch (error) {
    return value
  }
}

export const removeItem = (key: string) => {
  window.localStorage.removeItem(key)
}

export const removeAll = () => {
  window.localStorage.clear()
}
