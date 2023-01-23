import React from 'react';

export default function LoadingBox() {
  return (
    <spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </spinner>
  );
}
