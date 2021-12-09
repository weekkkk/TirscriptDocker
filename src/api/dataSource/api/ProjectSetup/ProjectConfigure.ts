import { WebApiService } from '../plugins/webApiService'
import { Events } from '../plugins/events'
import EventToAsyncDecorator from '../plugins/eventToAsyncDecorator'
import AuthorizationRequest from '../Docker/IProjectSetup/Requests/AuthorizationRequest';
import AddProjectRequest from '../IProjectSetup/Requests/AddProjectRequest';
import AddServerRequest from '../IProjectSetup/Requests/AddServerRequest';
import EditProjectRequest from '../IProjectSetup/Requests/EditProjectRequest';
import EditRegistryRequest from '../IProjectSetup/Requests/EditRegistryRequest';
import EditServerRequest from '../IProjectSetup/Requests/EditServerRequest';
import RemoveProjectRequest from '../IProjectSetup/Requests/Project/RemoveProjectRequest';
import RemoveRegistryRequest from '../IProjectSetup/Requests/Registry/RemoveRegistryRequest';
import RemoveServerRequest from '../IProjectSetup/Requests/Server/RemoveServerRequest';
import GetProjectRequest from '../IProjectSetup/Requests/Project/GetProjectRequest';
import GetRegistryRequest from '../IProjectSetup/Requests/Registry/GetRegistryRequest';
import GetServerRequest from '../IProjectSetup/Requests/Server/GetServerRequest';
import GetListServersRequest from '../IProjectSetup/Requests/Server/GetListServersRequest';
import GetListServersByProjectRequest from '../IProjectSetup/Requests/Server/GetListServersByProjectRequest';
import WsResponseModel from '../SchemaBuilderServer/Models/WsResponseModel';
import ProjectResponse from '../IProjectSetup/Responses/ProjectResponse';
import RegistryResponse from '../IProjectSetup/Responses/RegistryResponse';
import ServerResponse from '../IProjectSetup/Responses/ServerResponse';
import GetListProjectServerResponse from '../IProjectSetup/Responses/GetListProjectServerResponse';

export default class ProjectConfigure {
	webApiService: WebApiService;
	AuthorizeUserEvent = new Events<WsResponseModel<Boolean>>();
	CreateProjectEvent = new Events<WsResponseModel<ProjectResponse>>();
	AddServerEvent = new Events<WsResponseModel<Boolean>>();
	EditProjectEvent = new Events<WsResponseModel<Boolean>>();
	EditRegistryEvent = new Events<WsResponseModel<Boolean>>();
	EditServerEvent = new Events<WsResponseModel<Boolean>>();
	RemoveProjectEvent = new Events<WsResponseModel<Boolean>>();
	RemoveRegistryEvent = new Events<WsResponseModel<Boolean>>();
	RemoveServerEvent = new Events<WsResponseModel<Boolean>>();
	GetProjectEvent = new Events<WsResponseModel<ProjectResponse>>();
	GetRegistryEvent = new Events<WsResponseModel<RegistryResponse>>();
	GetServerEvent = new Events<WsResponseModel<ServerResponse>>();
	GetServersEvent = new Events<WsResponseModel<GetListProjectServerResponse>>();
	GetServersInProjectEvent = new Events<WsResponseModel<GetListProjectServerResponse>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('ProjectConfigure', 'AuthorizeUser', (res: WsResponseModel<Boolean>) => {
			self.AuthorizeUserEvent.trigger(res);
		});
		webApiService.on('ProjectConfigure', 'CreateProject', (res: WsResponseModel<ProjectResponse>) => {
			self.CreateProjectEvent.trigger(res);
		});
		webApiService.on('ProjectConfigure', 'AddServer', (res: WsResponseModel<Boolean>) => {
			self.AddServerEvent.trigger(res);
		});
		webApiService.on('ProjectConfigure', 'EditProject', (res: WsResponseModel<Boolean>) => {
			self.EditProjectEvent.trigger(res);
		});
		webApiService.on('ProjectConfigure', 'EditRegistry', (res: WsResponseModel<Boolean>) => {
			self.EditRegistryEvent.trigger(res);
		});
		webApiService.on('ProjectConfigure', 'EditServer', (res: WsResponseModel<Boolean>) => {
			self.EditServerEvent.trigger(res);
		});
		webApiService.on('ProjectConfigure', 'RemoveProject', (res: WsResponseModel<Boolean>) => {
			self.RemoveProjectEvent.trigger(res);
		});
		webApiService.on('ProjectConfigure', 'RemoveRegistry', (res: WsResponseModel<Boolean>) => {
			self.RemoveRegistryEvent.trigger(res);
		});
		webApiService.on('ProjectConfigure', 'RemoveServer', (res: WsResponseModel<Boolean>) => {
			self.RemoveServerEvent.trigger(res);
		});
		webApiService.on('ProjectConfigure', 'GetProject', (res: WsResponseModel<ProjectResponse>) => {
			self.GetProjectEvent.trigger(res);
		});
		webApiService.on('ProjectConfigure', 'GetRegistry', (res: WsResponseModel<RegistryResponse>) => {
			self.GetRegistryEvent.trigger(res);
		});
		webApiService.on('ProjectConfigure', 'GetServer', (res: WsResponseModel<ServerResponse>) => {
			self.GetServerEvent.trigger(res);
		});
		webApiService.on('ProjectConfigure', 'GetServers', (res: WsResponseModel<GetListProjectServerResponse>) => {
			self.GetServersEvent.trigger(res);
		});
		webApiService.on('ProjectConfigure', 'GetServersInProject', (res: WsResponseModel<GetListProjectServerResponse>) => {
			self.GetServersInProjectEvent.trigger(res);
		});
	}
	AuthorizeUser(request: AuthorizationRequest = null) { 	
        this.webApiService.send('ProjectConfigure', 'AuthorizeUser' , request);
    }
	CreateProject(request: AddProjectRequest = null) { 	
        this.webApiService.send('ProjectConfigure', 'CreateProject' , request);
    }
	AddServer(request: AddServerRequest = null) { 	
        this.webApiService.send('ProjectConfigure', 'AddServer' , request);
    }
	EditProject(request: EditProjectRequest = null) { 	
        this.webApiService.send('ProjectConfigure', 'EditProject' , request);
    }
	EditRegistry(request: EditRegistryRequest = null) { 	
        this.webApiService.send('ProjectConfigure', 'EditRegistry' , request);
    }
	EditServer(request: EditServerRequest = null) { 	
        this.webApiService.send('ProjectConfigure', 'EditServer' , request);
    }
	RemoveProject(request: RemoveProjectRequest = null) { 	
        this.webApiService.send('ProjectConfigure', 'RemoveProject' , request);
    }
	RemoveRegistry(request: RemoveRegistryRequest = null) { 	
        this.webApiService.send('ProjectConfigure', 'RemoveRegistry' , request);
    }
	RemoveServer(request: RemoveServerRequest = null) { 	
        this.webApiService.send('ProjectConfigure', 'RemoveServer' , request);
    }
	GetProject(request: GetProjectRequest = null) { 	
        this.webApiService.send('ProjectConfigure', 'GetProject' , request);
    }
	GetRegistry(request: GetRegistryRequest = null) { 	
        this.webApiService.send('ProjectConfigure', 'GetRegistry' , request);
    }
	GetServer(request: GetServerRequest = null) { 	
        this.webApiService.send('ProjectConfigure', 'GetServer' , request);
    }
	GetServers(request: GetListServersRequest = null) { 	
        this.webApiService.send('ProjectConfigure', 'GetServers' , request);
    }
	GetServersInProject(request: GetListServersByProjectRequest = null) { 	
        this.webApiService.send('ProjectConfigure', 'GetServersInProject' , request);
    }
	 // async methods
	async authorizeUserAsync(request: AuthorizationRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.AuthorizeUser.bind(this), this.AuthorizeUserEvent)(request);
	}
	async createProjectAsync(request: AddProjectRequest = null): Promise<ProjectResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.CreateProject.bind(this), this.CreateProjectEvent)(request);
	}
	async addServerAsync(request: AddServerRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.AddServer.bind(this), this.AddServerEvent)(request);
	}
	async editProjectAsync(request: EditProjectRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.EditProject.bind(this), this.EditProjectEvent)(request);
	}
	async editRegistryAsync(request: EditRegistryRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.EditRegistry.bind(this), this.EditRegistryEvent)(request);
	}
	async editServerAsync(request: EditServerRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.EditServer.bind(this), this.EditServerEvent)(request);
	}
	async removeProjectAsync(request: RemoveProjectRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.RemoveProject.bind(this), this.RemoveProjectEvent)(request);
	}
	async removeRegistryAsync(request: RemoveRegistryRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.RemoveRegistry.bind(this), this.RemoveRegistryEvent)(request);
	}
	async removeServerAsync(request: RemoveServerRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.RemoveServer.bind(this), this.RemoveServerEvent)(request);
	}
	async getProjectAsync(request: GetProjectRequest = null): Promise<ProjectResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetProject.bind(this), this.GetProjectEvent)(request);
	}
	async getRegistryAsync(request: GetRegistryRequest = null): Promise<RegistryResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetRegistry.bind(this), this.GetRegistryEvent)(request);
	}
	async getServerAsync(request: GetServerRequest = null): Promise<ServerResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetServer.bind(this), this.GetServerEvent)(request);
	}
	async getServersAsync(request: GetListServersRequest = null): Promise<GetListProjectServerResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetServers.bind(this), this.GetServersEvent)(request);
	}
	async getServersInProjectAsync(request: GetListServersByProjectRequest = null): Promise<GetListProjectServerResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetServersInProject.bind(this), this.GetServersInProjectEvent)(request);
	}
}