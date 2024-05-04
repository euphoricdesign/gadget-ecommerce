export async function getDataProducts() {
    const res = await fetch('http://localhost:3001/products')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

export async function getProductById(id) {
    const products = await getDataProducts()
    const product = products.find(product => product.id.toString() === id)

    if (!product) throw Error("Producto no encontrado")

    return product
}