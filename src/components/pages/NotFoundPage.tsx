import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { SEO } from "../SEO";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center">
      <SEO
        title="Page Not Found | N88E Build"
        description="The page you are trying to reach does not exist. Go back to the homepage, browse products, or contact N88E Build for help."
        url="https://n88ebuild.com/404"
        robots="noindex,follow"
        type="website"
        image="https://n88ebuild.com/og-image.jpg"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">404 - Page Not Found</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-gray-600 mb-6">
              The page you’re looking for doesn’t exist (or the link may be outdated).
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <Link to="/">Go to Home</Link>
              </Button>

              <Button variant="outline" asChild>
                <Link to="/products">Explore Products</Link>
              </Button>

              <Button variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
