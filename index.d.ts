declare interface IObservable<T> {
    pipe: Function,
    subscribe: Function,
    forEach: Function,
    toPromise: () => Promise<T>,
}

declare function
    streamToObservable<T = any, U extends IObservable<T> = IObservable<T>>(
        stream: ReadableStream,
        options?: streamToObservable
            .IStreamToObservableOptions<T>
    ): U;

declare namespace streamToObservable {
    interface IStreamToObservableOptions<T> {
        await?: Promise<T>;
        endEvent?: 'end' | string;
        errorEvent?: 'error' | string;
        dataEvent?: 'data' | string;
        test: T
    }
}

export = streamToObservable;
