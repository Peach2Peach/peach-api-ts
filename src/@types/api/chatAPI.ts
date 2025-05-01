export type Message = {
  roomId: string;
  from: string;
  date: Date;
  message: string;
  decrypted?: boolean;
  readBy: string[];
  signature: string;
  failedToSend?: boolean;
};
