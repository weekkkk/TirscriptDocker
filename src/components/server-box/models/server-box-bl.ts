import ServerType from "@/components/server-box/models/server-type";
import RowType from "@/components/table/models/row-type";

export default class ServerBoxBL {
  servers: ServerType[] = [];
  possibleСonteiners: RowType[] = []
  constructor(servers: ServerType[], possibleСonteiners: RowType[]) {
    this.servers = servers;
    this.possibleСonteiners = possibleСonteiners;
  }
  addServer(server) {
    server.id = Date.now();
    this.servers.push(server);
  }
  addConteiner(conteiner, serverId) {
    this.servers.forEach(s => s.id == serverId ? s.conteiners.push(conteiner):{})
  }
  removeConteiner(conteinerId, serverId) {
    this.servers.forEach(s => s.id == serverId ? s.conteiners = s.conteiners.filter((c) => c.id != conteinerId):{})
  }
}