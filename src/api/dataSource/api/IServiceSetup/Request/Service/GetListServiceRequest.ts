import PageRequest from '../../../PaginationHelper/Lib/PageRequest';

export default class GetListServiceRequest  {
	IdMainProject: number = 0;
	Page: PageRequest = null;
	constructor(obj?: Partial<GetListServiceRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
