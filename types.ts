// types.ts
export interface PRMeta {
    title: string;
    number: number;
    baseBranch: string;
    compareBranch: string;
    author: string;
    merged: boolean;
    timestamp: string;
  }
  
  export interface Comment {
    author: string;
    content: string;
    timestamp: string;
    isBot?: boolean;
  }
  
  export type TimelineEventType = 'title-edit' | 'force-push' | 'approval';
  
  export interface TimelineEvent {
    type: TimelineEventType;
    author: string;
    description: string;
    timestamp: string;
  }
  