import useSWR from "swr";
import { AxiosError } from "axios";
import { baseUrl } from "@/constant/api";

interface getMessagesResponse {
  id: number;
  image_url: string;
  message: string;
  font_type: number;
}

function getMessages(id: number) {
  const { data, error } = useSWR<getMessagesResponse, AxiosError>(id ? `${baseUrl}/message?cake_id=${id}` : null);

  return {
    data: data,
    isLoading: !error && !data,
    error: error,
  };
}

export default getMessages;
