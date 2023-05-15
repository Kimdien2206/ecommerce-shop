import Admin from './pages/admin/Admin.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from './pages/customer/Customer.js';
import Home from './pages/customer/Home.js';
import Catalog from './pages/customer/Catalog.js';
import Product from './pages/customer/Product.js';
import Cart from './pages/customer/Cart.js';
import Login from './pages/auth/Login.js';
import SignUp from './pages/auth/SignUp.js';
import Dashboard from './pages/admin/Dashboard.js';
import Order from './pages/admin/Order.js';
import ProductManagement from './pages/admin/ProductManagement.js';
import Collection from './pages/admin/Collection.js';
import Delivery from './pages/admin/Delivery.js';
import { ORDER_COMPLETED_STATE, ORDER_WAITING_STATE, RECEIPT_PAID_STATE, RECEIPT_UNPAID_STATE } from './constant/constant.js';
import Tag from './pages/admin/Tag.js';
import Receipt from './pages/admin/Receipt.js';
import Discount from './pages/admin/Discount.js';
import Policy from './pages/admin/Policy.js';
import Information from './pages/admin/Information.js';
import Feedback from './pages/admin/Feedback.js';
import Voucher from './pages/admin/Voucher.js';
import CustomerManagement from './pages/admin/CustomerManagement.js';
import Importing from './pages/admin/Importing.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route key={'admin'} path='/admin' element={<Admin />}>
          <Route key={'dashboard'} path='dashboard' index element={<Dashboard />} />
          <Route key={'order'} path='order'>
            <Route key={'order_waiting'} path='waiting' element={<Order state={ORDER_WAITING_STATE} />} />
            <Route key={'order_completed'} path='completed' element={<Order state={ORDER_COMPLETED_STATE} />} />
          </Route>
          <Route key={'product'} path='product'>
            <Route key={'collection'} path='collection' element={<Collection />} />
            <Route key={'product'} path='' element={<ProductManagement />} />
            <Route key={'tag'} path='tag' element={<Tag />} />
          </Route>
          <Route key={'delivery'} path='delivery' element={<Delivery />} />
          <Route key={'Receipt'} path='receipt'>
            <Route key={'paid'} path='paid' element={<Receipt state={RECEIPT_PAID_STATE} />} />
            <Route key={'unpaid'} path='unpaid' element={<Receipt state={RECEIPT_UNPAID_STATE} />} />
          </Route>
          <Route key={'delivery'} path='delivery' element={<Delivery />} />
          <Route key={'feedback'} path='feedback' element={<Feedback />} />
          <Route key={'discount'} path='discount' element={<Discount />} />
          <Route key={'voucher'} path='voucher' element={<Voucher />} />
          <Route key={'policy'} path='policy' element={<Policy />} />
          <Route key={'customer-management'} path='customer-management' element={<CustomerManagement />}></Route>
          <Route key={'importing'} path='importing' element={<Importing />}></Route>
        </Route>
        <Route key={'customer'} path='/' element={<Customer />}>
          <Route key={'home'} index element={<Home />}></Route>
          <Route key={'catalog'} path='catalog' element={<Catalog />}></Route>
          <Route key={'product'} path='product/:id' element={<Product />}></Route>
          <Route key={'cart'} path='cart' element={<Cart />}></Route>
          <Route key={'login'} path='login' element={<Login />}></Route>
          <Route key={'signup'} path='signup' element={<SignUp />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
