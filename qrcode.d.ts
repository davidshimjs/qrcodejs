declare class QRCode {
	static CorrectLevel: {
		L: 1;
		M: 0;
		Q: 3;
		H: 2;
	}

	constructor(el: HTMLElement, optionsOrText: string | {
		width?: number;
		height?: number;
		text?: string;
		colorDark?: string;
		colorLight?: string;
		correctLevel?: 0|1|2|3;
	});

	clear(): void;
	makeCode(text: string): void;
	makeImage(): void;
}

