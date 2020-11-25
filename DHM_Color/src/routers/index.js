import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import DetailProduct from '../pages/views/Admin/DetailProduct';
import AddProduct from '../pages/views/Admin/AddProduct';
import Category from '../pages/views/Admin/Category';
import Post from '../pages/views/Admin/Post';
import AddCategory from '../pages/views/Admin/AddCategory';
import Categorys from '../pages/views/Main/Categorys';
import EditProduct from '../pages/views/Admin/EditProduct';
import EditCategory from '../pages/views/Admin/EditCategory';
import AddPost from '../pages/views/Admin/AddPost';
import EditPost from '../pages/views/Admin/EditPost';
import Contacts from '../pages/views/Admin/Contact';
import { DataProvider } from '../pages/views/Main/ActionCart';
import User from '../pages/views/Admin/User';
import Size from '../pages/views/Admin/Size';
import Color from '../pages/views/Admin/Color';
import AddSize from '../pages/views/Admin/AddSize';
import AddColor from '../pages/views/Admin/AddColor';
import EditSize from '../pages/views/Admin/EditSize';
import EditColor from '../pages/views/Admin/EditColor';
//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import Introduce from '../pages/views/Main/Introduce';
import Contact from '../pages/views/Main/Contact';
import ProductDetail from '../pages/views/Main/ProductDetail';
import Posts from '../pages/views/Main/Post';
import Search from '../pages/views/Main/Search';
import Login from '../pages/views/Main/Login';
import Register from '../pages/views/Main/Register';
import ForgotPass from '../pages/views/Main/ForgotPass';
import Pay from '../pages/views/Main/Pay';
import Cart from '../pages/views/Main/Cart';
import PostDetail from '../pages/views/Main/PostDetail';







const Routers = ({ products, onRemove, onAdd, onUpdate, users, sizes, onRemoveS, onUpdateS, onAddS, colors, onRemoveColor, onAddColor, onUpdateColor, posts, onRemoveP, onAddP, onUpdatePs, categorys, onUpdateCt, onRemovect, onAddCt }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleAdd = (id) => {
        onAdd(id)
    }
    const onHandleRemoveCt = (id) => {
        onRemovect(id);
    }
    const onHandleAddCt = (id) => {
        onAddCt(id)
    }
    return (
        <DataProvider>
            <Router>
                <Switch>
                    <Route path="/admin/:path?/:path?/:path?" exact>
                        <LayoutAdmin>
                            <Switch>
                                {/* product */}
                                <Route path='/admin' exact>
                                    <Dashboard products={products} categorys={categorys} posts={posts} />
                                </Route>
                                <Route path='/admin/products'>
                                    <ProductsManager products={products} categorys={categorys} onRemove={onHandleRemove} />
                                </Route>
                                <Route path="/admin/product/add" >
                                    <AddProduct categorys={categorys} onAdd={onHandleAdd} />
                                </Route>
                                <Route path="/admin/edit/:id" >
                                    <EditProduct products={products} categorys={categorys} onUpdate={onUpdate} />
                                </Route>
                                <Route path="/admin/detail/:id" >
                                    <DetailProduct products={products} />
                                </Route>
                                {/* users */}
                                <Route path='/admin/users'>
                                    <User users={users} />
                                </Route>
                                {/* size */}
                                <Route path='/admin/sizes'>
                                    <Size sizes={sizes} onRemoveS={onRemoveS} />
                                </Route>
                                <Route path='/admin/size/add'>
                                    <AddSize sizes={sizes} onAddS={onAddS} />
                                </Route>
                                <Route path='/admin/size/edit/:id'>
                                    <EditSize sizes={sizes} onUpdateS={onUpdateS} />
                                </Route>
                                {/* color */}
                                <Route path='/admin/colors'>
                                    <Color colors={colors} onRemoveColor={onRemoveColor} />
                                </Route>
                                <Route path='/admin/color/add'>
                                    <AddColor colors={colors} onAddColor={onAddColor} />
                                </Route>
                                <Route path='/admin/color/edit/:id'>
                                    <EditColor colors={colors} onUpdateColor={onUpdateColor} />
                                </Route>
                                {/* post */}
                                <Route path='/admin/posts'>
                                    <Post posts={posts} onRemoveP={onRemoveP} />
                                </Route>
                                <Route path='/admin/post/add'>
                                    <AddPost onAddP={onAddP} />
                                </Route>
                                <Route path='/admin/post/edit/:id'>
                                    <EditPost posts={posts} onUpdatePs={onUpdatePs} />
                                </Route>
                                {/* category */}
                                <Route path='/admin/categorys'>
                                    <Category categorys={categorys} onRemovect={onHandleRemoveCt} />
                                </Route>
                                <Route path='/admin/category/add'>
                                    <AddCategory onAddCt={onHandleAddCt} />
                                </Route>
                                <Route path='/admin/category/edit/:id'>
                                    <EditCategory categorys={categorys} onUpdateCt={onUpdateCt} />
                                </Route>
                                {/* contact */}
                                <Route path='/admin/contacts'>
                                    <Contacts />
                                </Route>

                            </Switch>
                        </LayoutAdmin>
                    </Route>

                    <Route>
                        <LayoutMain>
                            <Switch>
                                <Route path="/" exact>
                                    <Home products={products} />
                                </Route>

                                <Route path="/sanpham">
                                    <About products={products} categorys={categorys} />
                                </Route>
                                <Route path="/product/:id" exact>
                                    <ProductDetail products={products} />
                                </Route>
                                <Route path="/gioithieu">
                                    <Introduce />
                                </Route>
                                <Route path="/lienhe">
                                    <Contact />
                                </Route>
                                <Route path="/cate/:id">
                                    <Categorys categorys={categorys} products={products} />
                                </Route>
                                <Route path="/baiviet">
                                    <Posts posts={posts} />
                                </Route>
                                <Route path="/post/:id">
                                    <PostDetail posts={posts} exact />
                                </Route>
                                <Route path="/search/:ten_sp">
                                    <Search products={products} />
                                </Route
                                >
                                <Route component={Login} path="/login" ></Route>

                                <Route component={Register} path="/register"></Route>

                                <Route path="/forgotpass">
                                    <ForgotPass />
                                </Route>
                                {/* Cart */}
                                <Route path="/cart">
                                    <Cart />
                                </Route>
                                {/* Pay */}
                                <Route path='/pay'>
                                    <Pay />
                                </Route>
                            </Switch>
                        </LayoutMain>
                    </Route>
                </Switch>
            </Router>
        </DataProvider>
    )
}

Routers.propTypes = {

}

export default Routers
