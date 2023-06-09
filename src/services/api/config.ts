import { useAppStore } from "@/store/"
import { showErrorMessage, showSuccessMessage } from "@/helpers/notifications"
import axios from "axios"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCookie(name: string) {
  const matches = document.cookie.match(
    // eslint-disable-next-line security/detect-non-literal-regexp
    new RegExp("(?:^|; )" + name.replace(/([.$?*|{}()[]\\\/\+^])/g, "\\$1") + "=([^;]*)")
  )
  return matches ? decodeURIComponent(matches[1]) : undefined
}

const csrfHeader = { "X-CSRFToken": getCookie("csrftoken") }

const setToken = (newToken: string) => {
  axios.defaults.headers.common["Authorization"] = newToken ? `Token ${newToken}` : ""
  newToken ? localStorage.setItem("token", newToken) : clearToken()
}

const clearToken = () => {
  localStorage.removeItem("token")
}

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL

axios.interceptors.response.use(
  (response) => {
    const mapMessages = {
      post: "Данные успешно сохранены.",
      delete: "Данные успешно удалены.",
      patch: "Данные успешно изменены.",
      get: "Данные успешно получены."
    }
    showSuccessMessage({
      type: response.config.method,
      text: mapMessages[response.config.method]
    })

    return response
  },
  (error) => {
    console.log(error)
    showErrorMessage({
      type: error.config.method,
      text: error.response.data.error
    })

    if (error.response.status === 401) {
      clearToken()
      useAppStore().handleLogout()
    }

    return Promise.reject(error)
  }
)

export default {
  csrfHeader,
  setToken
}
