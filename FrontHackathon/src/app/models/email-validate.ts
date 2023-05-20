export interface ValidateEmailRequest{
    text : string;
    desconocido : boolean;
    tieneMuchosLinks : boolean;

}

export interface ValidateEmailResponse{
    text : string;
    isSpam : boolean;
    error : boolean;

}