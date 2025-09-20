import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoodLogger } from "@/components/MoodLogger";
import { ChatbotInterface } from "@/components/ChatbotInterface";
import { CommunityForum } from "@/components/CommunityForum";
import { MoodAnalytics } from "@/components/MoodAnalytics";
import { 
  Brain, 
  Heart, 
  Users, 
  BarChart3, 
  Settings, 
  Phone,
  Shield,
  Sparkles 
} from "lucide-react";

export default function Dashboard() {
  const [currentStreak, setCurrentStreak] = useState(7);
  const userName = "Student"; // This would come from auth

  const handleMoodLog = (mood: string) => {
    console.log("Mood logged:", mood);
    // In real app, this would save to database
    if (currentStreak === 7) {
      setCurrentStreak(8); // Increment streak
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Nirvana</h1>
                <p className="text-xs text-muted-foreground">Digital Mental Health Support</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-accent/10 text-accent">
                <Sparkles className="w-3 h-3 mr-1" />
                {currentStreak} day streak
              </Badge>
              <Button variant="ghost" size="icon">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Welcome back, {userName}! 👋</h2>
          <p className="text-muted-foreground">
            How are you feeling today? Let's check in with your mental wellness journey.
          </p>
        </div>

        {/* Crisis Support Banner */}
        <Card className="mb-6 bg-gradient-to-r from-destructive/10 to-warning/10 border-destructive/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-destructive" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm">Need immediate support?</h3>
                <p className="text-xs text-muted-foreground">
                  Crisis helplines are available 24/7. You're not alone.
                </p>
              </div>
              <Button variant="destructive" size="sm">
                Get Help Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Mood Logger */}
          <div className="lg:col-span-1">
            <MoodLogger currentStreak={currentStreak} onMoodLog={handleMoodLog} />
          </div>

          {/* Chatbot Interface */}
          <div className="lg:col-span-2">
            <ChatbotInterface />
          </div>
        </div>

        {/* Tabbed Content Area */}
        <Tabs defaultValue="community" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-fit">
            <TabsTrigger value="community" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Community
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="community" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CommunityForum />
              <Card className="shadow-soft border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Community Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <p className="text-sm">Be kind and supportive to fellow students</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <p className="text-sm">Share experiences, not personal details</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <p className="text-sm">Report harmful content - AI moderates 24/7</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <p className="text-sm">Remember: this isn't a substitute for professional help</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-xs text-muted-foreground">
                      Your anonymity is protected. Posts are monitored for safety.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <MoodAnalytics />
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="shadow-soft border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-base font-semibold">Breathing Exercises</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Guided breathing techniques to reduce anxiety and promote calm.
                  </p>
                  <Button variant="soft" size="sm" className="w-full">
                    Start Session
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-base font-semibold">Study Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Healthy study habits and stress management for academic success.
                  </p>
                  <Button variant="soft" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-base font-semibold">Crisis Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Professional helplines and emergency mental health contacts.
                  </p>
                  <Button variant="destructive" size="sm" className="w-full">
                    View Contacts
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}