import Link from 'next/link';
import ProductList from '../components/ProductList';

export const metadata = {
    title: "PGM/Games page", 
    description: 'This is the Product page of the pc games market store'
};

export default function Product() {  // استخدم PascalCase
    return (
        <div>
            <ProductList />
        </div>
    );
}
