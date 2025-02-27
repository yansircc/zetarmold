// Define types for content structure
export interface ContentMedia {
  url?: string;
  thumbnailURL?: string;
  filename?: string;
  sizes?: {
    medium?: {
      url?: string | null;
    };
    small?: {
      url?: string | null;
    };
  };
}

export interface ContentFields {
  media?: ContentMedia;
  blockType?: string;
  [key: string]: unknown;
}

export interface ContentNode {
  type: string;
  children?: ContentNode[];
  text?: string;
  format?: number;
  fields?: ContentFields;
  direction?: 'ltr' | 'rtl' | null;
  textFormat?: string | number;
  tag?: string;
  [key: string]: unknown;
}

export interface ContentRoot {
  children: ContentNode[];
  [key: string]: unknown;
}

export interface ContentStructure {
  root: ContentRoot;
}
