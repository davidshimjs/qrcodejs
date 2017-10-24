declare module 'qrcodejs2' {
    export class QRCode {
        constructor(containingElement: HTMLElement, config?: QRCodeConfig);

        static CorrectLevel: CorrectLevel;

        clear(): void;

        makeCode(text: string);
    }

    interface QRCodeConfig {
        text?: string;
        width?: number;
        height?: number;
        colorDark?: string;
        colorLight?: string;
        correctLevel?: number;
    }

    interface CorrectLevel {
        L: number;
        M: number;
        Q: number;
        H: number;
    }

    export default QRCode;
}
