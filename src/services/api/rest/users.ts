import makeRequest from "../httpClient"

export const getUsers = (params) =>
  makeRequest({
    url: "/users/",
    method: "GET",
    params
  })

export const getUser = (id) =>
  makeRequest({
    url: `/users/${id}`,
    method: "GET"
  })

export const createUser = (data) =>
  makeRequest({
    url: "/users/",
    method: "POST",
    data
  })

export const updateUser = (data) =>
  makeRequest({
    url: `/users/${data.id}`,
    method: "PATCH",
    data
  })

export const deleteUser = (id) =>
  makeRequest({
    url: `/users/${id}`,
    method: "DELETE"
  })
