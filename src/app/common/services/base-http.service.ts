import { environment } from 'src/environments/environment';

export class BaseHttpService {
    public apiUrl: string = environment.apiEndpoint;
}