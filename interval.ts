import { Observer, Subscription } from "./interface";

const interval$ = {
    subscribe: function (observer: Partial<Observer>): Subscription {
      const next = observer.next || function () {};
  
      let i = 0;
      const r = setInterval(() => next(i++), 100);
  
      return {
        unsubscribe: function () {
          clearInterval(r);
        },
      };
    },
  };