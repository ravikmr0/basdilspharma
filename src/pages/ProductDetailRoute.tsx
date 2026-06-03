import { Navigate, useParams } from 'react-router-dom';
import { ProductDetailPage } from './ProductDetailPage';
import { products } from '../data/catalog';

export function ProductDetailRoute() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return <ProductDetailPage product={product} />;
}
