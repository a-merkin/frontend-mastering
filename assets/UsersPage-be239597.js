import {
  d as U,
  y as x,
  o as h,
  q as P,
  a as e,
  z as F,
  A as E,
  B as S,
  c as $,
  w as n,
  h as g,
  C as y,
  j as b,
  u as I,
  D as M,
  k as T,
  F as z,
  G as B,
  H as N,
  _ as C,
  I as A,
  J as D,
  K as O,
  L as j,
  M as G,
  N as K,
  O as q,
  P as H
} from "./index-d9222ca1.js"
/* empty css                     */ const J = U({
  __name: "TablePagination",
  props: { page: null, per_page: null, maxPage: null },
  emits: ["update:per_page", "update:page", "submit-pagination"],
  setup(p, { emit: o }) {
    const c = p,
      s = x(""),
      t = (i, l) => {
        o(i, l), o("submit-pagination"), (s.value = "")
      }
    return (i, l) => {
      const _ = F
      return (
        h(),
        P("div", null, [
          e(
            _,
            {
              background: "",
              layout: "prev, pager, next, jumper, sizes",
              "page-size": c.per_page,
              "page-count": c.maxPage,
              onCurrentChange: l[0] || (l[0] = (u) => t("update:page", u)),
              onSizeChange: l[1] || (l[1] = (u) => o("update:per_page", u))
            },
            null,
            8,
            ["page-size", "page-count"]
          )
        ])
      )
    }
  }
})
const Q = { style: { display: "flex", "align-items": "center" } },
  R = ["src"],
  W = U({
    __name: "UsersListTable",
    props: { isLoading: { type: Boolean } },
    emits: ["edit-user", "delete-user"],
    setup(p, { emit: o }) {
      const c = p,
        s = E(),
        t = (l) => {
          o("edit-user", l)
        },
        i = (l) => {
          s.deleteUser(l).then(() => {
            o("delete-user")
          })
        }
      return (l, _) => {
        const u = M,
          a = T,
          f = z,
          m = B,
          v = N
        return S(
          (h(),
          $(
            m,
            {
              data: I(s).users,
              height: "100%",
              style: { width: "100%" },
              "row-style": { width: "100%" }
            },
            {
              default: n(() => [
                e(
                  u,
                  { label: "Фото", width: "180" },
                  {
                    default: n((r) => [
                      g("div", Q, [g("img", { src: r.row.avatar }, null, 8, R)])
                    ]),
                    _: 1
                  }
                ),
                e(
                  u,
                  { label: "Имя", width: "180" },
                  { default: n((r) => [g("p", null, y(r.row.first_name), 1)]), _: 1 }
                ),
                e(
                  u,
                  { label: "Фамилия", width: "180" },
                  { default: n((r) => [g("p", null, y(r.row.last_name), 1)]), _: 1 }
                ),
                e(
                  u,
                  { label: "Email", width: "180" },
                  { default: n((r) => [g("p", null, y(r.row.email), 1)]), _: 1 }
                ),
                e(
                  u,
                  { fixed: "right" },
                  {
                    default: n((r) => [
                      e(
                        a,
                        { size: "small", onClick: (d) => t(r.row.id) },
                        { default: n(() => [b("Изменить")]), _: 2 },
                        1032,
                        ["onClick"]
                      ),
                      e(
                        f,
                        { title: "Вы уверены?", onConfirm: (d) => i(r.row.id) },
                        {
                          reference: n(() => [
                            e(
                              a,
                              { size: "small", type: "danger" },
                              { default: n(() => [b("Удалить")]), _: 1 }
                            )
                          ]),
                          _: 2
                        },
                        1032,
                        ["onConfirm"]
                      )
                    ]),
                    _: 1
                  }
                )
              ]),
              _: 1
            },
            8,
            ["data"]
          )),
          [[v, c.isLoading]]
        )
      }
    }
  })
const X = C(W, [["__scopeId", "data-v-071522d7"]]),
  Y = { class: "actions" },
  Z = U({
    __name: "TableActions",
    emits: ["create-user"],
    setup(p, { emit: o }) {
      return (c, s) => {
        const t = T
        return (
          h(),
          P("div", Y, [
            e(
              t,
              { onClick: s[0] || (s[0] = (i) => o("create-user")) },
              { default: n(() => [b("Создать")]), _: 1 }
            )
          ])
        )
      }
    }
  })
const ee = C(Z, [["__scopeId", "data-v-c689f36d"]]),
  te = { class: "modal" },
  ne = { class: "modal__title" },
  ae = U({
    __name: "ModalUserEdit",
    props: { title: null, userId: null },
    emits: ["close", "confirm"],
    setup(p, { emit: o }) {
      const c = p,
        s = E(),
        t = x({}),
        i = x(!1)
      ;(() => {
        c.userId
          ? s.getUser(c.userId).then(({ data: u }) => {
              t.value = u.data
            })
          : (t.value = { email: "", first_name: "", last_name: "" })
      })()
      const _ = () => {
        ;(i.value = !0),
          c.userId
            ? s.updateUser(t.value).then(() => {
                ;(i.value = !1), o("confirm")
              })
            : s.createUser(t.value).then(() => {
                ;(i.value = !1), o("confirm")
              })
      }
      return (u, a) => {
        const f = O,
          m = j,
          v = T,
          r = G
        return (
          h(),
          $(
            I(D),
            {
              style: {
                display: "flex",
                "justify-content": "center",
                "align-items": "center"
              },
              contentStyle:
                "background: #fff; padding: 20px; border-radius: 5px; height: fit-content"
            },
            {
              default: n(() => [
                g("div", te, [
                  g("p", ne, y(p.title), 1),
                  e(
                    r,
                    { onKeyup: A(_, ["enter"]) },
                    {
                      default: n(() => [
                        e(
                          m,
                          { label: "Почта" },
                          {
                            default: n(() => [
                              e(
                                f,
                                {
                                  modelValue: t.value.email,
                                  "onUpdate:modelValue":
                                    a[0] || (a[0] = (d) => (t.value.email = d))
                                },
                                null,
                                8,
                                ["modelValue"]
                              )
                            ]),
                            _: 1
                          }
                        ),
                        e(
                          m,
                          { label: "Имя" },
                          {
                            default: n(() => [
                              e(
                                f,
                                {
                                  modelValue: t.value.first_name,
                                  "onUpdate:modelValue":
                                    a[1] || (a[1] = (d) => (t.value.first_name = d))
                                },
                                null,
                                8,
                                ["modelValue"]
                              )
                            ]),
                            _: 1
                          }
                        ),
                        e(
                          m,
                          { label: "Фамилия" },
                          {
                            default: n(() => [
                              e(
                                f,
                                {
                                  modelValue: t.value.last_name,
                                  "onUpdate:modelValue":
                                    a[2] || (a[2] = (d) => (t.value.last_name = d))
                                },
                                null,
                                8,
                                ["modelValue"]
                              )
                            ]),
                            _: 1
                          }
                        ),
                        e(m, null, {
                          default: n(() => [
                            e(
                              v,
                              { type: "primary", loading: i.value, onClick: _ },
                              { default: n(() => [b("Подтвердить")]), _: 1 },
                              8,
                              ["loading"]
                            ),
                            e(
                              v,
                              { onClick: a[3] || (a[3] = (d) => o("close")) },
                              { default: n(() => [b("Отмена")]), _: 1 }
                            )
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    },
                    8,
                    ["onKeyup"]
                  )
                ])
              ]),
              _: 1
            }
          )
        )
      }
    }
  })
const oe = C(ae, [["__scopeId", "data-v-ca583777"]]),
  se = { class: "users-page" },
  le = { class: "users-page__table-container" },
  re = U({
    __name: "UsersPage",
    setup(p) {
      const o = E(),
        c = { page: 1, per_page: 10 },
        s = x(!0),
        { close: t, open: i, options: l } = K({ component: oe }),
        _ = q({})
      ;(() => {
        Object.assign(_, c)
      })()
      const a = () => {
        ;(s.value = !0),
          o.getUsers({ ..._ }).then(() => {
            s.value = !1
          })
      }
      a()
      const f = () => {
          ;(l.attrs = {
            title: "Создание",
            onClose() {
              t()
            },
            onConfirm() {
              t(), a()
            }
          }),
            i()
        },
        m = (r) => {
          ;(l.attrs = {
            title: "Редактирование",
            userId: r,
            onClose() {
              t()
            },
            onConfirm() {
              t(), a()
            }
          }),
            i()
        },
        v = () => {
          a()
        }
      return (
        H(_, a),
        (r, d) => {
          const k = ee,
            L = X,
            V = J
          return (
            h(),
            P("div", se, [
              g("div", le, [
                e(k, { onCreateUser: f }),
                e(L, { isLoading: s.value, onEditUser: m, onDeleteUser: v }, null, 8, [
                  "isLoading"
                ])
              ]),
              e(
                V,
                {
                  page: _.page,
                  "onUpdate:page": d[0] || (d[0] = (w) => (_.page = w)),
                  per_page: _.per_page,
                  "onUpdate:per_page": d[1] || (d[1] = (w) => (_.per_page = w)),
                  maxPage: I(o).usersMaxPage
                },
                null,
                8,
                ["page", "per_page", "maxPage"]
              )
            ])
          )
        }
      )
    }
  })
const ue = C(re, [["__scopeId", "data-v-c9fef2da"]])
export { ue as default }
