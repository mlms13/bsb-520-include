module type Semiring = sig
  type t
  val add : t -> t -> t
  val mul : t -> t -> t
  val zero : t
  val one : t
end
