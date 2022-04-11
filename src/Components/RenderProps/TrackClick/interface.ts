import React from "react";

export interface TrackClickProps {
    renderProps(clickCount: number): React.ReactElement
}

export interface TrackClickState {
    clickCount: number
}