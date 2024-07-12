
import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/cv/cv-erick-alexis-venegas.pdf`;
    link.download = '/cv/cv-erick-alexis-venegas.pdf';
    link.click();
  };

  return (
    <button onClick={handleDownload}>
      Descargar CV
    </button>
  );
};

export default DownloadButton;
