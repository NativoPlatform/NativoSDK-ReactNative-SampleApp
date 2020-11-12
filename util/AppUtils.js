export const GetFormattedDate = (dateProps) => {
    const date = new Date(dateProps);
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}