import {
  d as y,
  g as b,
  h as p,
  i as f,
  o as x,
  c as C,
  e as o,
  w as t,
  j as _,
  k as F,
  r as c,
  E as h,
  l as A,
  f as B,
  m as I,
  n as R,
  p as q
} from "./index-d92acd7d.js"
/* empty css                 */ /* empty css                  */ /* empty css                */ const j =
  y({
    __name: "AppAuth",
    setup(H) {
      const { handleLogin: v } = b(),
        s = p(),
        u = p(!1),
        a = f({}),
        w = f({
          password: [
            {
              required: !0,
              validator: (r, e, l) => {
                e ? l() : l(new Error("Введите пароль"))
              },
              trigger: "blur"
            }
          ],
          email: [
            {
              required: !0,
              validator: (r, e, l) => {
                e ? l() : l(new Error("Введите email"))
              },
              trigger: "blur"
            }
          ]
        }),
        m = (r) => {
          r &&
            r.validate((e) => {
              if (e)
                (u.value = !0),
                  v(a).then(() => {
                    c.push("/workplace"), (u.value = !1)
                  })
              else return !1
            })
        },
        g = () => {
          c.push("/register")
        }
      return (r, e) => {
        const l = h,
          i = A,
          E = B("Hide"),
          V = I,
          d = R,
          k = q
        return (
          x(),
          C("div", null, [
            o(
              k,
              {
                ref_key: "ruleFormRef",
                ref: s,
                class: "auth__form",
                "label-position": "top",
                model: a,
                rules: w,
                onKeyup: e[3] || (e[3] = F((n) => m(s.value), ["enter"]))
              },
              {
                default: t(() => [
                  o(
                    i,
                    { label: "Эл. почта", prop: "email" },
                    {
                      default: t(() => [
                        o(
                          l,
                          {
                            modelValue: a.email,
                            "onUpdate:modelValue": e[0] || (e[0] = (n) => (a.email = n))
                          },
                          null,
                          8,
                          ["modelValue"]
                        )
                      ]),
                      _: 1
                    }
                  ),
                  o(
                    i,
                    { label: "Пароль", prop: "password" },
                    {
                      default: t(() => [
                        o(
                          l,
                          {
                            modelValue: a.password,
                            "onUpdate:modelValue":
                              e[1] || (e[1] = (n) => (a.password = n)),
                            type: "password"
                          },
                          {
                            suffix: t(() => [
                              o(
                                d,
                                { link: "" },
                                {
                                  default: t(() => [
                                    o(V, null, { default: t(() => [o(E)]), _: 1 })
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ["modelValue"]
                        )
                      ]),
                      _: 1
                    }
                  ),
                  o(i, null, {
                    default: t(() => [
                      o(
                        d,
                        {
                          type: "primary",
                          loading: u.value,
                          onClick: e[2] || (e[2] = (n) => m(s.value))
                        },
                        { default: t(() => [_("Войти")]), _: 1 },
                        8,
                        ["loading"]
                      ),
                      o(d, { onClick: g }, { default: t(() => [_("Регистрация")]), _: 1 })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              },
              8,
              ["model", "rules"]
            )
          ])
        )
      }
    }
  })
export { j as default }
