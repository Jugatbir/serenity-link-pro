import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smile, Meh, Frown, Zap } from "lucide-react";

const moodOptions = [
  { icon: Smile, label: "Happy", value: "happy", color: "text-accent" },
  { icon: Meh, label: "Neutral", value: "neutral", color: "text-muted-foreground" },
  { icon: Frown, label: "Sad", value: "sad", color: "text-destructive" },
];

interface MoodLoggerProps {
  currentStreak?: number;
  onMoodLog?: (mood: string) => void;
}

export function MoodLogger({ currentStreak = 0, onMoodLog }: MoodLoggerProps) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [isLogged, setIsLogged] = useState(false);

  const handleMoodSelection = (moodValue: string) => {
    setSelectedMood(moodValue);
  };

  const handleSubmitMood = () => {
    if (selectedMood) {
      setIsLogged(true);
      onMoodLog?.(selectedMood);
    }
  };

  return (
    <Card className="shadow-soft border-0 bg-gradient-card">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Daily Mood Check</CardTitle>
          {currentStreak > 0 && (
            <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
              <Zap className="w-3 h-3 mr-1" />
              {currentStreak} day streak
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {!isLogged ? (
          <>
            <p className="text-sm text-muted-foreground">
              How are you feeling today?
            </p>
            <div className="grid grid-cols-3 gap-3">
              {moodOptions.map((mood) => {
                const Icon = mood.icon;
                return (
                  <Button
                    key={mood.value}
                    variant={selectedMood === mood.value ? "default" : "outline"}
                    className={`flex flex-col gap-2 h-20 transition-all duration-300 ${
                      selectedMood === mood.value 
                        ? "bg-primary shadow-elevated scale-105" 
                        : "hover:scale-105 hover:shadow-soft"
                    }`}
                    onClick={() => handleMoodSelection(mood.value)}
                  >
                    <Icon className={`w-6 h-6 ${selectedMood === mood.value ? "text-primary-foreground" : mood.color}`} />
                    <span className={`text-xs ${selectedMood === mood.value ? "text-primary-foreground font-medium" : ""}`}>
                      {mood.label}
                    </span>
                  </Button>
                );
              })}
            </div>
            {selectedMood && (
              <Button 
                onClick={handleSubmitMood}
                className="w-full bg-gradient-primary hover:shadow-elevated transition-all duration-300"
              >
                Log My Mood
              </Button>
            )}
          </>
        ) : (
          <div className="text-center py-4 animate-fade-in">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap className="w-8 h-8 text-accent animate-gentle-bounce" />
            </div>
            <p className="font-medium text-foreground">Mood logged successfully!</p>
            <p className="text-sm text-muted-foreground mt-1">
              Great job keeping up with your daily check-ins 🌟
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}