export class VoucherDetail {
    Description: string;
    ExpireDate: string;
    ImageUrl: string;
    QRCodeImageUrl: string;
    Tag: string;
    constructor(){}   
}
export class VoucherState {
    Code: number;
    Message: string;
    VoucherDetail: VoucherDetail;

    constructor(){};
}