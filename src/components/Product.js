
const Product = () => {
    return (
                <div>
                    <img style={{minWidth:100}} src="/images/pizza (3).png" alt=""/>
                    <div className="text-center">
                        <h2 className="text-lg font-bold py-2">Havana Special</h2>
                        <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Small</span>
                    
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <span>Rs.500 </span>
                        <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">Add</button>
                    </div>
                </div>
    )
}
export default Product;
