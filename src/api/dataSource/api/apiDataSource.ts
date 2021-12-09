import { WebApiService } from './plugins/webApiService';
import ProjectConfigure from './ProjectSetup/ProjectConfigure';
import WsCallbacks from './WebSocketControllers/Core/WsCallbacks';
import WsStateWsController from './WebSocketControllers/Core/WsStateWsController';
import ServiceConfigure from './ServiceSetup/ServiceConfigure';
import SchemasConfigure from './SchemasSetup/SchemasConfigure';
import EngineApiService from './Docker/EngineAPI/EngineApiService';
import MonitoringService from './MonitoringServices/MonitoringService'

export default class apiDataSource {
	webApiService: WebApiService;
	ProjectConfigure: ProjectConfigure;
	WsCallbacks: WsCallbacks;
	WsStateWsController: WsStateWsController;
	ServiceConfigure: ServiceConfigure;
	SchemasConfigure: SchemasConfigure;
	EngineApiService: EngineApiService;
	MonitoringService: MonitoringService;
	constructor(webApiUrl: string) {
		this.webApiService = new WebApiService(webApiUrl);
		this.ProjectConfigure = new ProjectConfigure(this.webApiService);
		this.WsCallbacks = new WsCallbacks(this.webApiService);
		this.WsStateWsController = new WsStateWsController(this.webApiService);
		this.ServiceConfigure = new ServiceConfigure(this.webApiService);
		this.SchemasConfigure = new SchemasConfigure(this.webApiService);
		this.EngineApiService = new EngineApiService(this.webApiService);
		this.MonitoringService = new MonitoringService(this.webApiService);
	}

}
