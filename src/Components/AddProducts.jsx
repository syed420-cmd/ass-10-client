import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BiCartDownload } from 'react-icons/bi';
import swal from 'sweetalert';



import TextArea from '../ui/TextArea';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Input from '../ui/Input';
import SectionTitle from '../ui/SectionTitles';
const productInit = {
  proName: '',
  desc: '',
  item_name: "",
  price: '',
  category: '',
  rating: '',
  photoUrl: '',
};
const errorInit = {
  proName: '',
  desc: '',
  item_name: "",
  price: '',
  category: '',
  rating: '',
  photoUrl: '',
};
const AddProducts = () => {
  const [addProduct, setAddProduct] = useState({ ...productInit });
  const { signoutAccount } = useContext(AuthContext);
  const [error, setError] = useState({ ...errorInit });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setAddProduct((prevObj) => ({ ...prevObj, [name]: value }));
    setError((prevObj) => ({ ...prevObj, [name]: '' }));
  };
  const handleAddProductForm = (e) => {
    e.preventDefault();
    const { proName, desc,  item_name ,  price, category, rating, photoUrl } =
      addProduct;
    if (!proName) {
      setError((prevError) => ({
        ...prevError,
        proName: 'Product name required.',
      }));
      return;
    }

    if (!category) {
      setError((prevError) => ({
        ...prevError,
        category: 'Product category required.',
      }));
      return;
    }
    if (!price) {
      setError((prevError) => ({
        ...prevError,
        price: 'Product price required.',
      }));
      return;
    } else if (price < 0) {
      setError((prevError) => ({
        ...prevError,
        price: 'Product price must be greater then 0.',
      }));
      return;
    }
    if (!rating) {
      setError((prevError) => ({
        ...prevError,
        rating: 'Product rating required.',
      }));
      return;
    } else if (rating < 0 || rating > 5) {
      setError((prevError) => ({
        ...prevError,
        rating: 'Product rating will be 0.0 - 5.0',
      }));
      return;
    }
    if (!photoUrl) {
      setError((prevError) => ({
        ...prevError,
        photoUrl: 'Product photo url required.',
      }));
      return;
    }
    
    if (!desc) {
      setError((prevError) => ({
        ...prevError,
        desc: 'Product description required.',
      }));
      return;
    }
    if (!item_name) {
        setError((prevError) => ({
          ...prevError,
          item_name: 'Product item_name required.',
        }));
        return;
      }
    const newProductObject = {
      proName,
      category,
      price,
      rating,
      photoUrl,
      desc,
      item_name
    };
    fetch('https://brand-shop-server-olive.vercel.app/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(newProductObject),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          swal('Product added succssfully', '', 'success');
          setAddProduct({ ...productInit });
        } else {
          swal('There was an error', 'try again later', 'error');
        }
      })
      .catch(() => {
        signoutAccount();
        swal('There was an error', 'try again later', 'error');
      });
  };
  return (
    <div className='bg-white border-gray-200 dark:bg-gray-900/90'>
      <Helmet>
        <title>Marella | Add Product</title>
      </Helmet>
      <div className='max-w-screen-xl mx-auto p-4 '>
        <SectionTitle
          displayName={'Add product'}
          style={{ backgroundImage: 'linear-gradient(to right, red,yellow)' }}
        />
        <form
          className='w-full my-10 space-y-4'
          onSubmit={handleAddProductForm}
        >
          <div className='w-full flex flex-col sm:flex-row gap-5'>
            <Input
              displayName={'Product Name'}
              type={'text'}
              id={'proName'}
              name={'proName'}
              placeholder={'t-shirt for women'}
              onChange={handleInput}
              value={addProduct.proName}
              error={error.proName}
            />
           
          </div>
          <div className='w-full flex flex-col sm:flex-row gap-5'>
            <Input
              displayName={'Category'}
              type={'text'}
              id={'category'}
              name={'category'}
              placeholder={'t-shirt'}
              onChange={handleInput}
              value={addProduct.category}
              error={error.category}
            />
            <Input
              displayName={'Price'}
              type={'number'}
              id={'price'}
              name={'price'}
              placeholder={'$789'}
              onChange={handleInput}
              value={addProduct.price}
              error={error.price}
            />
            <Input
              displayName={'Rating'}
              type={'number'}
              id={'rating'}
              name={'rating'}
              placeholder={'4.6'}
              onChange={handleInput}
              value={addProduct.rating}
              error={error.rating}
            />
          </div>
          <Input
            displayName={'Photo Url'}
            type={'url'}
            id={'photoUrl'}
            name={'photoUrl'}
            placeholder={'www.myimage.com'}
            onChange={handleInput}
            value={addProduct.photoUrl}
            error={error.photoUrl}
          />
          <TextArea
            displayName={'Description'}
            type={'text'}
            id={'desc'}
            name={'desc'}
            placeholder={
              'this is nice t shirt import form japan good cloth and duraable'
            }
            onChange={handleInput}
            value={addProduct.desc}
            error={error.desc}
          />

        <TextArea
            displayName={'item_name'}
            type={'text'}
            id={'item_name'}
            name={'item_name'}
            placeholder={
              'this is nice t shirt import form japan good cloth and duraable'
            }
            onChange={handleInput}
            value={addProduct.desc}
            error={error.desc}
          />
          <button
            Add Product
            type="submit"
         
          />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;