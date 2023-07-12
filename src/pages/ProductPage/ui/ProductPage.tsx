import { useParams } from 'react-router'
import { products } from '../../../products'
import cls from './ProductPage.module.scss'

export const ProductPage = () => {
  const { title } = useParams()

  const data = products.filter((el) => el.title === title)[0]

  console.log(data)

  return (
    <>
      <div className={cls.page}>
        <div className={cls.container}>
          <div className={cls.product}>
            <div className={cls.media}>
              <img className={cls.image} src={data.images[0]} alt='' />
            </div>
            <div className={cls.details}></div>
          </div>
        </div>
      </div>
    </>
  )
}
