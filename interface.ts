export interface Observer {
    next: (x: any) => void;
    complete: () => void;
    error: (error: any) => void;
  }
  
 export interface Subscription {
    unsubscribe: () => void;
  }