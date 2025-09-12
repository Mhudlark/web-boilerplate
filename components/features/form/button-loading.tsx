import { Loader2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ButtonLoadingProps extends React.ComponentProps<typeof Button> {
  isLoading?: boolean;
}

export function ButtonLoading({
  isLoading = false,
  children,
  ...props
}: ButtonLoadingProps) {
  return (
    <Button disabled={isLoading} {...props}>
      {isLoading && <Loader2Icon className="animate-spin" />}
      {children}
    </Button>
  );
}
