import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

export default function ShopPage(){
  return (
    <div>
      <h1 className="text-3xl font-bold">Shop</h1>
      <div className="product-grid mt-6">
        {products.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
