import {
  d as U,
  h as y,
  o as h,
  c as E,
  e,
  H as S,
  I as P,
  J as F,
  q as $,
  w as n,
  a as g,
  t as x,
  j as b,
  u as I,
  K as M,
  n as T,
  L as N,
  M as z,
  N as B,
  k as O,
  O as A,
  E as D,
  l as j,
  p as K,
  P as G,
  i as q,
  Q as H
} from "./index-62fbf858.js"
/* empty css                 */ /* empty css                     */ /* empty css                  */ import { _ as C } from "./_plugin-vue_export-helper-c27b6911.js"
const J = U({
  __name: "TablePagination",
  props: { page: null, per_page: null, maxPage: null },
  emits: ["update:per_page", "update:page", "submit-pagination"],
  setup(p, { emit: a }) {
    const c = p,
      s = y(""),
      t = (i, l) => {
        a(i, l), a("submit-pagination"), (s.value = "")
      }
    return (i, l) => {
      const _ = S
      return (
        h(),
        E("div", null, [
          e(
            _,
            {
              background: "",
              layout: "prev, pager, next, jumper, sizes",
              "page-size": c.per_page,
              "page-count": c.maxPage,
              onCurrentChange: l[0] || (l[0] = (u) => t("update:page", u)),
              onSizeChange: l[1] || (l[1] = (u) => a("update:per_page", u))
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
    setup(p, { emit: a }) {
      const c = p,
        s = P(),
        t = (l) => {
          a("edit-user", l)
        },
        i = (l) => {
          s.deleteUser(l).then(() => {
            a("delete-user")
          })
        }
      return (l, _) => {
        const u = M,
          o = T,
          f = N,
          m = z,
          v = B
        return F(
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
                  { default: n((r) => [g("p", null, x(r.row.first_name), 1)]), _: 1 }
                ),
                e(
                  u,
                  { label: "Фамилия", width: "180" },
                  { default: n((r) => [g("p", null, x(r.row.last_name), 1)]), _: 1 }
                ),
                e(
                  u,
                  { label: "Email", width: "180" },
                  { default: n((r) => [g("p", null, x(r.row.email), 1)]), _: 1 }
                ),
                e(
                  u,
                  { fixed: "right" },
                  {
                    default: n((r) => [
                      e(
                        o,
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
                              o,
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
    setup(p, { emit: a }) {
      return (c, s) => {
        const t = T
        return (
          h(),
          E("div", Y, [
            e(
              t,
              { onClick: s[0] || (s[0] = (i) => a("create-user")) },
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
  oe = U({
    __name: "ModalUserEdit",
    props: { title: null, userId: null },
    emits: ["close", "confirm"],
    setup(p, { emit: a }) {
      const c = p,
        s = P(),
        t = y({}),
        i = y(!1)
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
                ;(i.value = !1), a("confirm")
              })
            : s.createUser(t.value).then(() => {
                ;(i.value = !1), a("confirm")
              })
      }
      return (u, o) => {
        const f = D,
          m = j,
          v = T,
          r = K
        return (
          h(),
          $(
            I(A),
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
                  g("p", ne, x(p.title), 1),
                  e(
                    r,
                    { onKeyup: O(_, ["enter"]) },
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
                                    o[0] || (o[0] = (d) => (t.value.email = d))
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
                                    o[1] || (o[1] = (d) => (t.value.first_name = d))
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
                                    o[2] || (o[2] = (d) => (t.value.last_name = d))
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
                              { onClick: o[3] || (o[3] = (d) => a("close")) },
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
const ae = C(oe, [["__scopeId", "data-v-ca583777"]]),
  se = { class: "users-page" },
  le = { class: "users-page__table-container" },
  re = U({
    __name: "UsersPage",
    setup(p) {
      const a = P(),
        c = { page: 1, per_page: 10 },
        s = y(!0),
        { close: t, open: i, options: l } = G({ component: ae }),
        _ = q({})
      ;(() => {
        Object.assign(_, c)
      })()
      const o = () => {
        ;(s.value = !0),
          a.getUsers({ ..._ }).then(() => {
            s.value = !1
          })
      }
      o()
      const f = () => {
          ;(l.attrs = {
            title: "Создание",
            onClose() {
              t()
            },
            onConfirm() {
              t(), o()
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
              t(), o()
            }
          }),
            i()
        },
        v = () => {
          o()
        }
      return (
        H(_, o),
        (r, d) => {
          const k = ee,
            L = X,
            V = J
          return (
            h(),
            E("div", se, [
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
                  maxPage: I(a).usersMaxPage
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
const pe = C(re, [["__scopeId", "data-v-c9fef2da"]])
export { pe as default }
