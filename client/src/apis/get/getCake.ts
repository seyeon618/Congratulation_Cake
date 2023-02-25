import useSWR from "swr";
import { AxiosError } from "axios";
import { baseUrl } from "@/constant/api";

interface getCakeResponse {
  id: number;
  receiver: string;
  date_of_birth: string;
  cake_design_id: number;
  link: string;
}

function getCake(id: string) {
  const { data, error } = useSWR<getCakeResponse, AxiosError>(id ? `${baseUrl}/cake?cake_id=${id}` : null);

  return {
    data: data,
    isLoading: !error && !data,
    error: error,
  };
}

export default getCake;
