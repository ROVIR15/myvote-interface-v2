import React from 'react';
import { createPortal } from 'react-dom';
import usePortal from '../reducers/usePortal';

const Portal = ({ id, children }) => {
  const target = usePortal(id);
  return createPortal(
    children,
    target,
  );
};

export default Portal;