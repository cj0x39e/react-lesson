const list = [
  {
    id: '1',
    img: 'http://localhost:3000/huawei.jpg',
    name: '华为 HUAWEI nova 5 Pro 前置3200万人像超级夜景4800万AI四摄',
    price: 2999.00,
    isSale: false,
    amount: 1,
    stock: 100,
    checked: false
  },
  {
    id: '2',
    img: 'http://localhost:3000/huawei.jpg',
    name: '华为 HUAWEI nova 5 Pro 前置3200万人像超级夜景4800万AI四摄',
    price: 2999.00,
    isSale: false,
    amount: 1,
    stock: 100,
    checked: false
  },
  {
    id: '3',
    img: 'http://localhost:3000/huawei.jpg',
    name: '华为 HUAWEI nova 5 Pro 前置3200万人像超级夜景4800万AI四摄',
    price: 2999.00,
    isSale: true,
    salePrice: 50,
    amount: 10,
    stock: 20,
    checked: false
  }
]

const getLsit = () => {
  let promise = new Promise((resovle, reject) => {
    setTimeout(() => {
      resovle(list)
    }, 1000)
  });

  return promise
}

export {
  getLsit
}
