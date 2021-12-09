import { WebApiService } from '../../plugins/webApiService'
import { Events } from '../../plugins/events'
import EventToAsyncDecorator from '../../plugins/eventToAsyncDecorator'
import WsResponseModel from '../../SchemaBuilderServer/Models/WsResponseModel';

export default class WsStateWsController {
	webApiService: WebApiService;
	PingEvent = new Events<WsResponseModel<Boolean>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('WsStateWsController', 'Ping', (res: WsResponseModel<Boolean>) => {
			self.PingEvent.trigger(res);
		});
	}
	Ping() { 	
        this.webApiService.send('WsStateWsController', 'Ping' );
    }
	 // async methods
	async pingAsync(): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.Ping.bind(this), this.PingEvent)();
	}
}