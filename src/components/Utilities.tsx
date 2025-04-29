export const CopyToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
    } catch {
        return false
    } finally {
        return true
    }
}

export type ProjectInfo = {
    path: string; 
    title: string; 
    video?: string; 
    content: string; 
    img: string;
}
