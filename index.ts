declare type Callback = (x: any) => void;

interface Observer {
  next: (x: any) => void;
  complete: () => void;
  error: (error: any) => void;
}

interface Subscription {
  unsubscribe: () => void;
}

const test$ = {
  subscribe: function (observer: Partial<Observer>): Subscription {
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

const testPromise = new Promise((resolve, _reject) => {
  setTimeout(() => resolve(1), 1000);
});

const fromPromise$ = {
  subscribe: function (observer: Partial<Observer>): Subscription {
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

const subscription = fromPromise$.subscribe({
  next: function (x) {
    console.log({ x });
  },
  complete: function () {
    console.log("complete");
  },
});

// Marko
// new Observable<T>(subscriptionFunction)

// mapObservable(observable$: Observable): Observable
