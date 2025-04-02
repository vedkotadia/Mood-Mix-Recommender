
import { Home, Settings, User } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Header({ className }: { className?: string }) {
  return (
    <header className={cn("w-full border-b", className)}>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-focused bg-clip-text text-transparent">
            MoodMix
          </span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary">
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link to="/settings" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary">
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button size="icon" variant="ghost" className="rounded-full">
            <User className="h-5 w-5" />
            <span className="sr-only">User</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
