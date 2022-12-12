import React from "react";
import type { ElementCallback } from "../interfaces/Element";
declare const makeStyleFrom: {
    (baseElement: any): React.ExoticComponent<{
        children?: React.ReactNode;
    }>;
    View(callback: ElementCallback): {
        new (props: import("../components/View")._ViewProps | Readonly<import("../components/View")._ViewProps>): {
            context: unknown;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("../components/View")._ViewProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            render(): React.ReactNode;
            readonly props: Readonly<import("../components/View")._ViewProps>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../components/View")._ViewProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../components/View")._ViewProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<import("../components/View")._ViewProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../components/View")._ViewProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../components/View")._ViewProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../components/View")._ViewProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../components/View")._ViewProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: import("../components/View")._ViewProps, context: any): {
            context: unknown;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("../components/View")._ViewProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            render(): React.ReactNode;
            readonly props: Readonly<import("../components/View")._ViewProps>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../components/View")._ViewProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../components/View")._ViewProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<import("../components/View")._ViewProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../components/View")._ViewProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../components/View")._ViewProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../components/View")._ViewProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../components/View")._ViewProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        contextType?: React.Context<any> | undefined;
    };
    Text(callback: ElementCallback): {
        new (props: import("../components/Text")._TextProps | Readonly<import("../components/Text")._TextProps>): {
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("../components/Text")._TextProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            render(): React.ReactNode;
            readonly props: Readonly<import("../components/Text")._TextProps>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../components/Text")._TextProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../components/Text")._TextProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<import("../components/Text")._TextProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../components/Text")._TextProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../components/Text")._TextProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../components/Text")._TextProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../components/Text")._TextProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: import("../components/Text")._TextProps, context: any): {
            context: unknown;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("../components/Text")._TextProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            render(): React.ReactNode;
            readonly props: Readonly<import("../components/Text")._TextProps>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../components/Text")._TextProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../components/Text")._TextProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<import("../components/Text")._TextProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../components/Text")._TextProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../components/Text")._TextProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../components/Text")._TextProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../components/Text")._TextProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        contextType?: React.Context<any> | undefined;
    };
};
export default makeStyleFrom;
