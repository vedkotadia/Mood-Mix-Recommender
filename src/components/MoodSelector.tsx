
import { cn } from "@/lib/utils";
import { Mood } from "@/types";
import { Music, Film, Youtube } from "lucide-react";

interface MoodSelectorProps {
  selectedMood: Mood | null;
  setSelectedMood: (mood: Mood) => void;
}

export function MoodSelector({ selectedMood, setSelectedMood }: MoodSelectorProps) {
  const moods: { value: Mood; label: string; icon: React.ReactNode; gradient: string }[] = [
    { 
      value: "happy", 
      label: "Happy", 
      icon: <Music className="h-8 w-8" />,
      gradient: "from-yellow-300 to-amber-500"
    },
    { 
      value: "sad", 
      label: "Sad", 
      icon: <Music className="h-8 w-8" />,
      gradient: "from-blue-300 to-blue-500"
    },
    { 
      value: "energetic", 
      label: "Energetic", 
      icon: <Film className="h-8 w-8" />,
      gradient: "from-red-400 to-orange-500"
    },
    { 
      value: "relaxed", 
      label: "Relaxed", 
      icon: <Youtube className="h-8 w-8" />,
      gradient: "from-green-300 to-green-500"
    },
    { 
      value: "focused", 
      label: "Focused", 
      icon: <Film className="h-8 w-8" />,
      gradient: "from-violet-400 to-purple-500"
    },
  ];

  return (
    <div className="w-full py-8">
      <h2 className="text-2xl font-bold text-center mb-6">How are you feeling today?</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {moods.map((mood) => (
          <div
            key={mood.value}
            className={cn(
              "mood-card group",
              {
                "border-primary/70 shadow-md": selectedMood === mood.value,
              }
            )}
            onClick={() => setSelectedMood(mood.value)}
          >
            <div className={cn(
              "absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity",
              `bg-gradient-to-br ${mood.gradient}`
            )} />
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className={cn(
                "p-4 rounded-full",
                `bg-${mood.value}`
              )}>
                {mood.icon}
              </div>
              <span className="font-medium text-lg">{mood.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
