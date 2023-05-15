import IReceiptDetail from "./ReceiptDetail";
import IUser from "./User";
import IVoucher from "./Voucher";

export default interface IReceipt {
  id: number;
  date: Date;
  cost: number;
  status: string;
  voucher?: IVoucher | null;
  voucherCode?: string | null;
  buyer: IUser;
  userID: string;
  ReceiptDetail: IReceiptDetail[];
}