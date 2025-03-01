import { ExternalToast, toast } from "sonner";

export const useToast = () => {
  return (
    msg: (() => React.ReactNode) | React.ReactNode,
    options: ExternalToast
  ) => toast(msg, options);
};
