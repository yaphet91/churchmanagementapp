import React from 'react'
import Modal from '../Modals/Modal'
import { SpinnerCircular } from 'spinners-react';


const LoadingSpinner = () => {
  return (
    <Modal>
          <SpinnerCircular
              size={50}
              thickness={100}
              speed={100}
              color="rgba(172, 57, 133, 1)"
              secondaryColor="rgba(0, 0, 0, 0.44)" />
      </Modal>
  )
}

export default LoadingSpinner
