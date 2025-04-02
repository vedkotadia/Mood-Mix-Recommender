
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-2xl font-semibold">Page Not Found</p>
        <p className="text-muted-foreground">
          Oops! The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}
