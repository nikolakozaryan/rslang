import React from 'react';
import SERVER from '../../../common/constants/serverConst';

const AudioButton = (props: { audio: string }) => <audio src={`${SERVER}/${props.audio}`} />;

export default AudioButton;
