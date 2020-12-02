import React, { useState, useEffect } from 'react';

import apiRequest from './api/productApi';
import apiRequestCt from './api/categoryApi';
import apiRequestCart from './api/cartApi';
import apiRequestPs from './api/postApi';
import apiRequestSize from './api/sizeApi';
import apiRequestColor from './api/colorApi';
import userApi from './api/userApi'
import Routers from './routers'
import Swal from 'sweetalert2';
import { history } from "./helpers/history";

function App() {



  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [users, setUsers] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);


  //Hien thi danh sach san pham
  //product
  // useEffect(() => {
  //   const getProducts = async () => {
  //     try { 
  //       const { data } = await apiRequest.getAll();
  //       setProducts(data);
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getProducts();
  // }, []);

  //posts
  useEffect(() => {
    const getPost = async () => {
      try {
        const { data } = await apiRequestPs.getAll();
        setPosts(data);

      } catch (error) {
        console.log(error)
      }
    }
    getPost();
  }, [])
  //category

  // useEffect(() => {
  //   const getCategorys = async () => {
  //     try {
  //       const { data } = await apiRequestCt.getAll()
  //         .then(res => {
  //           setCategorys(data)
  //         })

  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getCategorys()
  // }, [])

  //size
  // useEffect(() => {
  //   const getSizes = async () => {
  //     try {
  //       const { data } = await apiRequestSize.getAll();
  //       setSizes(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getSizes()
  // }, [])

  //user
  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await userApi.getAll();
        setUsers(data)
      } catch (error) {
        console.log(error)
      }
    }
    getUsers()
  }, [])



  //Color
  // useEffect(() => {
  //   const getColors = async () => {
  //     try {
  //       const { data } = await apiRequestColor.getAll();
  //       setColors(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getColors()
  // }, [])


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
      apiRequestPs.remove(id);
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
  // const onHandleRemoveCt = async (id) => {
  //   try {
  //     const newCategorys = categorys.filter(category => category.id !== id);
  //     apiRequestCt.remove(id);
  //     Swal.fire({
  //       title: 'Bạn có muốn thực hiện?',
  //       text: "You won't be able to revert this!",
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       confirmButtonText: 'Yes, delete it!'
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         setCategorys(newCategorys);
  //         Swal.fire(
  //           'Deleted!',
  //           'Your file has been deleted.',
  //           'success'
  //         )
  //       }
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // Size Remove
  // const onHandleRemoveS = async (id) => {
  //   try {
  //     const newSizes = sizes.filter(size => size.id !== id);
  //     apiRequestSize.remove(id);
  //     Swal.fire({
  //       title: 'Bạn có muốn thực hiện?',
  //       text: "You won't be able to revert this!",
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       confirmButtonText: 'Yes, delete it!'
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         setSizes(newSizes);
  //         Swal.fire(
  //           'Deleted!',
  //           'Your file has been deleted.',
  //           'success'
  //         )
  //       }
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // Color Remove
  // const onHandleRemoveColor = async (id) => {
  //   try {
  //     const newColors = colors.filter(color => color.id !== id);
  //     apiRequestColor.remove(id);
  //     Swal.fire({
  //       title: 'Bạn có muốn thực hiện?',
  //       text: "You won't be able to revert this!",
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       confirmButtonText: 'Yes, delete it!'
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         setColors(newColors);
  //         Swal.fire(
  //           'Deleted!',
  //           'Your file has been deleted.',
  //           'success'
  //         )
  //       }
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

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
      const { data } = await apiRequestPs.create(post);
      if (data) {
        setPosts([...posts, data]);
      }
    } catch (error) {
      console.log(error)
    }
  }
  //catgoryAdd

  // const onHandleAddCt = async (category) => {
  //   try {

  //     const { data } = await apiRequestCt.create(category)
  //       .then(res => {
  //         if (data) {
  //           setCategorys(
  //             {
  //               id: res.data.id,
  //               name: res.data.name,
  //               status: res.data.status,
  //               createdate: res.data.creatdate,
  //               createby: null
  //             }
  //           );
  //         }
  //       });


  //   } catch (error) {
  //     console.log('failed to request API: ', error)
  //   }
  // }

  //Size Add
  // const onHandleAddS = async (size) => {
  //   try {
  //     const { data } = await apiRequestSize.create(size);
  //     if (data) {
  //       setSizes([...sizes, data]);
  //     }

  //   } catch (error) {
  //     console.log('failed to request API: ', error)
  //   }
  // }

  //Color Add
  // const onHandleAddColor = async (color) => {
  //   try {
  //     const { data } = await apiRequestColor.create(color);
  //     if (data) {
  //       setColors([...colors, data]);
  //     }

  //   } catch (error) {
  //     console.log('failed to request API: ', error)
  //   }
  // }
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
  // const onHandleUpdateCt = async (updateCategory) => {
  //   try {
  //     apiRequestCt.update(updateCategory.id, updateCategory);
  //     const newCate = categorys.map(category => (
  //       category.id === updateCategory.id ? updateCategory : category
  //     ));
  //     setCategorys(newCate);
  //   } catch (error) {
  //     console.log(error)
  //   }

  // }

  //update post

  const onHandleUpdatePs = async (updatePost) => {
    try {
      apiRequestPs.update(updatePost.id, updatePost);
      const newPosts = posts.map(post => (
        post.id === updatePost.id ? updatePost : post
      ));
      setPosts(newPosts);
    } catch (error) {
      console.log(error)
    }

  }
  //update size
  // const onHandleUpdateS = async (updateSize) => {
  //   try {
  //     apiRequestSize.update(updateSize.id, updateSize);
  //     const newSizes = sizes.map(size => (
  //       size.id === updateSize.id ? updateSize : size
  //     ));
  //     setSizes(newSizes);
  //   } catch (error) {
  //     console.log(error)
  //   }

  // }

  //update color
  // const onHandleUpdateColor = async (updateColor) => {
  //   try {
  //     apiRequestColor.update(updateColor.id, updateColor);
  //     const newColors = colors.map(color => (
  //       color.id === updateColor.id ? updateColor : color
  //     ));
  //     setColors(newColors);
  //   } catch (error) {
  //     console.log(error)
  //   }

  // }

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
        onUpdatePs={onHandleUpdatePs}
        //category
        categorys={categorys}
        // onRemovect={onHandleRemoveCt}
        // onAddCt={onHandleAddCt}
        // onUpdateCt={onHandleUpdateCt}
        //user
        users={users}
        //size
        sizes={sizes}
        // onRemoveS={onHandleRemoveS}
        // onAddS={onHandleAddS}
        // onUpdateS={onHandleUpdateS}
        //color
        colors={colors}
      // onRemoveColor={onHandleRemoveColor}
      // onAddColor={onHandleAddColor}
      // onUpdateColor={onHandleUpdateColor}
      />

    </div>
  )

}
export default App;