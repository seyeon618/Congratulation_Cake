import useSWR from "swr";
import { AxiosError } from "axios";
import { baseUrl } from "@/constant/api";

interface getPwConfirmResponse {
  status: string;
}

function getPwConfirm(id: number) {
  const { data, error } = useSWR<getPwConfirmResponse, AxiosError>(id ? `${baseUrl}/cake/${id}/admin` : null);

  return {
    data: data,
    isLoading: !error && !data,
    error: error,
  };
}

export default getPwConfirm;
