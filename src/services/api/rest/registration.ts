import makeRequest from "../httpClient"

export const registration = ({ username, email, password }) =>
  makeRequest({
    url: "/register/",
    method: "POST",
    data: {
      username,
      email,
      password
    }
  })
