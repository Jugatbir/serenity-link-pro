import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Calendar, Target, Award } from "lucide-react";

interface MoodData {
  date: string;
  mood: "happy" | "neutral" | "sad";
  score: number;
}

const sampleMoodData: MoodData[] = [
  { date: "2024-01-15", mood: "happy", score: 8 },
  { date: "2024-01-16", mood: "neutral", score: 6 },
  { date: "2024-01-17", mood: "happy", score: 9 },
  { date: "2024-01-18", mood: "neutral", score: 7 },
  { date: "2024-01-19", mood: "happy", score: 8 },
  { date: "2024-01-20", mood: "sad", score: 4 },
  { date: "2024-01-21", mood: "neutral", score: 6 },
];

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  trend?: "up" | "down" | "stable";
}

function StatsCard({ title, value, subtitle, icon: Icon, trend }: StatsCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case "up": return "text-accent";
      case "down": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Card className="shadow-soft border-0 bg-gradient-card">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">{title}</p>
            <p className="text-lg font-semibold">{value}</p>
            <p className={`text-xs flex items-center gap-1 ${getTrendColor()}`}>
              {trend === "up" && <TrendingUp className="w-3 h-3" />}
              {subtitle}
            </p>
          </div>
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function MoodAnalytics() {
  const currentStreak = 7;
  const averageMoodScore = 7.1;
  const totalEntries = sampleMoodData.length;
  const weeklyGoal = 7;
  const weeklyProgress = (totalEntries / weeklyGoal) * 100;

  const moodDistribution = {
    happy: sampleMoodData.filter(d => d.mood === "happy").length,
    neutral: sampleMoodData.filter(d => d.mood === "neutral").length,
    sad: sampleMoodData.filter(d => d.mood === "sad").length,
  };

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Current Streak"
          value={`${currentStreak} days`}
          subtitle="+2 from last week"
          icon={Calendar}
          trend="up"
        />
        <StatsCard
          title="Avg Mood Score"
          value={averageMoodScore.toFixed(1)}
          subtitle="Out of 10"
          icon={TrendingUp}
          trend="up"
        />
        <StatsCard
          title="Total Entries"
          value={totalEntries}
          subtitle="This week"
          icon={Target}
        />
        <StatsCard
          title="Achievement"
          value="Bronze"
          subtitle="7-day streak"
          icon={Award}
          trend="up"
        />
      </div>

      {/* Weekly Progress */}
      <Card className="shadow-soft border-0 bg-gradient-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">Weekly Goal Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span>Daily mood logs</span>
            <span className="font-medium">{totalEntries}/{weeklyGoal}</span>
          </div>
          <Progress value={weeklyProgress} className="h-2" />
          <p className="text-xs text-muted-foreground">
            {weeklyProgress >= 100 ? "🎉 Weekly goal achieved!" : `${weeklyGoal - totalEntries} more days to reach your goal`}
          </p>
        </CardContent>
      </Card>

      {/* Mood Distribution */}
      <Card className="shadow-soft border-0 bg-gradient-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">Mood Distribution</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-sm">Happy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{moodDistribution.happy}</span>
                <Badge variant="secondary" className="bg-accent/10 text-accent">
                  {Math.round((moodDistribution.happy / totalEntries) * 100)}%
                </Badge>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                <span className="text-sm">Neutral</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{moodDistribution.neutral}</span>
                <Badge variant="secondary">
                  {Math.round((moodDistribution.neutral / totalEntries) * 100)}%
                </Badge>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm">Needs Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{moodDistribution.sad}</span>
                <Badge variant="secondary">
                  {Math.round((moodDistribution.sad / totalEntries) * 100)}%
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="pt-3 border-t">
            <p className="text-xs text-muted-foreground">
              Tracking your patterns helps identify triggers and celebrate progress 📊
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}