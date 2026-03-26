
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