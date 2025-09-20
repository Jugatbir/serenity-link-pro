import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, Users, Eye, Clock } from "lucide-react";

interface ForumPost {
  id: string;
  title: string;
  content: string;
  timestamp: Date;
  likes: number;
  replies: number;
  views: number;
  category: "support" | "tips" | "discussion";
  isAnonymous: boolean;
}

const samplePosts: ForumPost[] = [
  {
    id: "1",
    title: "Dealing with exam stress - what helps you?",
    content: "Finals are coming up and I'm feeling overwhelmed. Looking for practical tips that have worked for others...",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    likes: 12,
    replies: 8,
    views: 45,
    category: "support",
    isAnonymous: true,
  },
  {
    id: "2",
    title: "Mindfulness meditation changed my perspective",
    content: "I started with just 5 minutes a day and it's made such a difference in my anxiety levels...",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    likes: 23,
    replies: 15,
    views: 89,
    category: "tips",
    isAnonymous: true,
  },
  {
    id: "3",
    title: "Building healthy study habits",
    content: "Sharing some techniques that helped me create a sustainable routine without burning out...",
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    likes: 18,
    replies: 12,
    views: 67,
    category: "tips",
    isAnonymous: true,
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "support": return "bg-primary/10 text-primary";
    case "tips": return "bg-accent/10 text-accent";
    case "discussion": return "bg-secondary/10 text-secondary";
    default: return "bg-muted";
  }
};

const formatTimeAgo = (date: Date) => {
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
  return `${Math.floor(diffInMinutes / 1440)}d ago`;
};

export function CommunityForum() {
  return (
    <Card className="shadow-soft border-0 bg-gradient-card">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Community Support
          </CardTitle>
          <Button variant="secondary" size="sm" className="bg-gradient-secondary hover:shadow-soft">
            New Post
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {samplePosts.map((post) => (
            <div
              key={post.id}
              className="p-4 rounded-lg border bg-card hover:shadow-soft transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className={getCategoryColor(post.category)} variant="secondary">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatTimeAgo(post.timestamp)}
                    </span>
                  </div>
                  <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {post.content}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="w-3 h-3" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    {post.replies}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {post.views}
                  </span>
                </div>
                <Badge variant="outline" className="text-xs">
                  Anonymous
                </Badge>
              </div>
            </div>
          ))}
        </div>
        
        <div className="pt-2 border-t">
          <p className="text-xs text-muted-foreground text-center">
            All posts are anonymous and moderated by AI for safety 🛡️
          </p>
        </div>
      </CardContent>
    </Card>
  );
}