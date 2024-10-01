type  Type<T extends string | number | symbol, U> = {
  [k in T]:U
}


type R = Record<string, string>
