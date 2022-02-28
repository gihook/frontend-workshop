import { Observer, Subscription } from "./interface";

export class Observable<T> {
  constructor(
    private subscribeFunction: (observer: Partial<Observer<T>>) => Subscription
  ) {}

  subscribe(observer: Partial<Observer<T>>): Subscription {
    return this.subscribeFunction(observer);
  }
}
