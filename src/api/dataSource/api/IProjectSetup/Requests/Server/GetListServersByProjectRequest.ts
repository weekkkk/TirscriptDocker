import PageRequest from '../../../PaginationHelper/Lib/PageRequest';

export default class GetListServersByProjectRequest  {
	MainProjectId: number = 0;
	Page: PageRequest = null;
	constructor(obj?: Partial<GetListServersByProjectRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
