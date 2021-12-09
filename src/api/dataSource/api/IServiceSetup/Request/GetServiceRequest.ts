import PageRequest from '../../PaginationHelper/Lib/PageRequest';

export default class GetServiceRequest  {
	IdService: number = 0;
	Page: PageRequest = null;
	constructor(obj?: Partial<GetServiceRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
