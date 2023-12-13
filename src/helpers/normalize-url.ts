const __removeProtocol = (url: string) => url.replace(/^http(s?):\/\//, "");
const __removeWww = (url: string) => url.replace(/^www\./, "");

export default (url: string): string => [url]
  .map(__removeProtocol)
  .map(__removeWww)
  .pop() as string;

export const appendTrailingSlashIfMissing = (url: string) => url.split("/").length === 1 ? `${url}/` : url;
