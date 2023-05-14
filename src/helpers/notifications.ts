export const showErrorMessage = (data) => {
  ElNotification.error({
    title: "Ошибка",
    message: data,
    showClose: true,
    duration: 4000
  })
}

export const showSuccessMessage = (data) => {
  ElNotification.success({
    title: "Успешно",
    message: data,
    showClose: true,
    duration: 4000
  })
}
