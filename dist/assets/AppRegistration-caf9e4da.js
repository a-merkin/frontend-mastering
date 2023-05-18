import {
  d as E,
  g as y,
  h as m,
  i as f,
  o as C,
  q as b,
  w as l,
  e as a,
  j as w,
  k as F,
  r as _,
  E as q,
  l as x,
  n as P,
  p as R
} from "./index-62fbf858.js"
/* empty css                 */ /* empty css                  */ const N = E({
  __name: "AppRegistration",
  setup(h) {
    const { handleRegister: v } = y(),
      i = m(),
      r = f({}),
      d = m(!1),
      g = f({
        password: [
          {
            required: !0,
            validator: (s, e, o) => {
              e ? o() : o(new Error("Введите пароль"))
            },
            trigger: "blur"
          }
        ],
        password_confirmation: [
          {
            required: !0,
            validator: (s, e, o) => {
              e
                ? e !== r.password
                  ? o(new Error("Пароли не совпадают"))
                  : o()
                : o(new Error("Введите пароль"))
            },
            trigger: "blur"
          }
        ],
        email: [
          {
            required: !0,
            validator: (s, e, o) => {
              e ? o() : o(new Error("Введите email"))
            },
            trigger: "blur"
          }
        ]
      }),
      u = (s) => {
        s &&
          s.validate((e) => {
            if (e)
              (d.value = !0),
                v({ email: r.email, password: r.password }).then(() => {
                  ;(d.value = !1), _.push("/workplace")
                })
            else return !1
          })
      },
      V = () => {
        _.push("/auth")
      }
    return (s, e) => {
      const o = q,
        n = x,
        p = P,
        c = R
      return (
        C(),
        b(
          c,
          {
            ref_key: "ruleFormRef",
            ref: i,
            model: r,
            class: "auth__form",
            "label-position": "top",
            rules: g,
            onKeyup: e[4] || (e[4] = F((t) => u(i.value), ["enter"]))
          },
          {
            default: l(() => [
              a(
                n,
                { label: "Эл. почта", prop: "email" },
                {
                  default: l(() => [
                    a(
                      o,
                      {
                        modelValue: r.email,
                        "onUpdate:modelValue": e[0] || (e[0] = (t) => (r.email = t))
                      },
                      null,
                      8,
                      ["modelValue"]
                    )
                  ]),
                  _: 1
                }
              ),
              a(
                n,
                { label: "Пароль", prop: "password" },
                {
                  default: l(() => [
                    a(
                      o,
                      {
                        modelValue: r.password,
                        "onUpdate:modelValue": e[1] || (e[1] = (t) => (r.password = t)),
                        type: "password",
                        "show-password": !0
                      },
                      null,
                      8,
                      ["modelValue"]
                    )
                  ]),
                  _: 1
                }
              ),
              a(
                n,
                { label: "Подтверждение пароля", prop: "password_confirmation" },
                {
                  default: l(() => [
                    a(
                      o,
                      {
                        modelValue: r.password_confirmation,
                        "onUpdate:modelValue":
                          e[2] || (e[2] = (t) => (r.password_confirmation = t)),
                        type: "password",
                        "show-password": !0
                      },
                      null,
                      8,
                      ["modelValue"]
                    )
                  ]),
                  _: 1
                }
              ),
              a(n, null, {
                default: l(() => [
                  a(
                    p,
                    {
                      type: "primary",
                      loading: d.value,
                      onClick: e[3] || (e[3] = (t) => u(i.value))
                    },
                    { default: l(() => [w("Создать аккаунт")]), _: 1 },
                    8,
                    ["loading"]
                  ),
                  a(p, { onClick: V }, { default: l(() => [w("Отмена")]), _: 1 })
                ]),
                _: 1
              })
            ]),
            _: 1
          },
          8,
          ["model", "rules"]
        )
      )
    }
  }
})
export { N as default }
