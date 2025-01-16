import { useEffect } from 'react';

const imagesToPreload = [
  // Leak/Porn/Nude Bilder
  '/leaks/meliax leak (1).jpg',
  '/leaks/meliax leak (2).jpg',
  '/leaks/meliax leak (3).jpg',
  '/leaks/meliax leak (4).jpg',
  '/leaks/meliax leak (5).jpg',
  '/leaks/meliax leak (6).jpg',
  '/leaks/meliax leak (7).jpg',
  '/leaks/meliax leak (8).jpg',
  '/leaks/meliax leak (9).jpg',
  '/leaks/meliax leak (10).jpg',
  
  // ChatPopup Bilder
  '/meliaxporn/meliaxass.jpg',
  '/meliaxporn/meliaxxmouth.jpg',
  '/meliaxporn/meliaxassd.jpg',
  '/meliaxporn/meliaxtut.jpg'
];

export default function ImagePreloader() {
  useEffect(() => {
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return null;
} 