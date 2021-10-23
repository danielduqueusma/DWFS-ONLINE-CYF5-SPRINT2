function sqrt (arrayList) {
  return arrayList.map((value, index, array) => {
    return Math.sqrt(value)
  })
}

function filterBy (arrayList, condition) {
  // if (condition === 'genero') {
  //   return arrayList.filter((value, index, array) => {
  //     return value === 'Balada'
  //   })
  // } else {
  //   return arrayList.filter((value, index, array) => {
  //     return value % 2 === 0
  //   })
  // }

  // return arrayList.filter((value, index, array) => {
  //   if (condition === 'genero') {
  //     return value === 'Balada'
  //   } else {
  //     return value % 2 === 0
  //   }
  // })

  return arrayList.filter((value, index, array) => {
    return condition === 'genero' ? value === 'Balada' : value % 2 === 0
  })
}

// export default sqrt
export {
  sqrt,
  filterBy
}

