import { Observer, Subscription } from "./interface";

export class Observable {
    constructor(private subscribeFunction: (observer: Partial<Observer>) => Subscription) {
    }
  
    subscribe(observer: Partial<Observer>): Subscription {
      return this.subscribeFunction(observer);
    }
  
  }