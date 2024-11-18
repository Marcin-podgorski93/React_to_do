export function getSubheading(numberoftask) {
  switch (true) {
    case numberoftask > 4:
      return `${numberoftask} zadań`;
    case numberoftask > 1:
      return `${numberoftask} zadania`;
    case numberoftask === 1:
      return `1 zadanie`;
    case numberoftask === 0:
    default:
      return `Brak zadań`;
  }
}
