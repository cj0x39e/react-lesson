/**
 * 购物车商品信息数据结构
 */
interface Goods {
  // 商品 ID
  id: string;

  // 商品名称
  name: string;

  // 商品价格
  price: number;

  // 是否优惠
  isSale: boolean;

  // 优惠价格
  salePrice?: number;

  // 商品图片
  img: string;

  // 商品数量
  amount: number;

  // 库存
  stock: number;
}

// 示例数据
const list: Goods[] = [
  {
    id: 'xefeiekfiakdfeijvefef',
    img: 'http://cdn.abc.com/td.jpg',
    name: '台灯',
    price: 100,
    isSale: false,
    amount: 10,
    stock: 100
  },
  {
    id: 'xefeiekfgsdeeijvefef',
    img: 'http://cdn.abc.com/td.jpg',
    name: '台灯',
    price: 100,
    isSale: false,
    amount: 10,
    stock: 100
  },
  {
    id: 'xefeiekfgesefasdvfef',
    img: 'http://cdn.abc.com/td.jpg',
    name: '电筒',
    price: 100,
    isSale: true,
    salePrice: 50,
    amount: 10,
    stock: 20
  }
]
