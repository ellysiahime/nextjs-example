import Image from "next/image";
import { products } from '@/app/product-data';

export default function ProductDetailPage({params} : {params: {id: string}}) {
  const product = products.find((p) => p.id === params.id);
  return (
    <>
      <h1>{product!.name}</h1>
      <p>Price: ${product!.price}</p>
      <Image src={'/' + product!.imageUrl}
                  alt={product!.name}
                  width={150}
                  height={150} />
      <h3>Description</h3>
      <p>{product!.description}</p>
    </>
  )
}