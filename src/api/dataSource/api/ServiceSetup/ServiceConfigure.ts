import { WebApiService } from '../plugins/webApiService'
import { Events } from '../plugins/events'
import EventToAsyncDecorator from '../plugins/eventToAsyncDecorator'
import AddServiceRequest from '../IServiceSetup/Request/AddServiceRequest';
import AddImageInfoRequest from '../IServiceSetup/Request/AddImageInfoRequest';
import EditServiceRequest from '../IServiceSetup/Request/EditServiceRequest';
import EditImageInfoRequest from '../IServiceSetup/Request/EditImageInfoRequest';
import UpImageVersionRequest from '../Docker/IServiceSetup/Request/ImageInfo/UpImageVersionRequest';
import UploadDockerfileRequest from '../IServiceSetup/Request/UploadDockerfileRequest';
import DownloadDockerfileRequest from '../IServiceSetup/Request/DownloadDockerfileRequest';
import RemoveImageRequest from '../IServiceSetup/Request/RemoveImageRequest';
import RemoveServiceRequest from '../IServiceSetup/Request/Service/RemoveServiceRequest';
import GetImageRequest from '../IServiceSetup/Request/ImageInfo/GetImageRequest';
import GetListImageRequest from '../IServiceSetup/Request/ImageInfo/GetListImageRequest';
import GetServiceRequest from '../IServiceSetup/Request/GetServiceRequest';
import GetListServiceRequest from '../IServiceSetup/Request/Service/GetListServiceRequest';
import WsResponseModel from '../SchemaBuilderServer/Models/WsResponseModel';
import GetImageInfoResponse from '../IServiceSetup/Response/GetImageInfoResponse';
import DockerfileResponse from '../IServiceSetup/Response/DockerfileResponse';
import GetListImageInfoResponse from '../IServiceSetup/Response/GetListImageInfoResponse';
import GetServiceResponse from '../IServiceSetup/Response/GetServiceResponse';
import GetListServiceResponse from '../IServiceSetup/Response/GetListServiceResponse';

export default class ServiceConfigure {
	webApiService: WebApiService;
	AddServiceToProjectEvent = new Events<WsResponseModel<Boolean>>();
	AddImageInfoEvent = new Events<WsResponseModel<Boolean>>();
	EditServiceEvent = new Events<WsResponseModel<Boolean>>();
	EditImageInfoEvent = new Events<WsResponseModel<Boolean>>();
	UpImageVersionEvent = new Events<WsResponseModel<GetImageInfoResponse>>();
	UploadDockerfileEvent = new Events<WsResponseModel<Boolean>>();
	DownloadDockerfileEvent = new Events<WsResponseModel<DockerfileResponse>>();
	RemoveImageEvent = new Events<WsResponseModel<Boolean>>();
	RemoveServiceEvent = new Events<WsResponseModel<Boolean>>();
	GetImageInfoEvent = new Events<WsResponseModel<GetImageInfoResponse>>();
	GetImagesInfoEvent = new Events<WsResponseModel<GetListImageInfoResponse>>();
	GetServiceEvent = new Events<WsResponseModel<GetServiceResponse>>();
	GetServicesEvent = new Events<WsResponseModel<GetListServiceResponse>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('ServiceConfigure', 'AddServiceToProject', (res: WsResponseModel<Boolean>) => {
			self.AddServiceToProjectEvent.trigger(res);
		});
		webApiService.on('ServiceConfigure', 'AddImageInfo', (res: WsResponseModel<Boolean>) => {
			self.AddImageInfoEvent.trigger(res);
		});
		webApiService.on('ServiceConfigure', 'EditService', (res: WsResponseModel<Boolean>) => {
			self.EditServiceEvent.trigger(res);
		});
		webApiService.on('ServiceConfigure', 'EditImageInfo', (res: WsResponseModel<Boolean>) => {
			self.EditImageInfoEvent.trigger(res);
		});
		webApiService.on('ServiceConfigure', 'UpImageVersion', (res: WsResponseModel<GetImageInfoResponse>) => {
			self.UpImageVersionEvent.trigger(res);
		});
		webApiService.on('ServiceConfigure', 'UploadDockerfile', (res: WsResponseModel<Boolean>) => {
			self.UploadDockerfileEvent.trigger(res);
		});
		webApiService.on('ServiceConfigure', 'DownloadDockerfile', (res: WsResponseModel<DockerfileResponse>) => {
			self.DownloadDockerfileEvent.trigger(res);
		});
		webApiService.on('ServiceConfigure', 'RemoveImage', (res: WsResponseModel<Boolean>) => {
			self.RemoveImageEvent.trigger(res);
		});
		webApiService.on('ServiceConfigure', 'RemoveService', (res: WsResponseModel<Boolean>) => {
			self.RemoveServiceEvent.trigger(res);
		});
		webApiService.on('ServiceConfigure', 'GetImageInfo', (res: WsResponseModel<GetImageInfoResponse>) => {
			self.GetImageInfoEvent.trigger(res);
		});
		webApiService.on('ServiceConfigure', 'GetImagesInfo', (res: WsResponseModel<GetListImageInfoResponse>) => {
			self.GetImagesInfoEvent.trigger(res);
		});
		webApiService.on('ServiceConfigure', 'GetService', (res: WsResponseModel<GetServiceResponse>) => {
			self.GetServiceEvent.trigger(res);
		});
		webApiService.on('ServiceConfigure', 'GetServices', (res: WsResponseModel<GetListServiceResponse>) => {
			self.GetServicesEvent.trigger(res);
		});
	}
	AddServiceToProject(request: AddServiceRequest = null) { 	
        this.webApiService.send('ServiceConfigure', 'AddServiceToProject' , request);
    }
	AddImageInfo(request: AddImageInfoRequest = null) { 	
        this.webApiService.send('ServiceConfigure', 'AddImageInfo' , request);
    }
	EditService(request: EditServiceRequest = null) { 	
        this.webApiService.send('ServiceConfigure', 'EditService' , request);
    }
	EditImageInfo(request: EditImageInfoRequest = null) { 	
        this.webApiService.send('ServiceConfigure', 'EditImageInfo' , request);
    }
	UpImageVersion(request: UpImageVersionRequest = null) { 	
        this.webApiService.send('ServiceConfigure', 'UpImageVersion' , request);
    }
	UploadDockerfile(request: UploadDockerfileRequest = null) { 	
        this.webApiService.send('ServiceConfigure', 'UploadDockerfile' , request);
    }
	DownloadDockerfile(request: DownloadDockerfileRequest = null) { 	
        this.webApiService.send('ServiceConfigure', 'DownloadDockerfile' , request);
    }
	RemoveImage(request: RemoveImageRequest = null) { 	
        this.webApiService.send('ServiceConfigure', 'RemoveImage' , request);
    }
	RemoveService(request: RemoveServiceRequest = null) { 	
        this.webApiService.send('ServiceConfigure', 'RemoveService' , request);
    }
	GetImageInfo(request: GetImageRequest = null) { 	
        this.webApiService.send('ServiceConfigure', 'GetImageInfo' , request);
    }
	GetImagesInfo(request: GetListImageRequest = null) { 	
        this.webApiService.send('ServiceConfigure', 'GetImagesInfo' , request);
    }
	GetService(request: GetServiceRequest = null) { 	
        this.webApiService.send('ServiceConfigure', 'GetService' , request);
    }
	GetServices(request: GetListServiceRequest = null) { 	
        this.webApiService.send('ServiceConfigure', 'GetServices' , request);
    }
	 // async methods
	async addServiceToProjectAsync(request: AddServiceRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.AddServiceToProject.bind(this), this.AddServiceToProjectEvent)(request);
	}
	async addImageInfoAsync(request: AddImageInfoRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.AddImageInfo.bind(this), this.AddImageInfoEvent)(request);
	}
	async editServiceAsync(request: EditServiceRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.EditService.bind(this), this.EditServiceEvent)(request);
	}
	async editImageInfoAsync(request: EditImageInfoRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.EditImageInfo.bind(this), this.EditImageInfoEvent)(request);
	}
	async upImageVersionAsync(request: UpImageVersionRequest = null): Promise<GetImageInfoResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.UpImageVersion.bind(this), this.UpImageVersionEvent)(request);
	}
	async uploadDockerfileAsync(request: UploadDockerfileRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.UploadDockerfile.bind(this), this.UploadDockerfileEvent)(request);
	}
	async downloadDockerfileAsync(request: DownloadDockerfileRequest = null): Promise<DockerfileResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.DownloadDockerfile.bind(this), this.DownloadDockerfileEvent)(request);
	}
	async removeImageAsync(request: RemoveImageRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.RemoveImage.bind(this), this.RemoveImageEvent)(request);
	}
	async removeServiceAsync(request: RemoveServiceRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.RemoveService.bind(this), this.RemoveServiceEvent)(request);
	}
	async getImageInfoAsync(request: GetImageRequest = null): Promise<GetImageInfoResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetImageInfo.bind(this), this.GetImageInfoEvent)(request);
	}
	async getImagesInfoAsync(request: GetListImageRequest = null): Promise<GetListImageInfoResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetImagesInfo.bind(this), this.GetImagesInfoEvent)(request);
	}
	async getServiceAsync(request: GetServiceRequest = null): Promise<GetServiceResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetService.bind(this), this.GetServiceEvent)(request);
	}
	async getServicesAsync(request: GetListServiceRequest = null): Promise<GetListServiceResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetServices.bind(this), this.GetServicesEvent)(request);
	}
}