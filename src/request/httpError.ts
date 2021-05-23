import { notification } from 'ant-design-vue';
import { AxiosResponse } from 'axios';

enum HttpErrorStatus {
  unauthorized = 401,
}
class HttpError {
  errorNotice(error: any): void {
    console.dir(error);
    const response: AxiosResponse = error?.response;
    const status = response.status;
    const message = error?.message;

    if (status === HttpErrorStatus.unauthorized) {
      notification.error({
        message: status,
        description: message,
      });
    }
  }
}

export default new HttpError();
