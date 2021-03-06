// There are no Neutralino types available on the npm, therefore you have to write the types by yourself
// Refer to https://neutralino.js.org/docs/api/overview

import { DirectoryItem } from "generic/generic";

export interface DirectoryEntry {
  entry: string;
  type: DirectoryItem;
}

export interface Filter {
  name: string;
  extensions: string[];
}

export interface ShowOpenDialogOptions {
  filters: Filter[];
  multiSelections?: boolean;
}

export interface ShowSaveDialogOptions {
  filters: Filter[];
  forceOverwrite?: boolean;
}

export interface NeutralinoFileSystem {
  readDirectory: (path: string) => Promise<DirectoryEntry[]>;
  readFile: <Content>(path: string) => Promise<Content>;
  writeFile: (fileName: string, content: string) => Promise<void>;
}

export interface NeutralinoOS {
  showOpenDialog: (
    title: string,
    options: ShowOpenDialogOptions
  ) => Promise<string[]>;
  showSaveDialog: (
    title: string,
    options: ShowSaveDialogOptions
  ) => Promise<string>;
}

export interface Neutralino {
  init: () => void;
  filesystem: NeutralinoFileSystem;
  os: NeutralinoOS;
}

declare global {
  interface Window {
    Neutralino: Neutralino;
  }
}

let neutralino: Neutralino;
if (typeof window !== "undefined") {
  neutralino = window.Neutralino;
}

export { neutralino };
