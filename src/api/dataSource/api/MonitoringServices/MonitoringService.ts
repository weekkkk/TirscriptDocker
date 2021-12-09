import { WebApiService } from '../plugins/webApiService'
import { Events } from '../plugins/events'
import EventToAsyncDecorator from '../plugins/eventToAsyncDecorator'
import GetStatsRequest from '../Docker/IMonitoringService/Request/GetStatsRequest';
import WsResponseModel from '../SchemaBuilderServer/Models/WsResponseModel';
import ContainerStatisticsResponse from '../IMonitoringService/Response/ContainerStatisticsResponse';

export default class MonitoringService {
	webApiService: WebApiService;
	GetMonitoringContainerStatsEvent = new Events<WsResponseModel<ContainerStatisticsResponse>>();
	CancelAllMonitoringEvent = new Events<WsResponseModel<Boolean>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('MonitoringService', 'GetMonitoringContainerStats', (res: WsResponseModel<ContainerStatisticsResponse>) => {
			self.GetMonitoringContainerStatsEvent.trigger(res);
		});
		webApiService.on('MonitoringService', 'CancelAllMonitoring', (res: WsResponseModel<Boolean>) => {
			self.CancelAllMonitoringEvent.trigger(res);
		});
	}
	GetMonitoringContainerStats(request: GetStatsRequest = null) { 	
        this.webApiService.send('MonitoringService', 'GetMonitoringContainerStats' , request);
    }
	CancelAllMonitoring() { 	
        this.webApiService.send('MonitoringService', 'CancelAllMonitoring' );
    }
	 // async methods
	async getMonitoringContainerStatsAsync(request: GetStatsRequest = null): Promise<ContainerStatisticsResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetMonitoringContainerStats.bind(this), this.GetMonitoringContainerStatsEvent)(request);
	}
	async cancelAllMonitoringAsync(): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.CancelAllMonitoring.bind(this), this.CancelAllMonitoringEvent)();
	}
}