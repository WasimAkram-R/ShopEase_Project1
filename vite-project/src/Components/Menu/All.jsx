import React, { useState, useEffect } from "react";
import AllMenus from "./dish.json";
import Card from "react-bootstrap/Card";
import { IoIosStar } from "react-icons/io";
import NavScrollExample from "../Navbar/Navbar";
import Hero_section from "../Hero_section/Hero_section";
import "./Menu.css";


const All = () => {
  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(0);
  const [allmenus, setAllmenus] = useState(AllMenus);
  const [selectedMenuType, setSelectedMenuType] = useState('All');

  const resetCart = () => {
    setCarts([]);
    setTotal(0);
  };

  // Filter the menus based on the selected type
  const filteredMenus = selectedMenuType === 'All'
    ? allmenus
    : allmenus.filter(menu => menu.type === selectedMenuType.toLowerCase());

  const handleMenuTypeChange = (type) => {
    setSelectedMenuType(type);
  };




  const addToCart = (menuItem) => {
    setCarts((prevCarts) => {
      const existingItemIndex = prevCarts.findIndex(item => item.id === menuItem.id);
  
      let updatedCarts;
      if (existingItemIndex !== -1) {
        // Update quantity if the item is already in the cart
        updatedCarts = [...prevCarts];
        updatedCarts[existingItemIndex] = { 
          ...updatedCarts[existingItemIndex], 
          quantity: updatedCarts[existingItemIndex].quantity + 1 
        };
      } else {
        // Add a new item to the cart with quantity = 1
        updatedCarts = [...prevCarts, { ...menuItem, quantity: 1 }];
      }
  
      // Recalculate the total
      const newTotal = updatedCarts.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotal(newTotal);
  
      return updatedCarts;
    });
  };
  
  const updateCart = (id, action) => {
    setCarts((prevCarts) => {
      const updatedCarts = prevCarts.map(item => {
        if (item.id === id) {
          switch (action) {
            case 'increase':
              return { ...item, quantity: item.quantity + 1 };
            case 'decrease':
              return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
            case 'delete':
              return null; // Will be filtered later
            default:
              return item;
          }
        }
        return item;
      }).filter(item => item !== null); // Remove null (deleted items)
  
      // Recalculate the total after any update
      const newTotal = updatedCarts.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotal(newTotal);

      // useEffect(() => {
      //   const newTotal = carts.reduce((acc, item) => acc + item.price * item.quantity, 0);
      //   setTotal(newTotal);
      // }, [carts]);
  
      return updatedCarts;
    });
  };
  

 

  
  return (
    <>
         


      <NavScrollExample carts={carts} total={total} updateCart={updateCart} resetCart={resetCart} /> 

     <div className="container-fluid bg-body-tertiary ">
      <div className="container pb-5 pt-md-5">
        <Hero_section />
        <nav id="menu">
          <h2 className="text-center pt-5 text-primary-emphasis">Menus</h2>
          <ul className="list-unstyled d-flex justify-content-center mt-3 pb-3">
            <li
              className={`menu-type ${selectedMenuType === 'All' ? 'active' : ''}`}
              onClick={() => handleMenuTypeChange('All')}
            >
              <span className="fw-bold spaned">All</span>
            </li>
            <li
              className={`menu-type ${selectedMenuType === 'Veg' ? 'active' : ''}`}
              onClick={() => handleMenuTypeChange('Veg')}
            >
              <span className=" fw-bold px-5 spaned">Veg</span>
            </li>
            <li
              className={`menu-type ${selectedMenuType === 'Non-veg' ? 'active' : ''}`}
              onClick={() => handleMenuTypeChange('Non-veg')}
            >
              <span className="fw-bold spaned">Non-veg</span>
            </li>
          </ul>
        </nav>

        <div className="row row-gap-4 justify-content-center">
          {filteredMenus.map((menu) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-8" key={menu.id}>

              <Card 
              // style={{ width: '12rem', height: '250px' }} 
              className="flow flowall">
                <Card.Img
                  variant="top"
                  src={menu.img}
                  style={{ height: '130px', width: '100%', objectFit: 'cover' }}
                  className="cardimage"
                />

                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <Card.Title>
                      <h6 className="text-primary-emphasis titlefont fw-bold">
                        {menu.name}
                      </h6>
                    </Card.Title>
                    <Card.Text className="text-danger fw-bold" style={{ fontSize: '13px' }}>
                      &#8377;{menu.price}
                    </Card.Text>
                  </div>
                  <p>
                    <IoIosStar style={{ color: 'gold', width: '14px' }} />
                    <IoIosStar style={{ color: 'gold', width: '14px' }} />
                    <IoIosStar style={{ color: 'gold', width: '14px' }} />
                    <IoIosStar style={{ color: 'gold', width: '14px' }} />
                    <IoIosStar style={{ color: 'gold', width: '14px' }} />
                  </p>
                  <button
                    onClick={() => addToCart(menu)}
                    style={{ backgroundColor: '#93ab01', fontSize: '11px' }}
                    className="border-0 px-2 py-1 rounded-5 text-white buttons"
                  >
                    Add To Cart
                  </button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      </div>

    </>
  );
};

export default All;
