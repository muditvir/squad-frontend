export const addressFormatter = (address: any) => {
  return address?.slice(0, 5) + '...' + address?.slice(-4);
}
export async function copyTextToClipboard(text: any) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
}