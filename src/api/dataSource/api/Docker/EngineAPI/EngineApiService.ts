import { WebApiService } from '../../plugins/webApiService'
import { Events } from '../../plugins/events'
import EventToAsyncDecorator from '../../plugins/eventToAsyncDecorator'
import BuildImageRequest from '../../Docker/IEngineAPI/Request/BuildImageRequest';
import CreateContainerRequest from '../../Docker/IEngineAPI/Request/CreateContainerRequest';
import StartContainerManuallyRequest from '../../Docker/IEngineAPI/Request/StartContainerManuallyRequest';
import StartAllContainersManuallyRequest from '../../Docker/IEngineAPI/Request/StartAllContainersManuallyRequest';
import PublishImageRequest from '../../Docker/IEngineAPI/Request/PublishImageRequest';
import PublishImageBySchemaRequest from '../../Docker/IEngineAPI/Request/PublishImageBySchemaRequest';
import PublishImageByReleaseServersRequest from '../../Docker/IEngineAPI/Request/PublishImageByReleaseServersRequest';
import GetLogImageRequest from '../../Docker/IEngineAPI/Log/GetLogImageRequest';
import WsResponseModel from '../../SchemaBuilderServer/Models/WsResponseModel';

export default class EngineApiService {
	webApiService: WebApiService;
	BuildImageFromDockerfileAsyncEvent = new Events<WsResponseModel<Boolean>>();
	CreateContainersAsyncEvent = new Events<WsResponseModel<Boolean>>();
	StartOneContainerManuallyAsyncEvent = new Events<WsResponseModel<Boolean>>();
	StartAllContainersManuallyAsyncEvent = new Events<WsResponseModel<Boolean>>();
	PublishImageEvent = new Events<WsResponseModel<Boolean>>();
	PublishImageBySchemaEvent = new Events<WsResponseModel<Boolean>>();
	PublishImageByReleaseServersEvent = new Events<WsResponseModel<Boolean>>();
	SelfBuildEvent = new Events<WsResponseModel<Boolean>>();
	SelfPublishEvent = new Events<WsResponseModel<Boolean>>();
	GetSelfBuildLogsEvent = new Events<WsResponseModel<String>>();
	GetLogsEvent = new Events<WsResponseModel<String>>();
	CancelEvent = new Events<WsResponseModel<Boolean>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('EngineApiService', 'BuildImageFromDockerfileAsync', (res: WsResponseModel<Boolean>) => {
			self.BuildImageFromDockerfileAsyncEvent.trigger(res);
		});
		webApiService.on('EngineApiService', 'CreateContainersAsync', (res: WsResponseModel<Boolean>) => {
			self.CreateContainersAsyncEvent.trigger(res);
		});
		webApiService.on('EngineApiService', 'StartOneContainerManuallyAsync', (res: WsResponseModel<Boolean>) => {
			self.StartOneContainerManuallyAsyncEvent.trigger(res);
		});
		webApiService.on('EngineApiService', 'StartAllContainersManuallyAsync', (res: WsResponseModel<Boolean>) => {
			self.StartAllContainersManuallyAsyncEvent.trigger(res);
		});
		webApiService.on('EngineApiService', 'PublishImage', (res: WsResponseModel<Boolean>) => {
			self.PublishImageEvent.trigger(res);
		});
		webApiService.on('EngineApiService', 'PublishImageBySchema', (res: WsResponseModel<Boolean>) => {
			self.PublishImageBySchemaEvent.trigger(res);
		});
		webApiService.on('EngineApiService', 'PublishImageByReleaseServers', (res: WsResponseModel<Boolean>) => {
			self.PublishImageByReleaseServersEvent.trigger(res);
		});
		webApiService.on('EngineApiService', 'SelfBuild', (res: WsResponseModel<Boolean>) => {
			self.SelfBuildEvent.trigger(res);
		});
		webApiService.on('EngineApiService', 'SelfPublish', (res: WsResponseModel<Boolean>) => {
			self.SelfPublishEvent.trigger(res);
		});
		webApiService.on('EngineApiService', 'GetSelfBuildLogs', (res: WsResponseModel<String>) => {
			self.GetSelfBuildLogsEvent.trigger(res);
		});
		webApiService.on('EngineApiService', 'GetLogs', (res: WsResponseModel<String>) => {
			self.GetLogsEvent.trigger(res);
		});
		webApiService.on('EngineApiService', 'Cancel', (res: WsResponseModel<Boolean>) => {
			self.CancelEvent.trigger(res);
		});
	}
	BuildImageFromDockerfileAsync(request: BuildImageRequest = null) { 	
        this.webApiService.send('EngineApiService', 'BuildImageFromDockerfileAsync' , request);
    }
	CreateContainersAsync(request: CreateContainerRequest = null) { 	
        this.webApiService.send('EngineApiService', 'CreateContainersAsync' , request);
    }
	StartOneContainerManuallyAsync(request: StartContainerManuallyRequest = null) { 	
        this.webApiService.send('EngineApiService', 'StartOneContainerManuallyAsync' , request);
    }
	StartAllContainersManuallyAsync(request: StartAllContainersManuallyRequest = null) { 	
        this.webApiService.send('EngineApiService', 'StartAllContainersManuallyAsync' , request);
    }
	PublishImage(request: PublishImageRequest = null) { 	
        this.webApiService.send('EngineApiService', 'PublishImage' , request);
    }
	PublishImageBySchema(request: PublishImageBySchemaRequest = null) { 	
        this.webApiService.send('EngineApiService', 'PublishImageBySchema' , request);
    }
	PublishImageByReleaseServers(request: PublishImageByReleaseServersRequest = null) { 	
        this.webApiService.send('EngineApiService', 'PublishImageByReleaseServers' , request);
    }
	SelfBuild() { 	
        this.webApiService.send('EngineApiService', 'SelfBuild' );
    }
	SelfPublish() { 	
        this.webApiService.send('EngineApiService', 'SelfPublish' );
    }
	GetSelfBuildLogs() { 	
        this.webApiService.send('EngineApiService', 'GetSelfBuildLogs' );
    }
	GetLogs(request: GetLogImageRequest = null) { 	
        this.webApiService.send('EngineApiService', 'GetLogs' , request);
    }
	Cancel() { 	
        this.webApiService.send('EngineApiService', 'Cancel' );
    }
	 // async methods
	async buildImageFromDockerfileAsyncAsync(request: BuildImageRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.BuildImageFromDockerfileAsync.bind(this), this.BuildImageFromDockerfileAsyncEvent)(request);
	}
	async createContainersAsyncAsync(request: CreateContainerRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.CreateContainersAsync.bind(this), this.CreateContainersAsyncEvent)(request);
	}
	async startOneContainerManuallyAsyncAsync(request: StartContainerManuallyRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.StartOneContainerManuallyAsync.bind(this), this.StartOneContainerManuallyAsyncEvent)(request);
	}
	async startAllContainersManuallyAsyncAsync(request: StartAllContainersManuallyRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.StartAllContainersManuallyAsync.bind(this), this.StartAllContainersManuallyAsyncEvent)(request);
	}
	async publishImageAsync(request: PublishImageRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.PublishImage.bind(this), this.PublishImageEvent)(request);
	}
	async publishImageBySchemaAsync(request: PublishImageBySchemaRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.PublishImageBySchema.bind(this), this.PublishImageBySchemaEvent)(request);
	}
	async publishImageByReleaseServersAsync(request: PublishImageByReleaseServersRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.PublishImageByReleaseServers.bind(this), this.PublishImageByReleaseServersEvent)(request);
	}
	async selfBuildAsync(): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.SelfBuild.bind(this), this.SelfBuildEvent)();
	}
	async selfPublishAsync(): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.SelfPublish.bind(this), this.SelfPublishEvent)();
	}
	async getSelfBuildLogsAsync(): Promise<String> {
		return EventToAsyncDecorator.getInstance().bind(this.GetSelfBuildLogs.bind(this), this.GetSelfBuildLogsEvent)();
	}
	async getLogsAsync(request: GetLogImageRequest = null): Promise<String> {
		return EventToAsyncDecorator.getInstance().bind(this.GetLogs.bind(this), this.GetLogsEvent)(request);
	}
	async cancelAsync(): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.Cancel.bind(this), this.CancelEvent)();
	}
}