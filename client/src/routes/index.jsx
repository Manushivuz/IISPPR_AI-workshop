import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../components/Layout';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorBoundary from '../components/ErrorBoundary';

// Lazy load components with error handling
const lazyLoad = (importFunc) => {
  const LazyComponent = lazy(() => importFunc().catch(() => {
    return { default: () => <ErrorBoundary /> };
  }));
  return LazyComponent;
};

// Lazy load components
const Home = lazyLoad(() => import('../pages/Home'));
const Projects = lazyLoad(() => import('../pages/Projects'));
const About = lazyLoad(() => import('../pages/About'));
const Testimonials = lazyLoad(() => import('../pages/Testimonials'));
const Contact = lazyLoad(() => import('../pages/Contact'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <LoadingSpinner />
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        )
      },
      {
        path: 'projects',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Projects />
          </Suspense>
        )
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        )
      },
      {
        path: 'testimonials',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Testimonials />
          </Suspense>
        )
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        )
      }
    ]
  }
]);

export default router; 