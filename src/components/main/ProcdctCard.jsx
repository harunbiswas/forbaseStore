export default function ProductCard({ data }) {
  const srcChange = (e) => {
    e.target.src = data.hoverImg;
  };
  const srcRevert = (e) => {
    e.target.src = data.img;
  };

  return (
    <div className="product-card">
      <div className="image">
        <img
          onMouseOver={srcChange}
          onMouseOut={srcRevert}
          src={data && data.img}
          alt={data && data.title}
        />
      </div>
      <div className="content">
        <a href="/">
          <h4>{data && data.title}</h4>
        </a>
        <p className="price">${data.price || "00"}</p>
      </div>
      {data.preOrder && <p className="pre-order">Pre-Order</p>}
    </div>
  );
}
