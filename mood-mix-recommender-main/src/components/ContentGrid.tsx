
import { ContentItem } from "@/types";
import { ContentCard } from "./ContentCard";

interface ContentGridProps {
  items: ContentItem[];
  title: string;
}

export function ContentGrid({ items, title }: ContentGridProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="py-6 animate-fade-in">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
