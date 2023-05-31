import { ElNotification } from "element-plus"

type Notification = {
  type: string
  text: string
}

export const showErrorMessage = (notification: Notification) => {
  ElNotification.error({
    title: "Ошибка",
    message: `Server response: ${notification.text}`,
    showClose: true,
    duration: 5000
  })
}

export const showSuccessMessage = (notification: Notification) => {
  ElNotification.success({
    title: notification.type,
    message: notification.text,
    showClose: true,
    duration: 5000
  })
}
