export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const eventOptions: readonly ColourOption[] = [
  {
    value: "Entrepreneurship & Brand Building",
    label: "Entrepreneurship & Brand Building",
    color: "#00B8D9",
    isFixed: true,
  },
  { value: "Women Empowerment", label: "Women Empowerment", color: "#0052CC" },
  {
    value: "Mental Health &  Well-being",
    label: "Mental Health &  Well-being",
    color: "#5243AA",
  },
  {
    value: "Emerging Technologies",
    label: "Emerging Technologies",
    color: "#FF5630",
  },
  {
    value: "Tackling Human Trafficking & Self Defence",
    label: "Tackling Human Trafficking & Self Defence",
    color: "#FF8B00",
  },
  {
    value: "Soft Skills & Personality Development",
    label: "Soft Skills & Personality Development",
    color: "#FFC400",
  },
  {
    value: "Basic Laws & Rights",
    label: "Basic Laws & Rights",
    color: "#36B37E",
  },
];

export const compOptions: readonly ColourOption[] = [
  {
    value: "Campus Arts",
    label: "Campus Arts",
    color: "#00B8D9",
    isFixed: true,
  },
  { value: "Campus Gallery", label: "Campus Gallery", color: "#0052CC" },
  { value: "Campus Writings", label: "Campus Writings", color: "#5243AA" },
  { value: "Campus Speaks", label: "Campus Speaks", color: "#FF5630" },
  { value: "Campus Poses", label: "Campus Poses", color: "#FF8B00" },
  { value: "Campus Acts", label: "Campus Acts", color: "#FFC400" },
];
