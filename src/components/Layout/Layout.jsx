import { Suspense } from 'react';
import css from './Layout.module.css';
import Navigation from '../Navigation/Navigation';
export default function Layout({children}) {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Please wait loading page...</div>}>
        {children}
      </Suspense>
    </div>
  );
}
