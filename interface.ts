export interface Observer<T> {
  next: (x: T) => void;
  complete: () => void;
  error: (error: any) => void;
}

export interface Subscription {
  unsubscribe: () => void;
}
