import React, {createContext, Component} from 'react';
import AudioService from "./core/AudioService"
import AudioEventListener from "./AudioEventListener";

export const SoundXContext = createContext();

export class AudioProvider extends Component {
    render() {
        const audio = new AudioService();
        const audioListener = new AudioEventListener(audio)
        return (
            <SoundXContext.Provider value={{
                audio,
                audioListener,
            }}>
                {this.props.children}
            </SoundXContext.Provider>
        );
    }
}

