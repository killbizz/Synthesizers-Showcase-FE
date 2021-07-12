export default class Fetcher {
  url: URL;

  constructor(funName: string) {
    this.url = new URL(
      `http://localhost:8080/${funName}`
    );
  }

  async getJSONResponse(method: string, params: string | null = null): Promise<any> {
    let req = null;
    if (method === "GET") {
      req = await fetch(this.url.href, {
        headers: {
          "Content-Type": "application/json",
        }
      });
    } else {
      req = await fetch(this.url.href, {
        body: params,
        headers: {
          "Content-Type": "application/json"
        },
        method,
      });
    }
    if(req.status === 404){
      return {
        error: "error 404, not found"
      }
    }
    if(req.status === 400){
      return {
        error: "error 400, bad request"
      }
    }
    if(req.status === 403){
      return {
        error: "error 403, forbidden"
      }
    }
    const data = req.json();
    return data;
  }
}
