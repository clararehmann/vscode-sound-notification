
import * as vscode from 'vscode';
import { SoundManager } from './soundManager';
import { SoundEventType } from './types';

export class EventHandlers {
  private soundManager: SoundManager;
  private disposables: vscode.Disposable[] = [];

  constructor(soundManager: SoundManager) {
    this.soundManager = soundManager;
    this.registerEventHandlers();
  }

  private registerEventHandlers(): void {
    // File save events
    this.disposables.push(
      vscode.workspace.onDidSaveTextDocument(() => {
        this.soundManager.playSound(SoundEventType.SAVE);
      })
    );
    // File open events
    this.disposables.push(
      vscode.workspace.onDidOpenTextDocument(() => {
        this.soundManager.playSound(SoundEventType.OPEN);
      })
    );
    // File delete events
    this.disposables.push(
      vscode.workspace.onDidDeleteFiles(() => {
        this.soundManager.playSound(SoundEventType.DELETE);
      })
    );
    // Play sound when a task (like build/run) starts
    this.disposables.push(
      vscode.tasks.onDidStartTask(() => {
        this.soundManager.playSound(SoundEventType.DOWNLOAD);
      })
    );
    // Play sound when a debug session starts (code run/debug)
    this.disposables.push(
      vscode.debug.onDidStartDebugSession(() => {
        this.soundManager.playSound(SoundEventType.DOWNLOAD);
      })
    );
  }

  public dispose(): void {
    this.disposables.forEach(disposable => disposable.dispose());
    this.disposables = [];
  }
}
