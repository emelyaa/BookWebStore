import React, { useState, useImperativeHandle, forwardRef } from 'react';
import './SubscribeModal.css';

const SubscribeModal = forwardRef((_, ref) => {
  const [isModalVisible, setIsModalVisible] = useState(false); // Track modal visibility
  const [email, setEmail] = useState(''); // Track email input


  useImperativeHandle(ref, () => ({
    toggleModal: () => setIsModalVisible((prev) => !prev),
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You'll get new recipes soon! Email: ${email}`);
    setIsModalVisible(false); 
    setEmail(''); 
  };

  return (
    <div>
      {/* Modal */}
      {isModalVisible && (
        <div className="modal-overlay" onClick={() => setIsModalVisible(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalVisible(false)}>
              &times;
            </button>
            <h2>Subscribe for yummy recipes!</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
});

export default SubscribeModal;
