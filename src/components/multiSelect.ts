export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const eventOptions: readonly ColourOption[] = [
  {
    value: "Entrepreneurship",
    label: "Entrepreneurship & Brand Building",
    color: "#00B8D9",
    isFixed: true,
  },
  { value: "Women-Empowerment", label: "Women Empowerment", color: "#0052CC" },
  { value: "purple", label: "Mental Health &  Well-being", color: "#5243AA" },
  {
    value: "Emerging-Technologies",
    label: "Emerging Technologies",
    color: "#FF5630",
  },
  {
    value: "Tacking-Human",
    label: "Tackling Human Trafficking & Self Defence",
    color: "#FF8B00",
  },
  {
    value: "Soft-Skills",
    label: "Soft Skills & Personality Development",
    color: "#FFC400",
  },
  { value: "Basic-Laws", label: "Basic Laws & Rights", color: "#36B37E" },
];

export const compOptions: readonly ColourOption[] = [
  {
    value: "Campus arts",
    label: "Campus Arts",
    color: "#00B8D9",
    isFixed: true,
  },
  { value: "Campus gallery", label: "Campus Gallery", color: "#0052CC" },
  { value: "Campus writings", label: "Campus Writings", color: "#5243AA" },
  { value: "Campus speaks", label: "Campus Speaks", color: "#FF5630" },
  { value: "Campus poses", label: "Campus Poses", color: "#FF8B00" },
  { value: "Campus acts", label: "Campus Acts", color: "#FFC400" },
];
