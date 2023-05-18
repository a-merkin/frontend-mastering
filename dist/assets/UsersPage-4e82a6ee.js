import {
  d as x,
  r as L,
  o as h,
  c as I,
  a as e,
  E as M,
  u as P,
  w as k,
  b as E,
  e as n,
  f,
  t as y,
  g as U,
  h as T,
  i as z,
  j as $,
  k as B,
  l as N,
  v as V,
  _ as C,
  m as A,
  I as D,
  n as O,
  p as j,
  q as G,
  G as K,
  s as q,
  x as H
} from "./index-0c76ab76.js"
const J = x({
  __name: "TablePagination",
  props: { page: null, per_page: null, maxPage: null },
  emits: ["update:per_page", "update:page", "submit-pagination"],
  setup(c, { emit: s }) {
    const u = c,
      l = L(""),
      t = (a, r) => {
        s(a, r), s("submit-pagination"), (l.value = "")
      }
    return (a, r) => {
      const _ = M
      return (
        h(),
        I("div", null, [
          e(
            _,
            {
              background: "",
              layout: "prev, pager, next, jumper, sizes",
              "page-size": u.per_page,
              "page-count": u.maxPage,
              onCurrentChange: r[0] || (r[0] = (d) => t("update:page", d)),
              onSizeChange: r[1] || (r[1] = (d) => s("update:per_page", d))
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
  W = x({
    __name: "UsersListTable",
    props: { isLoading: { type: Boolean } },
    emits: ["edit-user", "delete-user"],
    setup(c, { emit: s }) {
      const u = c,
        l = P(),
        t = (r) => {
          s("edit-user", r)
        },
        a = (r) => {
          l.deleteUser(r).then(() => {
            s("delete-user")
          })
        }
      return (r, _) => {
        const d = z,
          o = $,
          v = B,
          p = N,
          b = V
        return k(
          (h(),
          E(
            p,
            {
              data: T(l).users,
              height: "100%",
              style: { width: "100%" },
              "row-style": { width: "100%" }
            },
            {
              default: n(() => [
                e(
                  d,
                  { label: "Фото", width: "180" },
                  {
                    default: n((i) => [
                      f("div", Q, [f("img", { src: i.row.avatar }, null, 8, R)])
                    ]),
                    _: 1
                  }
                ),
                e(
                  d,
                  { label: "Имя", width: "180" },
                  { default: n((i) => [f("p", null, y(i.row.first_name), 1)]), _: 1 }
                ),
                e(
                  d,
                  { label: "Фамилия", width: "180" },
                  { default: n((i) => [f("p", null, y(i.row.last_name), 1)]), _: 1 }
                ),
                e(
                  d,
                  { label: "Email", width: "180" },
                  { default: n((i) => [f("p", null, y(i.row.email), 1)]), _: 1 }
                ),
                e(
                  d,
                  { fixed: "right" },
                  {
                    default: n((i) => [
                      e(
                        o,
                        { size: "small", onClick: (m) => t(i.row.id) },
                        { default: n(() => [U("Изменить")]), _: 2 },
                        1032,
                        ["onClick"]
                      ),
                      e(
                        v,
                        { title: "Вы уверены?", onConfirm: (m) => a(i.row.id) },
                        {
                          reference: n(() => [
                            e(
                              o,
                              { size: "small", type: "danger" },
                              { default: n(() => [U("Удалить")]), _: 1 }
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
          [[b, u.isLoading]]
        )
      }
    }
  })
const X = C(W, [["__scopeId", "data-v-071522d7"]]),
  Y = { class: "actions" },
  Z = x({
    __name: "TableActions",
    emits: ["create-user"],
    setup(c, { emit: s }) {
      return (u, l) => {
        const t = $
        return (
          h(),
          I("div", Y, [
            e(
              t,
              { onClick: l[0] || (l[0] = (a) => s("create-user")) },
              { default: n(() => [U("Создать")]), _: 1 }
            )
          ])
        )
      }
    }
  })
const ee = C(Z, [["__scopeId", "data-v-c689f36d"]]),
  te = { class: "modal" },
  ae = { class: "modal__title" },
  ne = x({
    __name: "ModalUserEdit",
    props: { title: null, userId: null },
    emits: ["close", "confirm"],
    setup(c, { emit: s }) {
      const u = c,
        l = P(),
        t = L({}),
        a = L({ sumbitLoader: !1, formLoader: !1 })
      ;(() => {
        u.userId
          ? ((a.value.formLoader = !0),
            l
              .getUser(u.userId)
              .then(({ data: d }) => {
                ;(a.value.formLoader = !1), (t.value = d.data)
              })
              .catch(() => (a.value.formLoader = !1)))
          : (t.value = { email: "", first_name: "", last_name: "" })
      })()
      const _ = () => {
        ;(a.value.sumbitLoader = !0),
          u.userId
            ? l
                .updateUser(t.value)
                .then(() => {
                  ;(a.value.sumbitLoader = !1), s("confirm")
                })
                .catch(() => (a.value.sumbitLoader = !1))
            : l
                .createUser(t.value)
                .then(() => {
                  ;(a.value.sumbitLoader = !1), s("confirm")
                })
                .catch(() => (a.value.sumbitLoader = !1))
      }
      return (d, o) => {
        const v = O,
          p = j,
          b = $,
          i = G,
          m = V
        return (
          h(),
          E(
            T(D),
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
                f("div", te, [
                  f("p", ae, y(c.title), 1),
                  k(
                    (h(),
                    E(
                      i,
                      { onKeyup: A(_, ["enter"]) },
                      {
                        default: n(() => [
                          e(
                            p,
                            { label: "Почта" },
                            {
                              default: n(() => [
                                e(
                                  v,
                                  {
                                    modelValue: t.value.email,
                                    "onUpdate:modelValue":
                                      o[0] || (o[0] = (g) => (t.value.email = g))
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
                            p,
                            { label: "Имя" },
                            {
                              default: n(() => [
                                e(
                                  v,
                                  {
                                    modelValue: t.value.first_name,
                                    "onUpdate:modelValue":
                                      o[1] || (o[1] = (g) => (t.value.first_name = g))
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
                            p,
                            { label: "Фамилия" },
                            {
                              default: n(() => [
                                e(
                                  v,
                                  {
                                    modelValue: t.value.last_name,
                                    "onUpdate:modelValue":
                                      o[2] || (o[2] = (g) => (t.value.last_name = g))
                                  },
                                  null,
                                  8,
                                  ["modelValue"]
                                )
                              ]),
                              _: 1
                            }
                          ),
                          e(p, null, {
                            default: n(() => [
                              e(
                                b,
                                {
                                  type: "primary",
                                  loading: a.value.sumbitLoader,
                                  onClick: _
                                },
                                { default: n(() => [U(" Подтвердить ")]), _: 1 },
                                8,
                                ["loading"]
                              ),
                              e(
                                b,
                                { onClick: o[3] || (o[3] = (g) => s("close")) },
                                { default: n(() => [U("Отмена")]), _: 1 }
                              )
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      },
                      8,
                      ["onKeyup"]
                    )),
                    [[m, a.value.formLoader]]
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
const oe = C(ne, [["__scopeId", "data-v-8d33367e"]]),
  se = { class: "users-page" },
  le = { class: "users-page__table-container" },
  re = x({
    __name: "UsersPage",
    setup(c) {
      const s = P(),
        u = { page: 1, per_page: 10 },
        l = L(!0),
        { close: t, open: a, options: r } = K({ component: oe }),
        _ = q({})
      ;(() => {
        Object.assign(_, u)
      })()
      const o = () => {
        ;(l.value = !0),
          s.getUsers({ ..._ }).then(() => {
            l.value = !1
          })
      }
      o()
      const v = () => {
          ;(r.attrs = {
            title: "Создание",
            onClose() {
              t()
            },
            onConfirm() {
              t(), o()
            }
          }),
            a()
        },
        p = (i) => {
          ;(r.attrs = {
            title: "Редактирование",
            userId: i,
            onClose() {
              t()
            },
            onConfirm() {
              t(), o()
            }
          }),
            a()
        },
        b = () => {
          o()
        }
      return (
        H(_, o),
        (i, m) => {
          const g = ee,
            S = X,
            F = J
          return (
            h(),
            I("div", se, [
              f("div", le, [
                e(g, { onCreateUser: v }),
                e(S, { isLoading: l.value, onEditUser: p, onDeleteUser: b }, null, 8, [
                  "isLoading"
                ])
              ]),
              e(
                F,
                {
                  page: _.page,
                  "onUpdate:page": m[0] || (m[0] = (w) => (_.page = w)),
                  per_page: _.per_page,
                  "onUpdate:per_page": m[1] || (m[1] = (w) => (_.per_page = w)),
                  maxPage: T(s).usersMaxPage
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
const _e = C(re, [["__scopeId", "data-v-c9fef2da"]])
export { _e as default }
