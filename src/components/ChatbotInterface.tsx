import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, User, Send, Heart, Lightbulb, Zap } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
  mood?: "supportive" | "encouraging" | "alert";
}

const initialMessages: Message[] = [
  {
    id: "1",
    content: "Hi there! I'm your AI companion here to support you. How are you feeling today?",
    sender: "bot",
    timestamp: new Date(),
    mood: "supportive"
  }
];

const botResponses = {
  happy: [
    "That's wonderful! I'm so glad to hear you're feeling good. Would you like some tips to maintain this positive energy?",
    "Amazing! Your happiness is contagious. What's been bringing you joy lately?"
  ],
  sad: [
    "I hear you, and it's completely okay to feel this way. Remember that emotions are temporary. Would you like to try some gentle breathing exercises?",
    "Thank you for sharing with me. You're not alone in this. Let's explore some coping strategies together."
  ],
  anxious: [
    "I understand that anxiety can feel overwhelming. Let's take this one step at a time. Would you like to try a quick grounding exercise?",
    "Your feelings are valid. Anxiety is our mind's way of trying to protect us. Let me share some techniques that might help."
  ],
  crisis: [
    "I'm concerned about you and want to make sure you get the help you deserve. Please consider reaching out to a crisis helpline or trusted person immediately.",
    "Your life has value and meaning. Please don't face this alone - there are people who want to help. Would you like me to share some crisis resources?"
  ]
};

export function ChatbotInterface() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const detectMoodAndRespond = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("crisis") || lowerMessage.includes("suicide") || lowerMessage.includes("harm")) {
      return { mood: "alert" as const, responses: botResponses.crisis };
    } else if (lowerMessage.includes("happy") || lowerMessage.includes("good") || lowerMessage.includes("great")) {
      return { mood: "encouraging" as const, responses: botResponses.happy };
    } else if (lowerMessage.includes("sad") || lowerMessage.includes("down") || lowerMessage.includes("depressed")) {
      return { mood: "supportive" as const, responses: botResponses.sad };
    } else if (lowerMessage.includes("anxious") || lowerMessage.includes("worried") || lowerMessage.includes("stressed")) {
      return { mood: "supportive" as const, responses: botResponses.anxious };
    }
    
    return { 
      mood: "supportive" as const, 
      responses: ["I'm here to listen. Can you tell me more about how you're feeling?"] 
    };
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI processing delay
    setTimeout(() => {
      const { mood, responses } = detectMoodAndRespond(inputMessage);
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        sender: "bot",
        timestamp: new Date(),
        mood,
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getMoodIcon = (mood?: string) => {
    switch (mood) {
      case "encouraging": return <Lightbulb className="w-4 h-4 text-accent" />;
      case "alert": return <Zap className="w-4 h-4 text-destructive" />;
      default: return <Heart className="w-4 h-4 text-primary" />;
    }
  };

  return (
    <Card className="h-96 shadow-soft border-0 bg-gradient-card flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Bot className="w-5 h-5 text-primary" />
          AI Support Chat
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4 min-h-0">
        <ScrollArea className="flex-1 pr-3">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 animate-slide-up ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender === "bot" && (
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  {message.sender === "bot" && message.mood && (
                    <div className="flex items-center gap-1 mt-1">
                      {getMoodIcon(message.mood)}
                    </div>
                  )}
                </div>
                {message.sender === "user" && (
                  <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-secondary-foreground" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3 justify-start animate-fade-in">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="bg-muted rounded-lg px-3 py-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        
        <div className="flex gap-2">
          <Input
            placeholder="Share how you're feeling..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1"
          />
          <Button 
            onClick={sendMessage}
            size="icon"
            className="bg-gradient-primary hover:shadow-elevated transition-all duration-300"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}