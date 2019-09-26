module Make(S: Interface.Semiring) = struct
  let increment = S.add S.one
end
