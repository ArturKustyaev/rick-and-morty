export const getLastUrlParam = (url: string): string => {
    return url.substring(url.lastIndexOf('/') + 1)
}