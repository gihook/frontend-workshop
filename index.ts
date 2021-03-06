import { Observer, Subscription } from "./interface";
import { Observable } from "./observable";

const test$ = {
  subscribe: function (observer: Partial<Observer<number>>): Subscription {
    const next = observer.next || function () {};
    const complete = observer.complete || function () {};

    next(1);
    next(2);
    next(3);
    next(4);
    next(5);

    setTimeout(() => {
      next(6);
      complete();
    }, 0);

    const timeoutReference1 = setTimeout(() => {
      next(7);
      complete();
    }, 0);

    return {
      unsubscribe: function () {
        clearTimeout(timeoutReference1);
        console.log("unsubscribed");
      },
    };
  },
};

const testPromise = new Promise((resolve, _reject) => {
  setTimeout(() => resolve(1), 1000);
});

const fromPromise$ = {
  subscribe: function (observer: Partial<Observer<any>>): Subscription {
    const next = observer.next || function () {};
    const complete = observer.complete || function () {};

    testPromise.then((b) => {
      next(b);
      complete();
    });

    return {
      unsubscribe: function () {},
    };
  },
};

const interval$ = new Observable<number>((observer) => {
  const next = observer.next || function () {};

  let i = 0;
  const r = setInterval(() => next(i++), 100);

  return {
    unsubscribe: function () {
      clearInterval(r);
    },
  };
});

function mapObservable<T, R>(
  observable$: Observable<T>,
  mapper: (x: T) => R
): Observable<R> {
  return new Observable<R>((observer) => {
    const next = observer.next || function () {};

    const subscription = observable$.subscribe({
      next: (x) => next(mapper(x)),
    });

    return {
      unsubscribe: function () {
        subscription.unsubscribe();
      },
    };
  });
}

const func = function (x: number) {
  return `value ${x * x}`;
};

const newObservable$ = mapObservable(interval$, func);

const subscription = newObservable$.subscribe({ next: (x) => console.log(x) });
setInterval(() => {
  subscription.unsubscribe();
}, 500);

// Nikola .pipe(???) method

// Danilo
// implementira filterObservable(observable$: Observable<nuber>): Observable<nuber>
