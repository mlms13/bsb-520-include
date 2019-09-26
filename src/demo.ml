module IntSemiring = (struct
  type t = int
  let add = (+)
  let mul = ( * )
  let zero = 0
  let one = 1
end : Interface.Semiring with type t = int)

include SemiringExtras.Make(IntSemiring)

let v = increment 3
