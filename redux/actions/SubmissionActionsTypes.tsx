export const SUBMIT = "SUBMIT";

export interface Submit {
    sending?: boolean;
    sendingMessage?: string;
    success?: boolean;
    successMessage?: string;
    error?: boolean;
    errorMessage?: string;
}

export interface SUBMITTING {
    type: typeof SUBMIT;
    payload: Submit;
}

export type SubmitDispatchTypes = SUBMITTING;