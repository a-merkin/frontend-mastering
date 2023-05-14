import makeRequest from "../httpClient"

export const login = (data) =>
  makeRequest({
    url: "/login/",
    method: "POST",
    data
  })
