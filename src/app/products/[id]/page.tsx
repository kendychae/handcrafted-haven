
import type { Metadata } from 'next';
import ProductDetailClient from './ProductDetailClient';

interface Props {
  params: Promise<{ id: string }>;
}



export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  return <ProductDetailClient productId={id} />;
}
