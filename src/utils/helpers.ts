export function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export const setCaptializedValueOptions = {
  setValueAs: (value: string) => capitalizeFirstLetter(value),
}
