
export type Mood = "happy" | "sad" | "energetic" | "relaxed" | "focused";

export type ContentType = "movie" | "youtube" | "music";

export interface ContentItem {
  id: string;
  title: string;
  type: ContentType;
  imageUrl: string;
  description?: string;
  year?: number;
  artist?: string;
  duration?: string;
  genre?: string;
}
