// message.attachment.ts

export type Attachment = 
    | { 
        type: "image";
        url: string;
        width: number;
        height: number;
    }
    | { 
        type: "file";
        fileName: string;
        size: number;
    }
    | {
        type: "link";
        url: string;
        preview?: string;
    }