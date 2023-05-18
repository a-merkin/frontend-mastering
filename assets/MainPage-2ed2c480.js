import {
  d as u,
  o as d,
  q as i,
  w as n,
  e,
  u as m,
  r as w,
  f as x,
  m as y,
  s as E,
  v as I,
  x as v,
  y as g,
  a as f,
  g as M,
  j as b,
  n as C,
  z as A,
  A as $,
  B as k,
  c as S,
  R as B,
  C as D,
  D as U,
  F,
  G as H
} from "./index-62fbf858.js"
/* empty css                     */ /* empty css                */ import { _ as h } from "./_plugin-vue_export-helper-c27b6911.js"
/* empty css                  */ const V = (o) => (
    v("data-v-99f10c91"), (o = o()), g(), o
  ),
  N = V(() => f("span", null, "Список пользователей", -1)),
  G = u({
    __name: "AppSidebar",
    setup(o) {
      const _ = () => {},
        s = () => {}
      return (r, t) => {
        const c = x("UserFilled"),
          a = y,
          l = E,
          p = I
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
const O = h(G, [["__scopeId", "data-v-99f10c91"]])
const R = (o) => (v("data-v-e33c5b95"), (o = o()), g(), o),
  j = R(() => f("p", { class: "user-menu__username" }, "Меню пользователя", -1)),
  q = u({
    __name: "UserMenu",
    setup(o) {
      const { handleLogout: _ } = M()
      return (s, r) => {
        const t = C,
          c = A,
          a = $,
          l = k
        return (
          d(),
          i(
            l,
            { class: "user-menu", trigger: "click" },
            {
              dropdown: n(() => [
                e(a, null, {
                  default: n(() => [
                    e(c, { onClick: m(_) }, { default: n(() => [b("Выход")]), _: 1 }, 8, [
                      "onClick"
                    ])
                  ]),
                  _: 1
                })
              ]),
              default: n(() => [
                e(t, { type: "primary" }, { default: n(() => [j]), _: 1 })
              ]),
              _: 1
            }
          )
        )
      }
    }
  })
const z = h(q, [["__scopeId", "data-v-e33c5b95"]])
const L = {},
  P = { class: "header" }
function T(o, _) {
  const s = z
  return d(), S("div", P, [e(s)])
}
const J = h(L, [
    ["render", T],
    ["__scopeId", "data-v-3b6620e8"]
  ]),
  K = { style: { background: "#fff", height: "100%" } },
  ne = u({
    __name: "MainPage",
    setup(o) {
      return (_, s) => {
        const r = J,
          t = D,
          c = O,
          a = U,
          l = F,
          p = H
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
export { ne as default }
