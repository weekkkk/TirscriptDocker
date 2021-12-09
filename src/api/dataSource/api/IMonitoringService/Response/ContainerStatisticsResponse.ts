import Single from 'vue'

export default class ContainerStatisticsResponse  {
	Server?: string = '';
	MainProjectId: number = 0;
	ContainerId?: string = '';
	NameContainer?: string = '';
	CpuPercent: Single = null;
	Memory: Single = null;
	MemoryLimit: Single = null;
	MemoryPercent: Single = null;
	BlkWrite: Single = null;
	BlkRead: Single = null;
	NetworkRx: Single = null;
	NetworkTx: Single = null;
	constructor(obj?: Partial<ContainerStatisticsResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
