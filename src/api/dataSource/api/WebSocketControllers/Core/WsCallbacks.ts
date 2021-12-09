import { WebApiService } from '../../plugins/webApiService'
import { Events } from '../../plugins/events'
import EventToAsyncDecorator from '../../plugins/eventToAsyncDecorator'
import WsResponseModel from '../../SchemaBuilderServer/Models/WsResponseModel';
import ProgressMessageModel from '../../WebSocketControllers/Core/Models/ProgressMessageModel';

export default class WsCallbacks {
	webApiService: WebApiService;
	UploadMessageProgressEvent = new Events<WsResponseModel<ProgressMessageModel>>();
	ErrorProcessAuthorizationEvent = new Events<WsResponseModel<Boolean>>();
	UnAuthorizedEvent = new Events<WsResponseModel<Boolean>>();
	AuthorizedEvent = new Events<WsResponseModel<Boolean>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('WsCallbacks', 'UploadMessageProgress', (res: WsResponseModel<ProgressMessageModel>) => {
			self.UploadMessageProgressEvent.trigger(res);
		});
		webApiService.on('WsCallbacks', 'ErrorProcessAuthorization', (res: WsResponseModel<Boolean>) => {
			self.ErrorProcessAuthorizationEvent.trigger(res);
		});
		webApiService.on('WsCallbacks', 'UnAuthorized', (res: WsResponseModel<Boolean>) => {
			self.UnAuthorizedEvent.trigger(res);
		});
		webApiService.on('WsCallbacks', 'Authorized', (res: WsResponseModel<Boolean>) => {
			self.AuthorizedEvent.trigger(res);
		});
	}
	UploadMessageProgress() { 	
        this.webApiService.send('WsCallbacks', 'UploadMessageProgress' );
    }
	ErrorProcessAuthorization() { 	
        this.webApiService.send('WsCallbacks', 'ErrorProcessAuthorization' );
    }
	UnAuthorized() { 	
        this.webApiService.send('WsCallbacks', 'UnAuthorized' );
    }
	Authorized() { 	
        this.webApiService.send('WsCallbacks', 'Authorized' );
    }
	 // async methods
	async uploadMessageProgressAsync(): Promise<ProgressMessageModel> {
		return EventToAsyncDecorator.getInstance().bind(this.UploadMessageProgress.bind(this), this.UploadMessageProgressEvent)();
	}
	async errorProcessAuthorizationAsync(): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ErrorProcessAuthorization.bind(this), this.ErrorProcessAuthorizationEvent)();
	}
	async unAuthorizedAsync(): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.UnAuthorized.bind(this), this.UnAuthorizedEvent)();
	}
	async authorizedAsync(): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.Authorized.bind(this), this.AuthorizedEvent)();
	}
}