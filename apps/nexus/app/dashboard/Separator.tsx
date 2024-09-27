import { classNames } from "@/utils/style";

type Props = {
  className: string;
};
export const Separator = ({ className }: Props) => {
  return (
    <div
      aria-hidden="true"
      className={classNames("bg-gray-900/10", className)}
    />
  );
};
