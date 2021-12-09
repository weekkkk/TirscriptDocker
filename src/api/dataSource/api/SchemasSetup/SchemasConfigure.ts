import { WebApiService } from '../plugins/webApiService'
import { Events } from '../plugins/events'
import EventToAsyncDecorator from '../plugins/eventToAsyncDecorator'
import AddSchemaRequest from '../ISchemasSetup/Request/AddSchemaRequest';
import AddSettingsRequest from '../ISchemasSetup/Request/AddSettingsRequest';
import AddServerSchema from '../ISchemasSetup/Request/AddServerSchema';
import EditSettingsRequest from '../Docker/ISchemasSetup/Request/Settings/EditSettingsRequest';
import EditSchemaRequest from '../ISchemasSetup/Request/EditSchemaRequest';
import RemoveSchemaRequest from '../ISchemasSetup/Request/Schemas/RemoveSchemaRequest';
import RemoveSettingsRequest from '../Docker/ISchemasSetup/Request/Settings/RemoveSettingsRequest';
import RemoveReleaseServerRequest from '../Docker/ISchemasSetup/Request/Schemas/RemoveReleaseServerRequest';
import GetSchemaRequest from '../ISchemasSetup/Request/Schemas/GetSchemaRequest';
import GetListSchemasRequest from '../ISchemasSetup/Request/Schemas/GetListSchemasRequest';
import GetListSettingsRequest from '../ISchemasSetup/Request/Settings/GetListSettingsRequest';
import GetListServersBySchemasRequest from '../ISchemasSetup/Request/Settings/GetListServersBySchemasRequest';
import WsResponseModel from '../SchemaBuilderServer/Models/WsResponseModel';
import SchemaResponse from '../ISchemasSetup/Response/SchemaResponse';
import GetListSchemasResponse from '../ISchemasSetup/Response/GetListSchemasResponse';
import GetListSettingsResponse from '../ISchemasSetup/Response/GetListSettingsResponse';
import GetListServerResponse from '../ISchemasSetup/Response/GetListServerResponse';

export default class SchemasConfigure {
	webApiService: WebApiService;
	AddSchemasEvent = new Events<WsResponseModel<Boolean>>();
	AddSettingsEvent = new Events<WsResponseModel<Boolean>>();
	AddServersToSchemasEvent = new Events<WsResponseModel<Boolean>>();
	EditSettingsEvent = new Events<WsResponseModel<Boolean>>();
	EditSchemasEvent = new Events<WsResponseModel<Boolean>>();
	RemoveSchemasEvent = new Events<WsResponseModel<Boolean>>();
	RemoveSettingsEvent = new Events<WsResponseModel<Boolean>>();
	RemoveReleaseServerEvent = new Events<WsResponseModel<Boolean>>();
	GetSchemaEvent = new Events<WsResponseModel<SchemaResponse>>();
	GetSchemasEvent = new Events<WsResponseModel<GetListSchemasResponse>>();
	GetSettingsEvent = new Events<WsResponseModel<GetListSettingsResponse>>();
	GetListReleaseServersEvent = new Events<WsResponseModel<GetListServerResponse>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('SchemasConfigure', 'AddSchemas', (res: WsResponseModel<Boolean>) => {
			self.AddSchemasEvent.trigger(res);
		});
		webApiService.on('SchemasConfigure', 'AddSettings', (res: WsResponseModel<Boolean>) => {
			self.AddSettingsEvent.trigger(res);
		});
		webApiService.on('SchemasConfigure', 'AddServersToSchemas', (res: WsResponseModel<Boolean>) => {
			self.AddServersToSchemasEvent.trigger(res);
		});
		webApiService.on('SchemasConfigure', 'EditSettings', (res: WsResponseModel<Boolean>) => {
			self.EditSettingsEvent.trigger(res);
		});
		webApiService.on('SchemasConfigure', 'EditSchemas', (res: WsResponseModel<Boolean>) => {
			self.EditSchemasEvent.trigger(res);
		});
		webApiService.on('SchemasConfigure', 'RemoveSchemas', (res: WsResponseModel<Boolean>) => {
			self.RemoveSchemasEvent.trigger(res);
		});
		webApiService.on('SchemasConfigure', 'RemoveSettings', (res: WsResponseModel<Boolean>) => {
			self.RemoveSettingsEvent.trigger(res);
		});
		webApiService.on('SchemasConfigure', 'RemoveReleaseServer', (res: WsResponseModel<Boolean>) => {
			self.RemoveReleaseServerEvent.trigger(res);
		});
		webApiService.on('SchemasConfigure', 'GetSchema', (res: WsResponseModel<SchemaResponse>) => {
			self.GetSchemaEvent.trigger(res);
		});
		webApiService.on('SchemasConfigure', 'GetSchemas', (res: WsResponseModel<GetListSchemasResponse>) => {
			self.GetSchemasEvent.trigger(res);
		});
		webApiService.on('SchemasConfigure', 'GetSettings', (res: WsResponseModel<GetListSettingsResponse>) => {
			self.GetSettingsEvent.trigger(res);
		});
		webApiService.on('SchemasConfigure', 'GetListReleaseServers', (res: WsResponseModel<GetListServerResponse>) => {
			self.GetListReleaseServersEvent.trigger(res);
		});
	}
	AddSchemas(request: AddSchemaRequest = null) { 	
        this.webApiService.send('SchemasConfigure', 'AddSchemas' , request);
    }
	AddSettings(request: AddSettingsRequest = null) { 	
        this.webApiService.send('SchemasConfigure', 'AddSettings' , request);
    }
	AddServersToSchemas(request: AddServerSchema = null) { 	
        this.webApiService.send('SchemasConfigure', 'AddServersToSchemas' , request);
    }
	EditSettings(request: EditSettingsRequest = null) { 	
        this.webApiService.send('SchemasConfigure', 'EditSettings' , request);
    }
	EditSchemas(request: EditSchemaRequest = null) { 	
        this.webApiService.send('SchemasConfigure', 'EditSchemas' , request);
    }
	RemoveSchemas(request: RemoveSchemaRequest = null) { 	
        this.webApiService.send('SchemasConfigure', 'RemoveSchemas' , request);
    }
	RemoveSettings(request: RemoveSettingsRequest = null) { 	
        this.webApiService.send('SchemasConfigure', 'RemoveSettings' , request);
    }
	RemoveReleaseServer(request: RemoveReleaseServerRequest = null) { 	
        this.webApiService.send('SchemasConfigure', 'RemoveReleaseServer' , request);
    }
	GetSchema(request: GetSchemaRequest = null) { 	
        this.webApiService.send('SchemasConfigure', 'GetSchema' , request);
    }
	GetSchemas(request: GetListSchemasRequest = null) { 	
        this.webApiService.send('SchemasConfigure', 'GetSchemas' , request);
    }
	GetSettings(request: GetListSettingsRequest = null) { 	
        this.webApiService.send('SchemasConfigure', 'GetSettings' , request);
    }
	GetListReleaseServers(request: GetListServersBySchemasRequest = null) { 	
        this.webApiService.send('SchemasConfigure', 'GetListReleaseServers' , request);
    }
	 // async methods
	async addSchemasAsync(request: AddSchemaRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.AddSchemas.bind(this), this.AddSchemasEvent)(request);
	}
	async addSettingsAsync(request: AddSettingsRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.AddSettings.bind(this), this.AddSettingsEvent)(request);
	}
	async addServersToSchemasAsync(request: AddServerSchema = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.AddServersToSchemas.bind(this), this.AddServersToSchemasEvent)(request);
	}
	async editSettingsAsync(request: EditSettingsRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.EditSettings.bind(this), this.EditSettingsEvent)(request);
	}
	async editSchemasAsync(request: EditSchemaRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.EditSchemas.bind(this), this.EditSchemasEvent)(request);
	}
	async removeSchemasAsync(request: RemoveSchemaRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.RemoveSchemas.bind(this), this.RemoveSchemasEvent)(request);
	}
	async removeSettingsAsync(request: RemoveSettingsRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.RemoveSettings.bind(this), this.RemoveSettingsEvent)(request);
	}
	async removeReleaseServerAsync(request: RemoveReleaseServerRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.RemoveReleaseServer.bind(this), this.RemoveReleaseServerEvent)(request);
	}
	async getSchemaAsync(request: GetSchemaRequest = null): Promise<SchemaResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetSchema.bind(this), this.GetSchemaEvent)(request);
	}
	async getSchemasAsync(request: GetListSchemasRequest = null): Promise<GetListSchemasResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetSchemas.bind(this), this.GetSchemasEvent)(request);
	}
	async getSettingsAsync(request: GetListSettingsRequest = null): Promise<GetListSettingsResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetSettings.bind(this), this.GetSettingsEvent)(request);
	}
	async getListReleaseServersAsync(request: GetListServersBySchemasRequest = null): Promise<GetListServerResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetListReleaseServers.bind(this), this.GetListReleaseServersEvent)(request);
	}
}