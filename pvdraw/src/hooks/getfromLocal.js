function getFromLocal(key) {
   let currentStoredData=JSON.parse(localStorage.getItem(`${key}`))
   return currentStoredData
}
export default getFromLocal