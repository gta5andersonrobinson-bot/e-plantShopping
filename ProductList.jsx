import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

function ProductList() {
  const [showCart, setShowCart] = useState(false); 
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://images.unsplash.com/photo-1593482892290-f54927b49461?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", description: "Produces oxygen at night.", cost: "$15" },
        { name: "Spider Plant", image: "https://images.unsplash.com/photo-1596547842798-251f21abcc63?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", description: "Filters formaldehyde.", cost: "$12" },
        { name: "Peace Lily", image: "https://images.unsplash.com/photo-1597054904571-06757f5c35b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", description: "Removes mold spores.", cost: "$18" },
        { name: "Boston Fern", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", description: "Adds humidity to air.", cost: "$20" },
        { name: "Rubber Plant", image: "https://images.unsplash.com/photo-1604762512526-b7ce049b576d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", description: "Easy to care for.", cost: "$17" },
        { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1596547963286-90768b200b3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", description: "Healing properties.", cost: "$14" }
      ]
    },
    {
      category: "Succulents",
      plants: [
        { name: "Jade Plant", image: "https://images.unsplash.com/photo-1597055181300-e374528148b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", description: "Symbol of good luck.", cost: "$10" },
        { name: "Echeveria", image: "https://images.unsplash.com/photo-1601986427357-193e176226ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", description: "Rose-shaped rosette.", cost: "$8" },
        { name: "Zebra Plant", image: "https://images.unsplash.com/photo-1623910398075-875c74230e70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", description: "Striking white stripes.", cost: "$12" },
        { name: "Burro's Tail", image: "https://images.unsplash.com/photo-1609340059374-e3dc138e6a14?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", description: "Trailing succulent.", cost: "$15" },
        { name: "Panda Plant", image: "https://images.unsplash.com/photo-1614594805320-f5a6d5952f9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", description: "Fuzzy leaves.", cost: "$11" },
        { name: "String of Pearls", image: "https://images.unsplash.com/photo-1631551061989-d48e0298a0f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", description: "Unique bead-like foliage.", cost: "$16" }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "https://images.unsplash.com/photo-1595878701974-9b222955f18f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", description: "Soothing scent.", cost: "$20" },
        { name: "Jasmine", image: "https://images.unsplash.com/photo-1596547842943-4318357a79a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", description: "Sweet floral aroma.", cost: "$18" },
        { name: "Rosemary", image: "https://images.unsplash.com/photo-1596547843343-41a690e63715?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", description: "Invigorating herb.", cost: "$15" },
        { name: "Mint", image: "https://images.unsplash.com/photo-1596547842602-53b6f1207e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", description: "Refreshing fragrance.", cost: "$12" },
        { name: "Lemon Balm", image: "https://images.unsplash.com/photo-1596547842798-251f21abcc63?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", description: "Citrusy scent.", cost: "$14" },
        { name: "Hyacinth", image: "https://images.unsplash.com/photo-1601986427357-193e176226ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", description: "Beautiful spring blooms.", cost: "$22" }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isAddedToCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      <div className="navbar" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#4CAF50', color: 'white' }}>
        <div style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem' }} onClick={() => window.location.reload()}>
          Paradise Nursery
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ cursor: 'pointer' }} onClick={() => setShowCart(false)}>Plants</div>
          <div style={{ cursor: 'pointer' }} onClick={() => setShowCart(true)}>
            Cart ({totalCartQuantity})
          </div>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid" style={{ padding: '20px' }}>
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h2 style={{ textAlign: 'center', margin: '30px 0' }}>{category.category}</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '250px', textAlign: 'center' }}>
                    <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px' }} />
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p style={{ fontWeight: 'bold' }}>{plant.cost}</p>
                    <button 
                      onClick={() => handleAddToCart(plant)} 
                      disabled={isAddedToCart(plant.name)}
                      style={{
                        backgroundColor: isAddedToCart(plant.name) ? '#ccc' : '#4CAF50',
                        color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: isAddedToCart(plant.name) ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {isAddedToCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;