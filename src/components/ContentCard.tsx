
import { ContentItem } from "@/types";
import { Film, Music, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  item: ContentItem;
}

export function ContentCard({ item }: ContentCardProps) {
  const getIcon = () => {
    switch (item.type) {
      case "movie":
        return <Film className="h-4 w-4" />;
      case "music":
        return <Music className="h-4 w-4" />;
      case "youtube":
        return <Youtube className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getTypeLabel = () => {
    switch (item.type) {
      case "movie":
        return "Movie";
      case "music":
        return "Music";
      case "youtube":
        return "YouTube";
      default:
        return "";
    }
  };

  return (
    <div className="content-card h-full flex flex-col">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
          {getIcon()}
          <span>{getTypeLabel()}</span>
        </div>
        {item.duration && (
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
            {item.duration}
          </div>
        )}
      </div>
      <div className="flex-1 p-4 flex flex-col">
        <h3 className="font-bold text-lg line-clamp-1">{item.title}</h3>
        <div className="text-sm text-muted-foreground mt-1 space-y-1">
          {item.artist && <p>{item.artist}</p>}
          {item.year && <p>{item.year}</p>}
          {item.genre && <p className="text-xs">{item.genre}</p>}
        </div>
        {item.description && (
          <p className="text-sm mt-2 line-clamp-2">{item.description}</p>
        )}
      </div>
    </div>
  );
}
