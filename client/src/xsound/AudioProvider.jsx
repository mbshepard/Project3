import React, {createContext, Component} from 'react';
import ServiceX from "../xsound/ServiceX"
import AudioEventListener from "./AudioEventListener";

export const SoundXContext = createContext();

export class AudioProvider extends Component {
    render() {
        const audio = new ServiceX();
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

