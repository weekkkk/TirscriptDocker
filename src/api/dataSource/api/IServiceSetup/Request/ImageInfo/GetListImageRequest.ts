import PageRequest from '../../../PaginationHelper/Lib/PageRequest';

export default class GetListImageRequest  {
	ServiceId: number = 0;
	Page: PageRequest = null;
	constructor(obj?: Partial<GetListImageRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
