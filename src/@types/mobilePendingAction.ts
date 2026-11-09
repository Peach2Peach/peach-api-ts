
type MobilePendingActionStatus = "successful" | "failure" | "pending" | "overtaken"

export type MobilePendingActionRefund = {
    id: number;
    userId: string; 
    offerId: number;
    creationDate: Date;
    payload: string;
    status: MobilePendingActionStatus;
    } 

export type MobilePendingActionContract = {
    id: number;
    userId: string;
    contractId: string;
    creationDate: Date;
    payload: string;
    status: MobilePendingActionStatus;
    }

export type MobilePendingActionFundEscrow = {
    id: number;
    userId: string;
    offerId: number;
    creationDate: Date;
    payload: string;
    status: MobilePendingActionStatus;
    }

export type MobilePendingActionSubmitBuyOfferProof = {
    id: number;
    userId: string;
    buyOfferId: number;
    creationDate: Date;
    status: MobilePendingActionStatus;
    }

export type MobilePendingActionFundMultipleEscrow = {
    id: number;
    userId: string;
    creationDate: Date;
    payload: string;
    status: MobilePendingActionStatus;
    }