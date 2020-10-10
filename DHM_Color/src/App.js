import React, { useState, useEffect } from 'react';

import apiRequest from './api/productApi';
import apiRequestPost from './api/postApi';
import apiRequestCt from './api/categoryApi';
import apiRequestCart from './api/cartApi';
import Routers from './routers'
import Swal from 'sweetalert2';

function App() {

  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [categorys, setCategorys] = useState([]);


  //Hien thi danh sach san pham
  //product
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log(error)
      }
    }
    getProducts();
  }, []);

  //posts
  useEffect(() => {
    const getPost = async () => {
      try {
        const { data } = await apiRequestPost.getAll();
        setPosts(data);

      } catch (error) {
        console.log(error)
      }
    }
    getPost();
  }, [])
  //category

  useEffect(() => {
    const getCategorys = async () => {
      try {
        const { data } = await apiRequestCt.getAll();
        setCategorys(data)
      } catch (error) {
        console.log(error)
      }
    }
    getCategorys()
  }, [])




  //productRemove
  const onHandleRemove = async (id) => {
    try {
      const newProducts = products.filter(product => product.id !== id);
      apiRequest.remove(id);

      Swal.fire({
        title: 'Bạn có muốn thực hiện?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          setProducts(newProducts);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  //postRemove
  const onHandleRemovePost = async (id) => {
    try {
      const newPosts = posts.filter(post => post.id !== id);
      apiRequestPost.remove(id);
      Swal.fire({
        title: 'Bạn có muốn thực hiện?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          setPosts(newPosts);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  //categoryRemove
  const onHandleRemoveCt = async (id) => {
    try {
      const newCategorys = categorys.filter(category => category.id !== id);
      apiRequestCt.remove(id);
      Swal.fire({
        title: 'Bạn có muốn thực hiện?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          setCategorys(newCategorys);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    } catch (error) {
      console.log(error)
    }
  }


  //productAdd
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
      if (data) {
        setProducts([...products, data]);
      }

    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  //postadd

  const onHandleAddP = async (post) => {
    try {
      const { data } = await apiRequestPost.create(post);
      if (data) {
        setPosts([...posts, data]);
      }
    } catch (error) {
      console.log(error)
    }
  }
  //catgoryAdd

  const onHandleAddCt = async (category) => {
    try {
      const { data } = await apiRequestCt.create(category);
      if (data) {
        setCategorys([...categorys, data]);
      }

    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  //update products
  const onHandleUpdate = async (updateProduct) => {
    try {
      apiRequest.update(updateProduct.id, updateProduct);
      const newProducts = products.map(product => (
        product.id === updateProduct.id ? updateProduct : product
      ));
      setProducts(newProducts);
    } catch (error) {
      console.log(error)
    }

  }
  //update cate
  const onHandleUpdateCt = async (updateCategory) => {
    try {
      apiRequestCt.update(updateCategory.id, updateCategory);
      const newCate = categorys.map(category => (
        category.id === updateCategory.id ? updateCategory : category
      ));
      setCategorys(newCate);
    } catch (error) {
      console.log(error)
    }

  }



  return (
    <div className="App">
      <Routers
        //product
        products={products}
        onRemove={onHandleRemove}
        onAdd={onHandleAdd}
        onUpdate={onHandleUpdate}
        //post
        posts={posts}
        onRemoveP={onHandleRemovePost}
        onAddP={onHandleAddP}
        //category
        categorys={categorys}
        onRemovect={onHandleRemoveCt}
        onAddCt={onHandleAddCt}
        onUpdateCt={onHandleUpdateCt}

      />

    </div>
  )

}
export default App;