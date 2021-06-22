import Product from '../components/Product'

const Products = () => {
   
    return (
        <div className="container mx-auto py-24">
            <h1 className="text-lg font-bold my-8">Products</h1>

            <div className="grid grid-cols-5 mu-8 gap-24">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    )
}

export default Products;
