export const isresponseJSON = (response) => {
    const contentType = response.headers.get("content-type");
    return contentType.indexOf("application/json") !== -1;
}
