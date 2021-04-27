function Product({ pageContext }) {
  const { product } = pageContext;
  return (
    <div>
      Name: {product.name}
      Price: {product.price}
      Description: {product.description}
    </div>
  );
}
