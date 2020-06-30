export interface LabelProps {
  fontSize?: string;
  children?: string;
  textAlign?: "center" | "left" | "right";
  fontWeight?: "bold" | "medium" | "nomal";
  fontColor?: string;
  style?: React.CSSProperties;
}

export interface InputProps {
  width?: string;
  height?: string;
  borderRadius?: boolean;
  onChange?: (text: string, name?: string) => void;
  name?: string;
  value?: string;
  style?: React.CSSProperties;
  fontSize?: string;
}
