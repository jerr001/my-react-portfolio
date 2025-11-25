import React, { useState } from "react";
import "../styles/ImageLoader.css";

const ImageLoader = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`image-loader-wrapper ${className || ""}`}>
      {!isLoaded && !hasError && (
        <div className="image-skeleton">
          <div className="skeleton-shimmer"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${isLoaded ? "loaded" : "loading"}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
        style={{ display: isLoaded ? "block" : "none" }}
      />
      {hasError && (
        <div className="image-error">
          <i className="bx bx-image-alt"></i>
          <p>Image not available</p>
        </div>
      )}
    </div>
  );
};

export default ImageLoader;
