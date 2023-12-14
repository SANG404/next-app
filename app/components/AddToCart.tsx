'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const AddToCart = () => {
  const [isDivVisible, setIsDivVisible] = useState(false);
  return (
    <div>
        <button className='btn btn-primary' onClick={() => setIsDivVisible(!isDivVisible)}>{isDivVisible ? 'Hide Div' : 'Show Div'}</button>
        {isDivVisible && <div><Image src="/images/1920x1080_PopUp_CA_BlackFriday_FR.jpg" alt="Example Image" width={500} height={300} /></div>}
    </div>
  )
}

export default AddToCart