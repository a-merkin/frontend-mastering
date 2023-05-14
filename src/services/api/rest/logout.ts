import makeRequest from "../httpClient"

export const logout = () =>
  makeRequest({
    url: "/logout/",
    method: "POST"
  })
