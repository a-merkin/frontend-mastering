import makeRequest from "../httpClient"

export const register = ({ username, email, password }) =>
  makeRequest({
    url: "/register/",
    method: "POST",
    data: {
      username,
      email,
      password
    }
  })
