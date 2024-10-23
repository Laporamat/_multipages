import "./Carts.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Carts({ carts, setCarts }) {
  return (
    <div className="carts-container">
      <div className="carts-item-container">
        {carts.map((cart) => {
          console.log(cart.thumbnailUrl);
          return (
            <Card style={{ width: "18rem" }} key={cart.id}>
              <Card.Img variant="top" src={cart.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{cart.title}</Card.Title>
                <Card.Text>
                  <b>${cart.price.toFixed(2)}</b>
                </Card.Text>

                <Button
                  variant="outline-danger"
                  onClick={() => {
                    setCarts(carts.filter((c) => c.id !== cart.id));
                  }}
                >
                  Remove from Cart
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      {/* Cart Summary Section */}
      <div className="cart-summary-container">
        <h4 className="cart-summary">
          Products: <span className="cart-items">{carts.length} items</span> - 
          Total price: <span className="cart-total-price">${carts.reduce((prev, cart) => {
            return prev + cart.price;
          }, 0).toFixed(2)}</span>
        </h4>
        <button className="checkout-button">Checkout <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
  <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg></button>
      </div>
    </div>
  );
}

export default Carts;
