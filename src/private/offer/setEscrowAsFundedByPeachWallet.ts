import {
  SetEscrowAsFundedByPeachWalletErrorResponseBody,
  SetEscrowAsFundedByPeachWalletRequestBody,
  SetEscrowAsFundedByPeachWalletRequestParams,
  SetEscrowAsFundedByPeachWalletRequestQuery,
  SetEscrowAsFundedByPeachWalletResponseBody
} from "../../@types/api/offerAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  SetEscrowAsFundedByPeachWalletRequestParams &
  SetEscrowAsFundedByPeachWalletRequestQuery &
  SetEscrowAsFundedByPeachWalletRequestBody;

export const setEscrowAsFundedByPeachWallet =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, signal }: Props) => {
    const response = await helpers.fetchWithAuth(
      `${url}/v1/offer/${offerId}/escrow/setAsFundedByPeachWallet`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        signal,
      },
    );

    return parseResponse<
      SetEscrowAsFundedByPeachWalletResponseBody,
      SetEscrowAsFundedByPeachWalletErrorResponseBody
    >(response);
  };
