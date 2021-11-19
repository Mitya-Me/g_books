export const slicedAndJoinedArr = (arr) => {
   return arr.slice(0, 4).map(el => el.slice(0, 40)).join()
}