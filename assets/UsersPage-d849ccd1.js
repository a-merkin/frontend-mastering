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
} from "./index-ba6ceeff.js"
/* empty css                     */ const J = U({
  __name: "TablePagination",
  props: { page: null, per_page: null, maxPage: null },
  emits: ["update:per_page", "update:page", "submit-pagination"],
  setup(p, { emit: o }) {
    const d = p,
      s = x(""),
      t = (l, r) => {
        o(l, r), o("submit-pagination"), (s.value = "")
      }
    return (l, r) => {
      const _ = F
      return (
        h(),
        P("div", null, [
          e(
            _,
            {
              background: "",
              layout: "prev, pager, next, jumper, sizes",
              "page-size": d.per_page,
              "page-count": d.maxPage,
              onCurrentChange: r[0] || (r[0] = (u) => t("update:page", u)),
              onSizeChange: r[1] || (r[1] = (u) => o("update:per_page", u))
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
      const d = p,
        s = E(),
        t = (r) => {
          o("edit-user", r)
        },
        l = (r) => {
          s.deleteUser(r).then(() => {
            o("delete-user")
          })
        }
      return (r, _) => {
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
                    default: n((i) => [
                      g("div", Q, [g("img", { src: i.row.avatar }, null, 8, R)])
                    ]),
                    _: 1
                  }
                ),
                e(
                  u,
                  { label: "Имя", width: "180" },
                  { default: n((i) => [g("p", null, y(i.row.first_name), 1)]), _: 1 }
                ),
                e(
                  u,
                  { label: "Фамилия", width: "180" },
                  { default: n((i) => [g("p", null, y(i.row.last_name), 1)]), _: 1 }
                ),
                e(
                  u,
                  { label: "Email", width: "180" },
                  { default: n((i) => [g("p", null, y(i.row.email), 1)]), _: 1 }
                ),
                e(
                  u,
                  { fixed: "right" },
                  {
                    default: n((i) => [
                      e(
                        a,
                        { size: "small", onClick: (c) => t(i.row.id) },
                        { default: n(() => [b("Изменить")]), _: 2 },
                        1032,
                        ["onClick"]
                      ),
                      e(
                        f,
                        { title: "Вы уверены?", onConfirm: (c) => l(i.row.id) },
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
          [[v, d.isLoading]]
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
      return (d, s) => {
        const t = T
        return (
          h(),
          P("div", Y, [
            e(
              t,
              { onClick: s[0] || (s[0] = (l) => o("create-user")) },
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
      const d = p,
        s = E(),
        t = x({}),
        l = x(!1)
      ;(() => {
        d.userId
          ? s.getUser(d.userId).then(({ data: u }) => {
              t.value = u.data
            })
          : (t.value = { email: "", first_name: "", last_name: "" })
      })()
      const _ = () => {
        ;(l.value = !0),
          d.userId
            ? s
                .updateUser(t.value)
                .then(() => {
                  ;(l.value = !1), o("confirm")
                })
                .catch(() => (l.value = !1))
            : s
                .createUser(t.value)
                .then(() => {
                  ;(l.value = !1), o("confirm")
                })
                .catch(() => (l.value = !1))
      }
      return (u, a) => {
        const f = O,
          m = j,
          v = T,
          i = G
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
                    i,
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
                                    a[0] || (a[0] = (c) => (t.value.email = c))
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
                                    a[1] || (a[1] = (c) => (t.value.first_name = c))
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
                                    a[2] || (a[2] = (c) => (t.value.last_name = c))
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
                              { type: "primary", loading: l.value, onClick: _ },
                              { default: n(() => [b("Подтвердить")]), _: 1 },
                              8,
                              ["loading"]
                            ),
                            e(
                              v,
                              { onClick: a[3] || (a[3] = (c) => o("close")) },
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
const oe = C(ae, [["__scopeId", "data-v-af679ae9"]]),
  se = { class: "users-page" },
  le = { class: "users-page__table-container" },
  re = U({
    __name: "UsersPage",
    setup(p) {
      const o = E(),
        d = { page: 1, per_page: 10 },
        s = x(!0),
        { close: t, open: l, options: r } = K({ component: oe }),
        _ = q({})
      ;(() => {
        Object.assign(_, d)
      })()
      const a = () => {
        ;(s.value = !0),
          o.getUsers({ ..._ }).then(() => {
            s.value = !1
          })
      }
      a()
      const f = () => {
          ;(r.attrs = {
            title: "Создание",
            onClose() {
              t()
            },
            onConfirm() {
              t(), a()
            }
          }),
            l()
        },
        m = (i) => {
          ;(r.attrs = {
            title: "Редактирование",
            userId: i,
            onClose() {
              t()
            },
            onConfirm() {
              t(), a()
            }
          }),
            l()
        },
        v = () => {
          a()
        }
      return (
        H(_, a),
        (i, c) => {
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
                  "onUpdate:page": c[0] || (c[0] = (w) => (_.page = w)),
                  per_page: _.per_page,
                  "onUpdate:per_page": c[1] || (c[1] = (w) => (_.per_page = w)),
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
