import React, {  useEffect, useRef, useState, } from 'react';

import '../style/image-zoomer.css'

export type PictureProps = {
  picture: string;
};

export const ImageZoomer: React.FC<PictureProps> = ({ picture }) => {
  const [loadingImg,setLoadingImg]=useState<boolean>(false);
  const [error, setError] = useState<boolean>(false); // Indique si une erreur s'est produite
  const zoomerBoxRef = useRef<HTMLDivElement | null>(null);
  const originalImageRef = useRef<HTMLImageElement | null>(null);
  const magnifiedImageRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const zoomerBox = zoomerBoxRef.current;
    const originalImage = originalImageRef.current;
    const magnifiedImage = magnifiedImageRef.current;

    if (!zoomerBox || !originalImage || !magnifiedImage) return;

    const style = magnifiedImage.style;
    const x = e.pageX - zoomerBox.offsetLeft;
    const y = e.pageY - zoomerBox.offsetTop;
    const imgWidth = originalImage.offsetWidth;
    const imgHeight = originalImage.offsetHeight;

    let xperc = (x / imgWidth) * 100;
    let yperc = (y / imgHeight) * 100;

    // Allow scrolling past the edges of the image
    if (x > 0.01 * imgWidth) {
      xperc += 0.15 * xperc;
    }
    if (y >= 0.01 * imgHeight) {
      yperc += 0.15 * yperc;
    }

    style.backgroundPositionX = `${xperc - 9}%`;
    style.backgroundPositionY = `${yperc - 9}%`;

    style.left = `${x - 90}px`;
    style.top = `${y - 90}px`;
  };

  const pictureZoom = picture.replace('.jpg','-zoom.jpg');
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    const checkReady = () => {
      if (originalImageRef.current && originalImageRef.current.complete) {
        if (intervalId) clearInterval(intervalId);
        setLoadingImg(true);
      }
    };

    if (originalImageRef.current && !originalImageRef.current.complete) {
      intervalId = setInterval(checkReady, 150);
    } else {
      setLoadingImg(true);
    }

    return () => {
      if (intervalId) clearInterval(intervalId); // Nettoyage
    };
  }, []);

  const imageError = () => {
    setLoadingImg(false); // Arrêter le loader
    setError(true); // Afficher le message d'erreur
  };
  return <>
              {error ? (
      <p className='red-color'>Image loading error</p> // Message d'erreur
    ) : (
    <figure
      id='img-zoomer-box'
      ref={zoomerBoxRef}
      onMouseMove={handleMouseMove}
      style={{ position: 'relative', width: '100%', height: 'auto', overflow: 'hidden' }}
    >

      <img
        id='img-1'
        ref={originalImageRef}
        src={loadingImg ? picture : '../../asset/pictures/loader.gif'}
        alt='Original'
        style={{ width: '100%', height: 'auto' }}
        onError={imageError} // Gestion des erreurs
      />
      <div
        id='img-2'
        ref={magnifiedImageRef}
        style={{
          position: 'absolute',
          width: '10.625rem',
          height: '10.625rem',
          backgroundImage: `url(${pictureZoom})`,
          backgroundRepeat: 'no-repeat',
          pointerEvents: 'none',
          borderRadius: '100%'
        }}
      ></div>
    
    </figure>)}
</>
};
