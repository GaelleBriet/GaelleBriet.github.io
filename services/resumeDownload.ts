export const resumeDownload = () => {
  const link = document.createElement('a')
  link.href = '/CV_Gaelle_Briet.pdf'
  link.download = 'CV_Gaelle_Briet.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
