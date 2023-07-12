import { ProductCard } from '../../../entities/product/ui/ProductCard/ProductCard'
import { products } from '../../../products'
import cls from './HomePage.module.scss'

export const HomePage = () => {
  return (
    <>
      <div className={cls.page}>
        <div className={cls.container}>
          <ul className={cls.list}>
            {products.map((el) => (
              <li className={cls.element}>
                <ProductCard data={el} key={el.id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
