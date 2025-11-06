'use client';

import { useEffect, useRef, useState } from "react";
import { cn } from "../ui/utils";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Rya2Utd2lkdGg9IjMuNyI+PHJlY3QgeD0iMTYiIHk9IjE2IiB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHJ4PSI2Ii8+PHBhdGggZD0ibTE2IDU4IDE2LTE4IDMyIDMyIi8+PGNpcmNsZSBjeD0iNTMiIGN5PSIzNSIgcj0iNyIvPjwvc3ZnPgoK";

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement>;

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const hasAnimatedRef = useRef(false);

  const { src, alt, className, style, onError, onLoad, onAnimationEnd, ...rest } = props;

  useEffect(() => {
    setDidError(false);
    setShouldAnimate(false);
    hasAnimatedRef.current = false;

    const img = imageRef.current;
    if (img && img.complete && img.naturalWidth !== 0) {
      if (!hasAnimatedRef.current) {
        hasAnimatedRef.current = true;
        setShouldAnimate(true);
      }
    }
  }, [src]);

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      setShouldAnimate(true);
    }
    onLoad?.(event);
  };

  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setDidError(true);
    onError?.(event);
  };

  const handleAnimationEnd = (event: React.AnimationEvent<HTMLImageElement>) => {
    setShouldAnimate(false);
    onAnimationEnd?.(event);
  };

  if (didError) {
    return (
      <div
        className={cn(
          "inline-block bg-gray-100 text-center align-middle w-full h-full",
          className
        )}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
        </div>
      </div>
    );
  }

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      className={cn(className, shouldAnimate && "image-page-turn")}
      style={style}
      {...rest}
      onLoad={handleLoad}
      onError={handleError}
      onAnimationEnd={handleAnimationEnd}
    />
  );
}
