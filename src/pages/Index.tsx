import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Heart, 
  Users, 
  Shield, 
  Zap, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import Dashboard from "./Dashboard";

const Index = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return <Dashboard />;
  }

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Support",
      description: "Get personalized guidance through sentiment-aware chatbot interactions",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Daily Mood Tracking",
      description: "Log your emotions and visualize patterns with gamified streaks",
      color: "text-destructive"
    },
    {
      icon: Users,
      title: "Anonymous Community",
      description: "Connect with fellow students in a safe, moderated environment",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "End-to-end encryption ensures your mental health data stays private",
      color: "text-secondary"
    }
  ];

  const benefits = [
    "24/7 AI companion for emotional support",
    "Crisis detection with immediate helpline access", 
    "Predictive analytics for mental health trends",
    "Gamified wellness tracking with achievements",
    "Anonymous peer support community",
    "Evidence-based coping strategies"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Nirvana</h1>
                <p className="text-xs text-muted-foreground">Digital Mental Health</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost">Login</Button>
              <Button variant="hero" onClick={() => setShowDashboard(true)}>
                Try Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-6 animate-fade-in">
              <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Zap className="w-3 h-3 mr-1" />
                Mental Health Innovation for Students
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Your Digital
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Mental Health
                </span>
                <span className="block">Companion</span>
              </h1>
              
              <p className="text-lg text-white/90 max-w-md mx-auto lg:mx-0">
                AI-powered support, mood tracking, and peer community designed specifically for student mental wellness.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="xl" 
                  className="bg-white text-primary hover:bg-white/90 hover:shadow-floating transition-all duration-300"
                  onClick={() => setShowDashboard(true)}
                >
                  Start Your Wellness Journey
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="relative rounded-2xl overflow-hidden shadow-floating">
                <img 
                  src={heroImage}
                  alt="Digital mental health support illustration" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Comprehensive Mental Health Support
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for students, by understanding the unique challenges of academic life and mental wellness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="shadow-soft border-0 bg-gradient-card hover:shadow-elevated transition-all duration-300 group"
                >
                  <CardHeader className="text-center pb-2">
                    <div className={`w-12 h-12 mx-auto rounded-lg bg-gradient-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 text-primary-foreground`} />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Everything You Need for
                <span className="block text-primary">Mental Wellness</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Nirvana provides a complete ecosystem of tools, support, and insights designed to help students thrive academically and emotionally.
              </p>
              
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => setShowDashboard(true)}
                className="mt-6"
              >
                Experience Nirvana
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="relative">
              <Card className="shadow-floating border-0 bg-gradient-card p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Mood Improvement</h3>
                      <p className="text-sm text-muted-foreground">87% positive trend</p>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Weekly Progress</span>
                      <Badge className="bg-accent/10 text-accent">+23%</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full animate-progress-fill" style={{"--progress-width": "87%"} as any}></div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground pt-2 border-t">
                    Real data from student beta testers
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Mental Health Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have found support, community, and growth through Nirvana.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 hover:shadow-floating transition-all duration-300"
              onClick={() => setShowDashboard(true)}
            >
              Start Free Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Nirvana</h3>
                <p className="text-xs text-background/70">Digital Mental Health Support</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Crisis Resources</a>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-6 text-center text-xs text-background/70">
            <p>© 2024 Nirvana. Built for student mental wellness. Not a substitute for professional medical advice.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
