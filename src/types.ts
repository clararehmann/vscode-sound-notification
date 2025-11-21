export type SoundProfileName = 'default' | 'gunshot';

export interface SoundProfile {
  name: SoundProfileName;
  sounds: {
    [key in SoundEventType]?: string;
  };
}
import * as vscode from 'vscode';

export interface SoundEvent {
  name: string;
  enabled: boolean;
  customSoundPath?: string;
}

export interface SoundConfiguration {
  enabled: boolean;
  volume: number;
  events: {
    onSave: boolean;
    onDelete: boolean;
    onOpen: boolean;
    onDownload: boolean;
  };
  customSounds: {
    save: string;
    delete: string;
    open: string;
    download: string;
  };
  soundProfile?: SoundProfileName;
}

export interface SoundFile {
  name: string;
  path: string;
  type: 'default' | 'custom';
}

export enum SoundEventType {
  SAVE = 'save',
  DELETE = 'delete',
  OPEN = 'open',
  DOWNLOAD = 'download',
}
export interface PlaySoundOptions {
  volume?: number;
  customPath?: string;
}

export interface SoundManagerOptions {
  defaultSoundsPath: string;
  volume: number;
}
