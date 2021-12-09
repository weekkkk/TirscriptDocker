

export default class GetStatsRequest  {
	MainProjectId: number = 0;
	IsRun: boolean = false;
	constructor(obj?: Partial<GetStatsRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
