import React from 'react';
declare class IncrementalExample extends React.Component<unknown, {
    stats: any | null | undefined;
}> {
    static title: string;
    static description: string;
    start: number;
    constructor(props: unknown, context: unknown);
    _onDone(): void;
    render(): React.ReactNode;
}
export default IncrementalExample;
