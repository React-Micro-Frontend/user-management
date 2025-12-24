declare module "customMain/TailwindStyles" {
  const content: string;
  export default content;
}

declare module "customMain/components/shared" {
  export const PageHeader: React.FC<{ title: string; description?: string }>;
  export const StatCard: React.FC<{ title: string; value: string | number; icon: string; color?: "emerald" | "blue" | "purple" | "orange" | "red" | "yellow" }>;
  export const Card: React.FC<{ children: React.ReactNode; className?: string }>;
  export const InfoCard: React.FC<{ title: string; value: string | number; color?: "emerald" | "blue" | "orange" | "red" | "yellow" | "purple" }>;
  export const SearchInput: React.FC<{ placeholder?: string; value?: string; onChange?: (value: string) => void }>;
  export const Button: React.FC<{ children: React.ReactNode; onClick?: () => void; variant?: "primary" | "secondary" | "danger" | "success"; size?: "sm" | "md" | "lg"; className?: string; type?: "button" | "submit" | "reset" }>;
  export const Avatar: React.FC<{ initials: string; size?: "sm" | "md" | "lg"; color?: string }>;
  export const LoadingSpinner: React.FC<{ message?: string; size?: "sm" | "md" | "lg" }>;
  export const QuickLinkCard: React.FC<{ title: string; description: string; onClick?: () => void }>;
}

declare module "customMain/PageHeader" {
  const PageHeader: React.FC<{ title: string; description?: string }>;
  export default PageHeader;
}

declare module "customMain/StatCard" {
  const StatCard: React.FC<{ title: string; value: string | number; icon: string; color?: "emerald" | "blue" | "purple" | "orange" | "red" | "yellow" }>;
  export default StatCard;
}

declare module "customMain/Card" {
  const Card: React.FC<{ children: React.ReactNode; className?: string }>;
  export default Card;
}

declare module "customMain/Button" {
  const Button: React.FC<{ children: React.ReactNode; onClick?: () => void; variant?: "primary" | "secondary" | "danger" | "success"; size?: "sm" | "md" | "lg"; className?: string; type?: "button" | "submit" | "reset" }>;
  export default Button;
}
