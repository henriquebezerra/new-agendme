// src/hooks/useAvatarUri.ts
import { API_BASE_URL, ENDPOINT_BASE_URL } from '@env';
import { Estabelecimento } from '@/model/estabelecimento.model';

export const useEstabelecimentoAvatarUri = (estabelecimento: Estabelecimento | null) => {
  if (!estabelecimento?.uuidStorage || !estabelecimento?.avatar) {
    return null;
  }

  return `${API_BASE_URL}${ENDPOINT_BASE_URL}${estabelecimento.uuidStorage}/avatar/${estabelecimento.avatar}`;
};