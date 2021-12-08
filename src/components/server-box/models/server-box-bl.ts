import ServerType from "@/components/server-box/models/server-type";
import RowType from "@/components/table/models/image-type";

export default class ServerBoxBL {
  servers: ServerType[] = [];
  possibleСontainers: RowType[] = []
  constructor(servers: ServerType[], possibleСontainers: RowType[]) {
    this.servers = servers;
    this.possibleСontainers = possibleСontainers;
  }
  addServer(server) {
    server.id = Date.now();
    this.servers.push(server);
  }
  addContainer(container, serverId) {
    this.servers.forEach(s => s.id == serverId ? s.containers.push(container) : {})
  }
  removeContainer(containerId, serverId) {
    this.servers.forEach(s => s.id == serverId ? s.containers = s.containers.filter((c) => c.id != containerId) : {})
  }
}