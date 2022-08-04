export default function SubscribeForm() {
  return (
    <div className="subscribe-form">
      <div className="container">
        <p className="text">
          Sign up for exclusive offers and get 10% off your first order
        </p>
        <form action="">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter email address"
          />
          <button type="submit"> subscribe</button>
        </form>
      </div>
    </div>
  );
}
