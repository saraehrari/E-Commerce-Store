
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Checkout({ cart = [], setCart }) {
    const[form, setForm] = useState( {fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    payment: "cash"},)
    const [order, setOrder] = useState(false)

  const removeProduct = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );


   if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    function HandleChange(e){
        setForm({...form,
             [e.target.name] : e.target.value})
    }
    setForm(true);
    
  return (

     <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
            ✓
          </div>

          <h1 className="mt-5 text-2xl font-bold text-gray-900">
            Thank You!
          </h1>

          <p className="mt-3 text-gray-500">
            Your demo order has been submitted successfully.
          </p>
   

        {cart.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <h2 className="text-xl font-semibold">
              Your cart is empty
            </h2>
            <p className="mt-2 text-gray-500">
              Add some products before checkout.
            </p>
            <Link
              to="/products"
              className="mt-5 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Shop Now
            </Link>
             <form onChange={}>


             </form>
          </div>
         
       ) : (
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4 md:col-span-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-20 object-contain"
                  />

                  <div className="min-w-0 flex-1">
                    <h2 className="font-semibold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="mt-2 font-bold text-blue-600">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  <button
                    onClick={() => removeProduct(item.id)}
                    className="text-sm font-medium text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">Order Summary</h2>

              <div className="mt-5 flex justify-between border-b pb-4 text-gray-600">
                <span>Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="flex justify-between py-4 text-lg font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                onClick={() =>
                  alert("Checkout is ready for the next step!")
                }
                className="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Place Order
              </button>

              <Link
                to="/products"
                className="mt-4 block text-center text-sm text-blue-600 hover:underline"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
        