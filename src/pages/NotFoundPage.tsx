import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';

export function NotFoundPage() {
  return (
    <section className="py-20 md:py-32 bg-gray-50 flex items-center justify-center min-h-[70vh]">
      <PageMeta
        title="404 - Page Not Found"
        description="The page you are looking for does not exist on Basdils Pharmaceuticals."
      />
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold font-display">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-bold font-display text-gray-900">
          Page Not Found
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          The page you requested could not be found. It may have been moved, deleted, or the URL might be mistyped.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link to="/" className="btn-primary text-sm">
            Back to Home
          </Link>
          <Link to="/products" className="btn-secondary text-sm">
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}
