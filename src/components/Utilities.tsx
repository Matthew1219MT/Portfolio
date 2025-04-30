export type Project = {
    path: string,
    title: string,
    video?: string,
    description: string,
    content: string[],
    img: string,
    tools: string[],
    languages: string[],
    gallery: string,
    imageCount: number
}

export const shuffle = (array: any[]): any[] => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
