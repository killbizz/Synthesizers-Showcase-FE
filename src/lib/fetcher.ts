export default class Fetcher {
  url: URL;

  constructor(funName: string) {
    this.url = new URL( // creates the URL based on enviroment variables and the function name
      `http://localhost:8080/${funName}`
    );
  }

  async getJSONResponse(method: string, params: string | null = null): Promise<any> {
    let req = null;
    if (method === "GET") {
      req = await fetch(this.url.href);
    } else {
      req = await fetch(this.url.href, {
        body: params,
        headers: {
          "Content-Type": "application/json"
        },
        method,
      });
    }

    const data = await req.json();
    return data;
  }
}
