import PageRequest from '../../../PaginationHelper/Lib/PageRequest';

export default class GetListServersRequest  {
	RegistryId: number = 0;
	Page: PageRequest = null;
	constructor(obj?: Partial<GetListServersRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
