import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCart';

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
      <Link href="/users">Users</Link>
      <ProductCard/>
    </main>
  )
}
