export interface Option {
  value: string;
  label: string;
  disable?: boolean;
  /** fixed option that can't be removed. */
  fixed?: boolean;
  /** Group the options by providing key. */
  [key: string]: string | boolean | undefined;
}

export interface GroupOption {
  [key: string]: Option[];
}
