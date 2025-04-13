export interface Comment {
    author: string;
    avatarUrl?: string;
    content: string;
    timestamp: string;
    isBot?: boolean;
  }
  
  export interface TimelineEvent {
    type: 'force-push' | 'title-edit' | 'approval';
    author: string;
    description: string;
    timestamp: string;
  }
  
  export interface PRMeta {
    title: string;
    number: number;
    baseBranch: string;
    compareBranch: string;
    author: string;
    merged: boolean;
    timestamp: string;
  }
  