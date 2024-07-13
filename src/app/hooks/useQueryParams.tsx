import { usePathname, useRouter } from "next/navigation";

export const useQueryParams = () => {
  const pathname = usePathname();
  const router = useRouter();

  const setQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams();
    params.set(key, value);

    router.push(pathname + "?" + params);
  };

  return [setQueryParams];
};
