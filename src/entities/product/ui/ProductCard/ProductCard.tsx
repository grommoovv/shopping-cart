import { Link } from 'react-router-dom'
import cls from './ProductCard.module.scss'
import { FC } from 'react'
import { IProduct } from '../../model/types'
import { formatToUSD } from '../../../../shared/lib/format/formatToUSD'

// const imageURL =
//   'https://cdn.shopify.com/s/files/1/0710/8106/6810/products/late_afternoons_candle_rising_sun_0.jpg?v=1674140801&width=450&height='

interface ProductCardProps {
  data: IProduct
}

export const ProductCard: FC<ProductCardProps> = ({ data }) => {
  const { title, price, images } = data

  return (
    <>
      <div className={cls.card}>
        <Link className={cls.link} to={`/product/${title}`}>
          <div className={cls.view}>
            <img className={cls.image} src={images[0]} alt={title} />
            <div className={cls.backdrop}></div>
          </div>
          <div className={cls.details}>
            <div className={cls.name}>{title}</div>
            <div className={cls.price}>{formatToUSD.format(price)}</div>
          </div>
        </Link>
      </div>
    </>
  )
}
