import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Cart.css'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineCloseCircle, AiOutlineMinus } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {

  const { state: { cart }, dispatch } = useContext(CartContext)

  console.log(cart)

  const remove_notify = () => toast("Item Remove From Cart")

  const navigate = useNavigate()

  const handleNavigate = (id) =>{
    navigate(`/singleproduct/${id}`)
  }


  let totalPrice = 0;

  for(const ca of cart){
    totalPrice += ca.proTotalPrice
  }

  return (

    <div className="cart_main_container">
      <div className="cart_sub_container">
        <h1 className="cart_title">CART</h1>
        <div className="cart_container">

          <table className="cart_table">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>

            {
              cart.length < 1 ? (
                <tbody key="not-found">
                  <tr>
                    <td style={{ padding: "30px" }} colSpan={5} align='center' className="product_img">
                      Cart is Empty<br /><br />
                      <Link style={{ backgroundColor: "green", color: "#fff", padding: "10px 40px", borderRadius: "5px" }} to="/">Continue Shopping</Link>
                    </td>
                  </tr>
                </tbody>
              ) : (
                cart.map((pro) => (
                  <tbody key={pro.id}>
                    <tr>
                      <td className="product_img">
                        <div className='product-img-con'>
                          <img src={pro.image} alt="" />
                        </div>
                      </td>
                      <td className="product_name" onClick={() => handleNavigate(pro.id)}>
                         {pro.title}
                      </td>
                      <td className="product_price">${pro.price}</td>
                      <td>
                        <div className="quantity-changer-container">
                          <button className="decrease" onClick={() =>{
                                      dispatch({
                                          type: "DECRESS_QTY",
                                          proId: pro.id
                                        })
                                      }}>
                            <AiOutlineMinus />
                          </button>
                          <input
                            type="text"
                            className="quantity"
                            name="value"
                            value={pro.qty}
                            min="1"
                            max="10"
                          />
                          <button className="increase" onClick={() =>{
                                    dispatch({
                                        type: "INCRESS_QTY",
                                        proId: pro.id
                                      })
                                    }}>
                             <AiOutlinePlus />
                          </button>
                        </div>
                      </td>
                      <td>${pro.proTotalPrice.toFixed(2)}</td>
                      <td className="remove_product_icon">
                        <AiOutlineCloseCircle className='remove_ico' onClick={() =>{
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            id: pro.id
                          })
                          remove_notify()
                        }}/>
                      </td>
                    </tr>
                  </tbody>
                ))
              )
            }
          </table>

          <ToastContainer position="top-right" autoClose={500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>

          {/* Cart Table Small Screen  */}
            <div className="small_screen_cart_table_container">
                <table border="1" className="small_screen_cart_table">
                    {
                      cart.length < 1 ? (
                        <tbody>
                           <tr>
                              <td style={{textAlign: "center", padding: "50px"}} colSpan={2} rowSpan={5}>Your Cart is Empty<br /><br />
                              <Link style={{ backgroundColor: "green", color: "#fff", padding: "10px 15px", borderRadius: "5px", fontSize: "14px" }} to="/">Continue Shopping</Link></td>
                           </tr>
                        </tbody>
                      ) :
                      cart.map((item) => (
                        <tbody>
                        <tr>
                            <td colspan="2" className="remove_product_icon"><AiOutlineCloseCircle className='remove_ico' onClick={() => {
                                dispatch({
                                  type: "REMOVE_FROM_CART",
                                  id: item.id
                                })
                                remove_notify()
                            }}/></td>
                        </tr>
                        <tr>
                            <td colspan="2" className="product_img">
                                <div className='product-img-con'>
                                 <img src={item.image} alt=""/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Product</td>
                            <td className="product_name" onClick={() => handleNavigate(item.id)}>{item.title}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td className="product_price">${item.price}</td>
                        </tr>
                        <tr>
                            <td>Quantity</td>
                            <td className="quantity_cc">
                                  <div className="quantity-changer-container">
                                      <button className="decress" onClick={() =>{
                                        dispatch({
                                          type: "DECRESS_QTY",
                                          proId: item.id
                                        })
                                      }}><AiOutlineMinus /></button>
                                      <input type="text" className="quantity" name="value" value={item.qty} min="1" max="10" readOnly/>
                                      <button className="incress" onClick={() =>{
                                        dispatch({
                                          type: "INCRESS_QTY",
                                          proId: item.id
                                        })
                                      }}><AiOutlinePlus /></button>
                                  </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Subtotal</td>
                            <td className="product_price">${item.proTotalPrice.toFixed(2)}</td>
                        </tr>
                    </tbody>
                      ))
                    }
                </table>
            </div>    
            {/* Small screen Cart End  */}



          <table className="cart_total">
            <thead>
              <tr>
                <th colspan="2">CART TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>${totalPrice === 0 ? '0.00' : totalPrice}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Flat rate
                  Shipping to <b>Sri Lanka.</b> <br />Change Address</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>${totalPrice === 0 ? '0.00' : totalPrice}</td>
              </tr>
              <tr>
                <td colspan="2">Have a coupon?</td>
              </tr>
              <tr>
                <td colspan="2"><button>Checkout</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}
export default Cart