import makeRequest from "../httpClient"

export const login = ({ username, email, password }) =>
  makeRequest({
    url: "/login/",
    method: "POST",
    data: {
      username,
      email,
      password
    }
  })
