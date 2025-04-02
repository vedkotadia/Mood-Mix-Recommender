
import { cn } from "@/lib/utils";
import { ContentType } from "@/types";
import { Film, Music, Video, Youtube } from "lucide-react";

interface ContentFilterProps {
  selectedTypes: ContentType[];
  setSelectedTypes: (types: ContentType[]) => void;
}

export function ContentFilter({ selectedTypes, setSelectedTypes }: ContentFilterProps) {
  const toggleType = (type: ContentType) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const filters: { type: ContentType; label: string; icon: React.ReactNode }[] = [
    { type: "movie", label: "Movies", icon: <Film className="h-4 w-4 mr-2" /> },
    { type: "music", label: "Music", icon: <Music className="h-4 w-4 mr-2" /> },
    { type: "youtube", label: "YouTube", icon: <Youtube className="h-4 w-4 mr-2" /> },
  ];

  return (
    <div className="flex flex-wrap gap-2 my-4">
      {filters.map((filter) => (
        <button
          key={filter.type}
          onClick={() => toggleType(filter.type)}
          className={cn(
            "flex items-center px-4 py-2 rounded-full text-sm transition-colors",
            selectedTypes.includes(filter.type)
              ? "bg-primary text-primary-foreground"
              : "bg-secondary hover:bg-secondary/80"
          )}
        >
          {filter.icon}
          {filter.label}
        </button>
      ))}
    </div>
  );
}
