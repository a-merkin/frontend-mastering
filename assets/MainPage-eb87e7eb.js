import {
  d as u,
  o as d,
  c as i,
  w as n,
  a as e,
  u as m,
  r as w,
  b as x,
  E,
  e as b,
  f as y,
  p as v,
  g,
  h as f,
  _ as h,
  i as I,
  j as M,
  k as C,
  l as k,
  m as $,
  n as A,
  q as S,
  R as B,
  s as D,
  t as U,
  v as H,
  x as V
} from "./index-ba6ceeff.js"
/* empty css                     */ const F = (o) => (
    v("data-v-99f10c91"), (o = o()), g(), o
  ),
  N = F(() => f("span", null, "Список пользователей", -1)),
  O = u({
    __name: "AppSidebar",
    setup(o) {
      const _ = () => {},
        s = () => {}
      return (r, t) => {
        const c = x("UserFilled"),
          a = E,
          l = b,
          p = y
        return (
          d(),
          i(
            p,
            { "default-active": "1", class: "sidebar", onOpen: _, onClose: s },
            {
              default: n(() => [
                e(
                  l,
                  {
                    index: "1",
                    onClick: t[0] || (t[0] = (Q) => m(w).push("/users-list"))
                  },
                  {
                    default: n(() => [e(a, null, { default: n(() => [e(c)]), _: 1 }), N]),
                    _: 1
                  }
                )
              ]),
              _: 1
            }
          )
        )
      }
    }
  })
const R = h(O, [["__scopeId", "data-v-99f10c91"]])
const j = (o) => (v("data-v-e33c5b95"), (o = o()), g(), o),
  q = j(() => f("p", { class: "user-menu__username" }, "Меню пользователя", -1)),
  G = u({
    __name: "UserMenu",
    setup(o) {
      const { handleLogout: _ } = I()
      return (s, r) => {
        const t = C,
          c = k,
          a = $,
          l = A
        return (
          d(),
          i(
            l,
            { class: "user-menu", trigger: "click" },
            {
              dropdown: n(() => [
                e(a, null, {
                  default: n(() => [
                    e(c, { onClick: m(_) }, { default: n(() => [M("Выход")]), _: 1 }, 8, [
                      "onClick"
                    ])
                  ]),
                  _: 1
                })
              ]),
              default: n(() => [
                e(t, { type: "primary" }, { default: n(() => [q]), _: 1 })
              ]),
              _: 1
            }
          )
        )
      }
    }
  })
const L = h(G, [["__scopeId", "data-v-e33c5b95"]])
const P = {},
  T = { class: "header" }
function z(o, _) {
  const s = L
  return d(), S("div", T, [e(s)])
}
const J = h(P, [
    ["render", z],
    ["__scopeId", "data-v-3b6620e8"]
  ]),
  K = { style: { background: "#fff", height: "100%" } },
  Y = u({
    __name: "MainPage",
    setup(o) {
      return (_, s) => {
        const r = J,
          t = D,
          c = R,
          a = U,
          l = H,
          p = V
        return (
          d(),
          i(
            p,
            { style: { height: "100%" } },
            {
              default: n(() => [
                e(t, { style: { padding: "0" } }, { default: n(() => [e(r)]), _: 1 }),
                e(
                  p,
                  { style: { height: "100%" } },
                  {
                    default: n(() => [
                      e(a, { width: "100" }, { default: n(() => [e(c)]), _: 1 }),
                      e(l, null, { default: n(() => [f("div", K, [e(m(B))])]), _: 1 })
                    ]),
                    _: 1
                  }
                )
              ]),
              _: 1
            }
          )
        )
      }
    }
  })
export { Y as default }
