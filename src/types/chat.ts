export interface ChatMessage {
  id: string;
  channelId: string;
  senderId: string;
  senderName: string;
  senderRole: string;
  senderAvatar: string;
  isProfessional: boolean;
  isAIAdmin?: boolean;
  timestamp: string;
  content: string;
  category?: 'mechanism' | 'citizen_observation' | 'safety_notice' | 'admin_synthesis';
  isOfflineQueued?: boolean;
  reactions?: {
    emoji: string;
    count: number;
    userReacted?: boolean;
  }[];
}

export interface ChatChannel {
  id: string;
  name: string;
  slug: string;
  topic: string;
  unreadCount?: number;
  activeResearchersCount: number;
}
