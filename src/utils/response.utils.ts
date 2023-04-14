import MESSAGE from "../enums/message.enum";
import ResponseInterface from "../interfaces/response.interface";
import STATUS from "../enums/status.enum";

class ResponseUtils implements ResponseInterface {
  private status: STATUS = STATUS.SUCCESS;
  private message: MESSAGE = MESSAGE.SUCCESS;
  private data?: any;

  setStatus(_status: STATUS): ResponseUtils {
    this.status = _status;
    return this;
  }

  setMessage(_message: MESSAGE): ResponseUtils {
    this.message = _message;
    return this;
  }

  setData(data: any): any | ResponseUtils {
    this.data = data;
    return this;
  }

  getStatus(): number {
    return this.status;
  }

  getMessage(): string {
    return this.message;
  }

  getData(): any | undefined {
    return this.data;
  }
}

export default ResponseUtils;
