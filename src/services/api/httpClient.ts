import axios from "axios"
import config from "./config"

const baseHeaders = {
  ...config.csrfHeader
}

export interface IRequest {
  url: string
  method?: string
  responseType?: string
  headers?: any
  params?: object
  data?: any
  paramsSerializer?: (params: object | string) => string
}

const makeRequest = ({ url = "/", method = "get", headers, params, data }: IRequest) =>
  axios({
    url,
    method,
    responseType: "json",
    headers: { ...baseHeaders, ...headers },
    params,
    data
  })

export default makeRequest
