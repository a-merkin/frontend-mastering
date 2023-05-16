export const showErrorMessage = (notification: { type: string; text: string }) => {
  ElNotification.error({
    title: "Ошибка",
    message: `Server response: ${notification.text}`,
    showClose: true,
    duration: 4000
  })
}

export const showSuccessMessage = (notification: { type: string; text: string }) => {
  ElNotification.success({
    title: notification.type,
    message: notification.text,
    showClose: true,
    duration: 4000
  })
}
