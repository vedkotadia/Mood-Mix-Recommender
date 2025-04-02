
import { useState, useEffect } from "react";
import { ContentFilter } from "@/components/ContentFilter";
import { ContentGrid } from "@/components/ContentGrid";
import { Header } from "@/components/Header";
import { MoodSelector } from "@/components/MoodSelector";
import { getMockRecommendations } from "@/services/mockData";
import { ContentItem, ContentType, Mood } from "@/types";
import { useToast } from "@/hooks/use-toast";

export default function HomePage() {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [recommendations, setRecommendations] = useState<ContentItem[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<ContentType[]>(["movie", "music", "youtube"]);
  const { toast } = useToast();

  useEffect(() => {
    if (selectedMood) {
      // In a real app, this would be an API call to the backend
      const data = getMockRecommendations(selectedMood);
      setRecommendations(data);
      
      toast({
        title: "Recommendations updated",
        description: `We found ${data.length} ${selectedMood} recommendations for you!`,
        duration: 3000,
      });
    } else {
      setRecommendations([]);
    }
  }, [selectedMood, toast]);

  const filteredRecommendations = recommendations.filter((item) =>
    selectedTypes.includes(item.type)
  );

  const movieRecommendations = filteredRecommendations.filter(
    (item) => item.type === "movie"
  );
  
  const musicRecommendations = filteredRecommendations.filter(
    (item) => item.type === "music"
  );
  
  const youtubeRecommendations = filteredRecommendations.filter(
    (item) => item.type === "youtube"
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container px-4 py-6">
        <h1 className="text-4xl font-bold mb-2">MoodMix Recommender</h1>
        <p className="text-muted-foreground mb-8">
          Get personalized movies, music, and videos based on your mood
        </p>

        <MoodSelector
          selectedMood={selectedMood}
          setSelectedMood={(mood) => setSelectedMood(mood)}
        />

        {selectedMood && (
          <div className="mt-8 animate-fade-in">
            <div className="flex items-center justify-between flex-wrap">
              <h2 className="text-2xl font-bold">Your Recommendations</h2>
              <ContentFilter
                selectedTypes={selectedTypes}
                setSelectedTypes={setSelectedTypes}
              />
            </div>

            {filteredRecommendations.length > 0 ? (
              <>
                {movieRecommendations.length > 0 && (
                  <ContentGrid items={movieRecommendations} title="Movies" />
                )}
                
                {musicRecommendations.length > 0 && (
                  <ContentGrid items={musicRecommendations} title="Music" />
                )}
                
                {youtubeRecommendations.length > 0 && (
                  <ContentGrid items={youtubeRecommendations} title="YouTube Videos" />
                )}
              </>
            ) : (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">
                  No recommendations found for the selected filters.
                </p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
