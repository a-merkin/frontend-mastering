import makeRequest from "../httpClient"

export const getUsers = (params) =>
  makeRequest({
    url: "/users/",
    method: "GET",
    params
  })

export const addUser = (data) =>
  makeRequest({
    url: "/users/",
    method: "GET",
    data
  })

export const updateUser = (id, data) =>
  makeRequest({
    url: `/users/${id}`,
    method: "GET",
    data
  })

 export const deleteUser = (id) =>
  makeRequest({
    url: `/users/${id}`,
    method: "DELETE",
  }) 
